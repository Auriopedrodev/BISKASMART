import Footer from "./Footer";
import Navbar from "./Navbar";
import Profissionais from "./Profissionais";
import Logo from "/BiskaSmart.png"
export default function AboutUs() {

  return (
    <main className="w-full">
      <Navbar/>
      <h1 className="w-full text-center font-semibold text-3xl">Sobre Nós</h1>.
    <section className="max-w-full grid grid-cols-2 items-center justify-center mx-10 max-sm:grid-cols-1">
      <article className="w-full">
          <img src={Logo} alt="Logo BiskaSmart" width={600} className="max-sm:w-[500px]"/>
      </article>
      <article className="W-full">
          <p className="w-full text-justify leading-relaxed">  
            Bem-vindo a  <span className=" font-bold"> Startup BiskaSmart</span>, a plataforma em prestação de serviços e contratação de profissionais em Angola. Fundada com o objetivo de conectar clientes a prestadores de serviços qualificados, a Biska Smart torna o processo de encontrar e contratar especialistas mais eficiente e confiável. Nossa missão é facilitar a busca por serviços de alta qualidade, abrangendo desde pequenas reformas até grandes projetos de construção, passando por tecnologia, educação e gastronomia.
            Com uma interface intuitiva e amigável, a BiskaSmart permite que os usuários encontrem rapidamente os profissionais ideais para suas necessidades, enquanto os prestadores de serviços têm a oportunidade de expandir seu alcance e aumentar sua base de clientes. <span className="font-semibold">Valorizamos a transparência, a confiança e a excelência</span> em cada interação, garantindo que cada projeto seja realizado com a máxima satisfação.
            Junte-se a nós na Biska Smart e descubra como podemos transformar suas ideias em realidade, oferecendo soluções personalizadas e profissionais de confiança. Aqui, seu próximo grande projeto começa com um simples clique.
          </p>
      </article>
    </section>
{/*Section dos Profissionais quero tres fotos em circulo com nome e o linkedin em baixo  */}
    <section>
    <Profissionais/>
    </section>
      <Footer/>
    </main>
  )
}
