import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Perguntas from "./forms/Perguntas";
import { Link } from "react-router-dom";

export default function Invite() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/destino'); // substitua '/destino' pela rota para a qual deseja redirecionar
  };

  return (
    <div className="bg-[#fafbfc] pt-24">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] py-16 px-6">
        {/* Imagem */}
        <div className="flex justify-center lg:w-1/2 mt-8 lg:mt-0">
          <img 
            src="./public/men.png" 
            alt="Oportunidade"
            className="max-w-full h-auto rounded-lg" 
            style={{ width: '80%', maxWidth: '600px', height: 'auto' }}
          />
        </div>
        {/* Texto e Botões */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="xl:text-3xl lg:text-6xl dm:text-4xl text-3xl xl:leading-normal lg:leading-normal text-center lg:text-left">
            Encontre a sua <span className="text-[#ffa600] whitespace-pre font-bold">oportunidade</span> em um<br/> clique!
          </h1>
          <p className="text-center lg:text-left leading-15 my-2 text-lg">
            "Descubra oportunidades e soluções inovadoras em nosso site. Junte-se à nossa comunidade online de sucesso hoje mesmo!"
          </p>
          
          <div className="flex items-center justify-center lg:w-2/3 relative mt-4">
            <Link to="/Perguntas"
              className="bg-[#ffa600] text-white py-3 px-8 rounded-full text-lg absolute right-40 mt-5"
              onClick={handleButtonClick}
            >Efectuar Teste
              
            </Link>
            <Link to="/Candidatura"
              className="bg-[#ffa600] text-white py-3 px-8 rounded-full text-lg absolute left-0 mt-5"
              onClick={handleButtonClick}
            >
              Candidatura
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
