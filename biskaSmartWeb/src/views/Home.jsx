import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Recomendacao from "../components/Recomendacao";
import Footer from "../components/Footer";
import Empresas from "../components/Empresas";


export default function Home() {
  return (
    <div>
      
        <Navbar/>
        <Hero />
        <Empresas/>
  
        <Footer/>
       
    </div>
  )
}
