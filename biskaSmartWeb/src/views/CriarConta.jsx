import { useState } from 'react';
import Navbar from '../components/Navbar';

const CriarConta = () => {
    const [nome, setNome] = useState('');
    const [tipoConta, setTipoConta] = useState('Empresa');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [telemovel, setTelemovel] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar lógica para enviar os dados para o servidor ou realizar outras ações
        console.log({
            nome,
            tipoConta,
            email,
            username,
            telemovel,
            password,
            confirmarPassword
        });
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md text-black border border-[#0000002b]">
                <h2 className="text-[#ffa900] text-2xl font-bold mb-8 ">Criar Conta</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-2">
                            <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="text-black mt-1 block w-full px-4 py-2 border border-[#0000007d] rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 items-center">
                        <div>
                            <label className="block text-sm font-medium">Tipo de Conta</label>
                            <div className="mt-1 flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="Empresa"
                                        checked={tipoConta === 'Empresa'}
                                        onChange={() => setTipoConta('Empresa')}
                                        className="form-radio h-4 w-4 text-yellow-500 "
                                    />
                                    <span className="ml-2 text-sm">Empresa</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="Individual"
                                        checked={tipoConta === 'Individual'}
                                        onChange={() => setTipoConta('Individual')}
                                        className="form-radio h-4 w-4 text-yellow-500 "
                                    />
                                    <span className="ml-2 text-sm">Individual</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" text-black mt-1 block w-full border border-[#0000007d] px-4 py-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="text-black mt-1 block w-full border border-[#0000007d] px-4 py-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telemovel" className="block text-sm font-medium">Telemóvel</label>
                            <input
                                id="telemovel"
                                type="tel"
                                value={telemovel}
                                onChange={(e) => setTelemovel(e.target.value)}
                                className="text-black mt-1 block w-full border border-[#0000007d] px-4 py-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-black mt-1 block w-full border border-[#0000007d] px-4 py-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmarPassword" className="block text-sm font-medium">Confirmar Password</label>
                            <input
                                id="confirmarPassword"
                                type="password"
                                value={confirmarPassword}
                                onChange={(e) => setConfirmarPassword(e.target.value)}
                                className=" text-black mt-1 block w-full border border-[#0000007d] px-4 py-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button type="submit" className="bg-[#ffa900] text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                            Criar Conta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CriarConta;