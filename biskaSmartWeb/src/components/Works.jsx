
import { HiGlobe, HiPencilSquare } from "react-icons/hi";
import { BiChart } from "react-icons/bi";
import { PiPaintBrushThin } from "react-icons/pi";
import { GiHamburger } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { MdImportContacts } from "react-icons/md";

export default function Works() {
  const Offers = ({ icon1, title, position, location, type, company, icon2, bg1, color, bg2 }) => {
    return (
      <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col justify-center gap-12 shadow transition-shadow hover:bg-light">
        <div className="flex items-center gap-x-4">
          <button
            className="p-2 rounded-full border-none outline-none text-4xl"
            style={{ backgroundColor: bg1, color: color }}
          >
            {icon1}
          </button>
          <span>
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg">20 Disponíveis</p>
          </span>
        </div>
        <div>
          <p className="font-semibold">{position}</p>
          <span className="flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4">
            <p className="flex items-center gap-x-2">
              <HiGlobe className="text-2xl" />
              {location}
            </p>
            <p className="text-[#93979d]">{type}</p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-[#93997d] text-lg">June 8, 2002</p>
            <p className="text-xl font-medium">{company}</p>
          </span>
          <button className="rounded-[10px] p-2 text-white border-none outline-none" style={{ backgroundColor: bg2 }}>
            {icon2}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div>
          <h2>Oportunidades Plus</h2>
          <button>Todas Oportunidades Serviço</button>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div>
          <Offers
            bg1="#f4fefe"
            bg2="#000000"
            color="#ffffff"
            company="Google"
            icon1={<BiChart size={40} />}
            icon2={<HiPencilSquare size={40} />}
            location="Angola, Luanda"
            position="Financial Analyst"
            title="Finance"
            type="Full Time"
          />
          <Offers
            bg1="#f4fefe"
            bg2="#000000"
            color="#ffffff"
            company="Google"
            icon1={<GiHamburger size={40} />}
            icon2={<PiPaintBrushThin size={40} />}
            location="Angola, Luanda"
            position="Financial Analyst"
            title="Finance"
            type="Full Time"
          />
          <Offers
            bg1="#f4fefe"
            bg2="#000000"
            color="#ffffff"
            company="Google"
            icon1={<GrAnnounce size={40} />}
            icon2={<MdImportContacts size={40} />}
            location="Angola, Luanda"
            position="Financial Analyst"
            title="Finance"
            type="Full Time"
          />
        </div>
      </div>
    </div>
  );
}
