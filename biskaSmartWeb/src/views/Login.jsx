import Style from './Login.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useNavigate();

  // Verificar se o usuário já está autenticado
  useEffect(() => {
    const usuarioAutenticado = localStorage.getItem('authenticated') === "true";

    if (usuarioAutenticado) {
      // Se o usuário já estiver autenticado, redireciona para a página restrita
      history('/Prestador');
    }
  }, [history]);

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem("authenticated", "true"); // Define autenticado como true no localStorage
    history('/Prestador'); // Redireciona para a página restrita após o login
  }
  
  return (
    <>
      <Navbar />
      <section className={Style.login_Layout}>
        <article className={Style.Formulario}>
          <article className={Style.Texts}>
            <p className='text-white'>Faça o Login</p>
          </article>
          <form onSubmit={handleLogin}>
            {/* Campo de email */}
            <div className={Style.div1}>
              <label className='text-white' htmlFor="email">Email:</label>
              <input className={Style.inputs} value={email} name="email" id="email" placeholder="Insira o email" type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* Campo de senha */}
            <div className={Style.div2}>
              <label className='text-white' htmlFor="senha">Senha:</label>
              <input className={Style.inputs} value={senha} name="senha" id="senha" placeholder="Insira sua senha" type="password" onChange={(e) => setSenha(e.target.value)} />
            </div>
            {/* Exibir mensagem de erro, se houver */}
            {<p className={Style.erroLogin}></p>}
            {/* Links e botão de login */}
            <div className={Style.div3}>
              <a href="https://www.facebook.com">Esqueceu a sua senha?</a>
              <button className={Style.buttonEntrar} id="btn-Entrar" type="submit">
                Entrar
              </button>
            </div>
          </form>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Login;
