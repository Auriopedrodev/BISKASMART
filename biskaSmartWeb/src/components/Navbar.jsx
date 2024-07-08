import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
const [dropdown, setDropdown] = useState(false);
const authenticated = localStorage.getItem('authenticated') === "true";
const history = useNavigate();

const showDropdown = () => {
    setDropdown(!dropdown);
};

const handleLogout = () => {
    localStorage.removeItem("authenticated"); // Remove a chave de autenticação do localStorage
    history("/"); // Redireciona para a página de login após logout
  };


return (
    <nav className="w-full h-24 flex flex-col justify-center items-center bg-white  z-20">
        <div className="container mx-auto lg:px-6">
            <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <span className="flex items-center lg:text-5xl text-3xl">
                            <button className="py-1 font-bold text-[#ffa600] lg:text-5xl text 3xl outline-none border-none ">BISKA</button>
                            <p className="font-light loading-light">SMART</p>
                        </span>
                    </div>
                </div>
               
                <div className="flex max-lg:hidden gap-x-4">
                    {authenticated ? (
                        <>
                         <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
                    <Link to="/" className="leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Pagina Inicial</Link>
                    <Link to="/AboutUs" className="leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Sobre Nós</Link>
                    <Link to={"/Recomendacao"} className="leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Serviços</Link>
                    <Link to={"/CandidaturaCliente"} className="me-8 leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Candidatura</Link>
                </ul>
                        <button onClick={handleLogout} className=" rounded-lg bg-black text-lg text-[#fff] border-none px-2 py-1 hover:text-[#fff]">Sair da conta</button>
                         </>                               
                    ) : (
                        <>
                         <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
                    <Link to="/" className="leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Pagina Inicial</Link>
                    <Link to="/AboutUs" className="leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Sobre Nós</Link>
                    <Link to={"/Recomendacao"} className=" leading-normal no-underline text-black text-lg hover:text-[#ffa600]">Serviços</Link>
                </ul>
                            <Link to={"/Login"} className=" flex items-center rounded-xl bg-[#ffa600] text-lg text-black border-none px-4 py-2 hoverBtn">Login</Link>
                            <Link to={"/CriarConta"} className=" flex items-center rounded-xl bg-[#000000] text-lg text-white border-none px-4 py-2 hoverBtn">Criar Conta</Link>
                        </>
                    )}
                </div>
                { dropdown ? (
                    <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                        <MdClose />
                    </div>
                ) : (
                    <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                        <HiMenuAlt3/>
                    </div>
                )}
            </div>
            {dropdown ? (
                <div className="lg:hidden w-full h-[100vh] fixed top-24 bg-[#ffa600] ease-in-out duration-100">
                    <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                        <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                            <Link to="/" className="leading-normal no-underline text-black text-lg hover:text-[#fff]">Pagina Inicial</Link>
                            <Link to="/AboutUs" className="leading-normal no-underline text-black text-lg hover:text-[#fff]">Sobre Nós</Link>
                        </ul>
                        <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                            {authenticated ? (
                                <>
                                <button onClick={handleLogout} className=" rounded-lg bg-[#dd2b21] text-lg text-[#fff] border-none px-2 py-2 hover:text-[#fff]">Sair da conta</button>
                                 </>
                            ) : (
                                <>
                                    <Link to={"/Login"} className="rounded-full bg-[#ffa600] text-lg text-[black] border-none px-8 py-3 hoverBtn hover:text-[#fff]">Login</Link>
                                    <Link to={"/Registrar"} className="rounded-full bg-[#000000] text-lg text-white border-none px-8 py-3 hover:text-white">Criar Conta</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    </nav>
);
}
