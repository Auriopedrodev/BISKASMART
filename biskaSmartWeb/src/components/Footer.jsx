
import { FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col justify-center items-center mt-8 bg-[#ffa600] p-4">
        <ul className='w-full flex justify-center items-center text-3xl text-[#fff] '>
          <li>
           <FaFacebook className="hover:scale-[1.2] hover:text-[#ffaf]"/>
          </li>
          <li>
            <FaInstagram  className="hover:scale-[1.2] hover:text-[#ffaf]"/>
          </li>
          <li>
            <FaLinkedin className='hover:scale-[1.2] hover:text-[#ffaf]'/>
          </li>

        </ul>
        <p className='text-xl capitalize'>BiskaSmart copyright 2024</p>
      </footer>

    </>
  );
}
export default Footer;