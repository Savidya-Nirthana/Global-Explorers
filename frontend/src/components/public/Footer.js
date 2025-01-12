import {
  faEnvelope,
  faF,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="pt-20 mt-10 bg-blue-500">
      <div className="flex justify-around text-slate-50">
        <div>
          <div className="font-bold text-[22px] text-center">
            Global Explorers (PVT) Ltd
          </div>
          <div className="flex flex-col gap-2 m-auto mt-3">
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>No: 938/35, K.K.S. Road, Jaffna</div>
            </div>
            <div className="flex gap-3 ">
              <FontAwesomeIcon icon={faPhone} />
              <div>0712345678</div>
            </div>
            <div className="flex gap-3 ">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>global@explores.gmail.com</div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-[22px] text-center">Social Links</div>
          <div className="flex gap-5 my-3">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faTwitch} size="xl" />
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </div>
        </div>
        <div>
          <div className="font-bold text-[22px] text-center">
            Subscribe our news paper
          </div>
          <div className="flex flex-col w-[200px] gap-2 mt-2 m-auto">
            <input
              className="px-2 py-1 rounded-sm"
              text="text"
              placeholder="Enter your name"
            />
            <input
              className="px-2 py-1 rounded-sm"
              text="email"
              placeholder="Enter your email"
            />
            <button className="py-1 font-bold bg-green-500 rounded-md text-slate-50">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-10 mx-10 mt-5 font-bold text-slate-50">
        <div>@2025 Global Explorers</div>
        <div className="flex gap-5">
          <div>Home</div>
          <div>Refund</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
