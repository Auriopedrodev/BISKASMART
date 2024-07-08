import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { LiaDotCircle } from "react-icons/lia";
import Navbar from "./Navbar";

export default function Recomendacao() {
    const Categories = ({ image, title, opening }) => {
        return (
            <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
                <span className="flex items-center gap-x-4">
                    <img src={image} alt="" width={30} /> <p>{title}</p>
                </span>
                <p className="font-bold"> <span className="font-bold px-2 text-[#ffa600]">{opening} </span> Disponível</p>
            </div>
        )
    };
    const Recomendados = ({
        time,
        type,
        title,
        amount,
        country,
        job,
        bgColor,
        color,
    }) => {
        return (
            <div className="w-full rounded-[10px] shadow" style={{ borderLeft: `6px solid ${color}` }}>
                <div className="bg-white w-full p-8 rounded-t-[10px]">
                    <span className="flex items-start justify-between">
                        <span className="flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg">
                            <button className="p-4 rounded-md border-none outline-none md:mb-0 mb-4">
                                <GrAnnounce size={30} style={{ color: `${color}` }} />
                            </button>
                            <p> <span className="font-bold">Carga</span>: {type}</p>
                            <p>  <span className="font-bold text-[#15A728] ">Disponível </span> {time}</p>
                        </span>
                        <HiOutlineHeart className="text-2xl" />
                    </span>
                    <div className="md:pl-24">
                        <p>Serviço:</p>
                        <p className="text-2xl font-semibold md:mt-0 mt-4">{title}</p>
                        <p className="text-xl pt-4">Kz {amount} </p>
                    </div>
                </div>
                <div className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]" style={{ backgroundColor: `${bgColor}` }}>
                    <div className="flex-1 md:flex items-center gap-x-8 text-2xl">
                        <span className="flex items-center gap-x-3">
                            <IoLocationOutline className="text-2xl" style={{ color: `${color}` }} />
                            <p className="text-xl font-light">{country}</p>
                        </span>
                        <span className="flex items-center gap-x-3 lg:py-0 py-4">
                            <LiaDotCircle className="text-2xl" style={{ color: `${color}` }} />
                            <p className="text-xl font-light">{job}</p>
                        </span>
                    </div>
                    <button className="rounded-full bg-white border border-solid border-[#e2e4e7] text-lg text-[#ffa600] font-bold px-8 py-3 outline-none shadow hoverBtn">
                        Aplique agora!
                    </button>
                </div>
            </div>
        );
    };
    return (
        <div>
            <Navbar />

            <div className="bg-[#f5f6fc]">
                <div className="container mx-auto px-6 py-24">
                    <div className="md:flex items-center justify-between">
                        <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Serviços Recomendados</h2>
                        <span className="md:flex gap-x-4">
                            <button className="rounded-full md:my-0 my-4 bg-[#ffa600] text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Recentes</button>
                            <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow">Mais requisitadas</button>
                        </span>
                    </div>
                    <p className="text-2xl mt-4 font-light">Pesquise outras sugestões</p>
                    <div className="xl:flex gap-x-8 mt-16">
                        <div className="xl:w2/5">
                            <div className="bg-[#ffa600] rounded-[10px] py-8 pl-6 mb-4 font-bold">
                                <h2 className="
                         lg:text-3xl text-2xl">Categoria de serviços</h2>
                            </div>
                            <div className="flex flex-col gap-y-1 ">
                                <Categories image='./carro.png' title="Car" />
                                <Categories image='./tijolo.png' opening="1" title="Construção" />
                                <Categories image='./programacao.png' opening="2" title="Tecnologia" />
                                <Categories image='./diplomado.png' opening="3" title="Escola" />
                                <Categories image='./restaurante.png' opening="3" title="Arte " />
                                <Categories image='./restaurante.png' opening="2" title="Assistência " />
                                <Categories image='./restaurante.png' opening="1" title="Serviços Domésticos " />
                                <Categories image='./restaurante.png' opening="5" title="Beleza e Bem-Estar " />
                                <Categories image='./restaurante.png' opening="4" title="Hotelaria " />
                            </div>
                        </div>
                        <div className="xl:w-3/5 flex flex-col gap-y-3 xl:mt-0">
                            <Recomendados amount='3000-4000' bgColor="#FEF7EF" color="#ffa600" country="Angola" job="Construcion" time="" title="Pedreiro" type="Semanal" />
                            <Recomendados amount='1000-3000' bgColor="#E4E4E4" color="#545454" country="Angola" job="Assistencia" time="2h" title="Mecanico" type="Diário" />
                            <Recomendados amount='2000-3000' bgColor="#FEF7EF" color="#ffa600" country="Angola" job="Tecnologia" time="" title="Desenvolvedor Back-end" type="24 Horas" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
