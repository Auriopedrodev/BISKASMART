import { useState,useEffect } from 'react';
//import './CriarConta.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const IniciarSessao = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

    // Verificar se o usuário já está autenticado
    useEffect(() => {
      const usuarioAutenticado = localStorage.getItem('authenticated') === "true";
  
      if (usuarioAutenticado) {
        // Se o usuário já estiver autenticado, redireciona para a página restrita
        history('/');
      }
    }, [history]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(username==="Tulling" && password==="12345"){
        localStorage.setItem("authenticated", "true"); // Define autenticado como true no localStorage
        history('/'); // Redireciona para a página restrita após o login
     }
    }

  return (
    <div>
      <Navbar />
      <div className="buttonCriar bg-[#ffa900] max-w-md mx-auto my-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-[#fff] ">Iniciar Sessão</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium ">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium ">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
              required
            />
          </div>
          <div>
            <a className="text-white" href=""> Esqueceu a sua palavra passe?</a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="bg-[#ffa900] border border-white text-white py-2 px-4 rounded hover:bg-[#000] hover:border-black transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
              Iniciar Sessão
            </button>
          </div>
        </form>
      </div>

    </div>);
};

export default IniciarSessao;