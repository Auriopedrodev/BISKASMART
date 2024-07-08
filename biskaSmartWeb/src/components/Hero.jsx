import { HiSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="bg-[#fafbfc] pt-24">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] py-16 px-6">
        
        {/* Texto e Botões */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className=" xl:text-2xl lg:text-5xl dm:text-3xl text-2xl xl:leading-normal lg:leading-normal text-center lg:text-left">
            Encontre a sua <span className="text-[#ffa600] whitespace-pre font-bold">oportunidade</span> em um<br/> clique!
          </h1>
          <p className="text-center lg:text-left leading-15 my-2">
          "Descubra oportunidades e soluções inovadoras em nosso site. Junte-se à nossa comunidade online de sucesso hoje mesmo!"
          </p>
          
          <div className="flex items-center border-2 border-solid border-black rounded-full h-10 lg:w-2/3 relative mt-4">
            <input 
              type="text" 
              placeholder="procure a sua vaga...." 
              className="bg-transparent h-full border-none outline-none absolute px-8 text-base w-full pr-10" 
            />
            <button className=" rounded-full text-black absolute right-1 border-none p-2">
              <HiSearch className="text-2xl"/>
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center lg:w-1/2 mt-8 lg:mt-0  " >
          <img 
            src="./public/woman.jpg" 
            alt="Oportunidade"
            className=" max-w-full h-auto rounded-lg" style={{ width: '90%', maxWidth: '700px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}
