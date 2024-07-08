import { HiOutlineHeart, HiSave, HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

const responsive = {
    superLargeDesktop:{
        breakpoint: { max: 4000, min: 3000},
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min:1024},
        items: 3,
    },
    tablet: {
        breakpoint: { max:1024, min: 464},
        items: 2,
    },
    module: {
        breakpoint: {max: 464, min:0},
        items: 1,
        },
    };

export default function Empresas() {
    const Jobs=({ type, img, title, color, bg_color}) => {
        return (
            <div className="Shadow lg:w-[95%] mt-12">
                <div className="bg-white rounded-t-md px-6 py-8 flex flex-col items-center">
                    <span className="flex items-center justify-between w-full">
                        <button className="rounded full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn" style={{border: `3px solid ${color}`}}>{type}</button>
                        <HiOutlineHeart className="text-3xl"/>
                    </span>
                    <img src={img} alt="" className="w-28 h-28 rounded-full my-8" />
                </div>
                <div className="rounded-b-md px-6 py-8" style={{backgroundColor: `${bg_color}`}}>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p>Temos o prazer de anunciar a abertura de um concurso público para prestação de serviços a empresas. Estamos em busca de profissionais qualificados e dedicados para oferecer soluções excepcionais em diversas áreas.</p>
                    <p className="py-2 text-lg">Benguela, Angola</p>
                    <div className="pb-4">{[...Array(2)].map((_, index) => {
                        return (
                            <HiStar key={index} className="text-[#FFCC02] text-2xl"/>
                        )
                    })}</div>
                    <div className="p-2 border border-solid border-[#e2e4e7] rounded-md flex justify-between text-sm">
                        <p>Salário</p>
                        <p style={{color: `${color}`}}>Kz 100.000.000,00</p>
                    </div>
                </div>
            </div>
        );
    };
  return (
    <div className="bg-[#fafbfc]">
        <div className="container mx-auto px-6 py-24">
            <div className="md:flex items-center justify-between">
                <h2 className="xl:text-5xl lg:text-2xl text-2xl font-semibold">CONTRATAÇÃO DE SERVIÇOS</h2>
                <span className="md:flex gap-x-4">
                    <button className="rounded-full md:my-0 my-4 bg-[#ffa600] text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Concurso Público</button>
                    
                </span>
            </div>
            <p className="text-2xl mt-4 font-light"> "Junte-se a nós em nosso concurso público para prestação de serviços a empresas! Estamos em busca dos melhores talentos para oferecer soluções excepcionais. Se você é profissional qualificado e busca oportunidades desafiadoras, venha participar e faça parte do nosso time de excelência. Inscreva-se agora e mostre suas habilidades para se destacar neste mercado competitivo. Não perca essa chance de fazer parte de algo grande!" </p>
            <div>
                <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite 
                showDots
                autoPlay={true}
                arrows={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                >
                <Jobs bg_color="#EDEDED" color="#D6D6D4" img="./BAI.png" title="Banco BAI" type="Aplica aqui"/>
                <Jobs bg_color="#FFF6E5" color="#ffa600" img="./isptec.png" title="Consultória" type="Aplica aqui"/>
                <Jobs bg_color="#EDEDED" color="#D6D6D4" img="./ICONE.png" title="Getsão e Limpeza" type="Aplica aqui"/>
                <Jobs bg_color="#FFF6E5" color="#ffa600" img="./SHOES.png" title="Marketing" type="Aplica aqui"/>
                <Jobs bg_color="#EDEDED" color="#D6D6D4" img="./ncrangola.png" title="Desenvolvimento e suporte tecnico" type="Aplica aqui"/>
                </Carousel>
            </div>
        </div>
    </div>
  );
};
