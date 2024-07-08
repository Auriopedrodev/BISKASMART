/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

export default function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostasSelecionadas, setRespostasSelecionadas] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(5400); // Tempo em segundos (90 minutos)
  const [iniciado, setIniciado] = useState(false);
  const [desclassificado, setDesclassificado] = useState(false);

  useEffect(() => {
    async function obterPerguntas() {
      try {
        const response = await axios.get("http://localhost:5000/Perguntas");
        setPerguntas(response.data);
        setRespostasSelecionadas(new Array(response.data.length).fill(null));
      } catch (error) {
        console.error('Erro ao obter perguntas:', error);
      }
    }

    obterPerguntas();
    
    const storedState = localStorage.getItem("quizState");
    if (storedState) {
      const state = JSON.parse(storedState);
      setQuestaoAtual(state.questaoAtual);
      setPontuacao(state.pontuacao);
      setRespostasSelecionadas(state.respostasSelecionadas);
      setFinalizado(state.finalizado);
      setTempoRestante(state.tempoRestante);
      setIniciado(state.iniciado);
      setDesclassificado(state.desclassificado);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (iniciado) {
      interval = setInterval(() => {
        setTempoRestante(prevTempo => prevTempo - 1);
      }, 1000);
      
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("blur", handleBlur);

      if (tempoRestante === 0) {
        clearInterval(interval);
        setFinalizado(true);
      }
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("blur", handleBlur);
    };
  }, [tempoRestante, iniciado]);

  useEffect(() => {
    const quizState = {
      questaoAtual,
      pontuacao,
      respostasSelecionadas,
      finalizado,
      tempoRestante,
      iniciado,
      desclassificado
    };
    localStorage.setItem("quizState", JSON.stringify(quizState));
  }, [questaoAtual, pontuacao, respostasSelecionadas, finalizado, tempoRestante, iniciado, desclassificado]);

  function handleBeforeUnload(event) {
    if (iniciado && !finalizado && !desclassificado) {
      event.preventDefault();
      event.returnValue = "Você será desclassificado se sair da página!";
      return "Você será desclassificado se sair da página!";
    }
  }

  function handleBlur() {
    if (iniciado && !finalizado) {
      setDesclassificado(true);
      setIniciado(false);
      setFinalizado(true);
      alert("Você foi desclassificado por tentar sair da página.");
    }
  }

  function handleSelecionarResposta(resposta) {
    const novasRespostasSelecionadas = [...respostasSelecionadas];
    novasRespostasSelecionadas[questaoAtual] = resposta;
    setRespostasSelecionadas(novasRespostasSelecionadas);
  }

  function handleProximaQuestao() {
    if (respostasSelecionadas[questaoAtual] === perguntas[questaoAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    if (questaoAtual < perguntas.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      setFinalizado(true);
    }
  }

  function handleQuestaoAnterior() {
    if (questaoAtual > 0) {
      setQuestaoAtual(questaoAtual - 1);
    }
  }

  function handleIniciar() {
    setIniciado(true);
  }

  // Converte segundos para formato de hora:minuto:segundo
  function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;
    return `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundosFormatados < 10 ? '0' : ''}${segundosFormatados}`;
  }

  return (
    <>
      <Navbar />
      <main className="max-w-full m-5 flex flex-col">
        <div className="flex items-center justify-between m-5">
          <h1 className="font-bold text-xl">Perguntas Concurso público Finanças</h1>
          {iniciado && <p>Tempo restante: {formatarTempo(tempoRestante)}</p>}
        </div>

        {!iniciado && !desclassificado ? (
          <div className="flex justify-center m-5">
            <button
              onClick={handleIniciar}
              className="w-[150px] py-2 bg-black text-[#fff] rounded-lg border border-black"
            >
              Começar
            </button>
          </div>
        ) : finalizado ? (
          <div className="m-5">
            <h2>{desclassificado ? "Você foi desclassificado!" : "Você terminou o quiz!"}</h2>
            {!desclassificado && (
              <p>Sua pontuação final é: {(pontuacao / perguntas.length) * 100}% de {perguntas.length}</p>
            )}
          </div>
        ) : (
          <>
            <div className="max-w-full justify-between my-2 m-5 border border-blue-500 p-5 flex gap-5">
              <label className="text-md" htmlFor={`pergunta-${questaoAtual}`}>
                {perguntas[questaoAtual]?.pergunta}
              </label>
            </div>
            {perguntas[questaoAtual]?.opcoes.map((opcao, index) => (
              <div key={index} className="flex gap-2 m-5">
                <input
                  type="radio"
                  id={`opcao-${index}`}
                  name={`pergunta-${questaoAtual}`}
                  onChange={() => handleSelecionarResposta(opcao)}
                  checked={respostasSelecionadas[questaoAtual] === opcao}
                  className=""
                />
                <label htmlFor={`opcao-${index}`}>{opcao}</label>
              </div>
            ))}

            <div className="flex justify-between m-5">
              <button
                onClick={handleQuestaoAnterior}
                className="w-[150px] py-2 bg-black text-[#fff] rounded-lg border border-black"
                disabled={questaoAtual === 0}
              >
                Voltar
              </button>
              <button
                onClick={handleProximaQuestao}
                className="w-[150px] py-2 bg-black text-[#fff] rounded-lg border border-black"
                disabled={respostasSelecionadas[questaoAtual] === null}
              >
                Próxima questão
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
