import { FaLinkedin,FaGithub } from "react-icons/fa";

const profissionais = [
  {
    nome: 'Anderson Danilo',
    foto: '/anderson.jpeg',
    linkedin: 'https://www.linkedin.com/in/anderson-danilo-386761286/',
  },
  {
    nome: 'Aurio Pedro',
    foto: '/ap.jpeg',
    linkedin: 'https://www.linkedin.com/in/aurio-pedro-ap/',
  },
  {
    nome: 'Rafael Pires',
    foto: '/RafaelPires.jpg',
    linkedin: 'https://www.linkedin.com/in/rafael-pires-72365018b/',
  },
];

const Profissionais = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Nossos Profissionais</h2>
      <div className="flex justify-around items-center">
        {profissionais.map((profissional, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="h-56 w-56 bg-black font-semibold rounded-full overflow-hidden mb-4 max-md:h-36 max-md:w-36 ">
              <img src={profissional.foto} alt={profissional.nome} className="h-full w-full object-cover object-center" />
            </div>
            <p className="text-2xl text-black font max-md:text-xl">{profissional.nome}</p>
            <div className="flex mx-5">
            <a href={profissional.linkedin} target="_blank" rel="noopener noreferrer" className=" w-full px-5 text-2xl hover:text-[#ffa600] mt-2">
              <FaLinkedin/>
            </a>
            <a href={profissional.linkedin} target="_blank" rel="noopener noreferrer" className="w-full px-5 text-2xl hover:text-[#ffa600] mt-2">
              <FaGithub/>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profissionais;
