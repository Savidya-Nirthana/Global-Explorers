import { Link } from "react-router-dom";
import about from "../../images/about/about.jpg";
const countries = [
  { name: "France", value: "france" },
  { name: "Spain", value: "spain" },
  { name: "United States", value: "usa" },
  { name: "China", value: "china" },
  { name: "Italy", value: "italy" },
  { name: "Turkey", value: "turkey" },
  { name: "Mexico", value: "mexico" },
  { name: "Thailand", value: "thailand" },
  { name: "Germany", value: "germany" },
  { name: "United Kingdom", value: "united-kingdom" },
  { name: "Japan", value: "japan" },
  { name: "Austria", value: "austria" },
  { name: "Greece", value: "greece" },
  { name: "Malaysia", value: "malaysia" },
  { name: "Russia", value: "russia" },
  { name: "Portugal", value: "portugal" },
  { name: "Netherlands", value: "netherlands" },
  { name: "Canada", value: "canada" },
  { name: "Poland", value: "poland" },
  { name: "Saudi Arabia", value: "saudi-arabia" },
];
const About = () => {
  return (
    <div>
      <div className="relative w-[100%]">
        <img src={about} alt="about" />
        <div className=" xl:w-[80%] md:w-[90%] w-[100%] left-0 right-0 m-auto bg-gray-500 bg-opacity-50  flex flex-row py-10 md:py-0 justify-center md:h-[100px] h-auto items-center absolute md:bottom-0 sm:bottom-[-90%] ">
          <table className=" flex flex-col  gap-[10px]  md:gap-[50px] lg:gap-[80px] items-start md:items-center md:flex-row justify-start ">
            <tr className="flex flex-col ">
              <td className="font-bold text-slate-50">Tour Country:</td>
              <td>
                <select
                  name="top-tourism-countries"
                  id="tourism-countries"
                  className=" py-2 px-1 w-[300px] md:w-[150px] lg:w-[220px]"
                >
                  {countries.map((elt, index) => (
                    <option key={index} value={elt.value}>
                      {elt.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr className="flex flex-col ">
              <td className="font-bold text-slate-50">Tour Duration:</td>
              <td>
                <select className=" py-2 px-1 lg:w-[220px] md:w-[150px] w-[300px]">
                  <option>Tour Duration</option>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>{`${i + 1} Days`}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr className="flex flex-col ">
              <td className="font-bold text-slate-50">Travelling Dates:</td>
              <td>
                <input
                  className=" py-2 px-1 md:w-[150px] lg:w-[220px] w-[300px]"
                  type="date"
                />
              </td>
            </tr>
            <button className="px-3 py-2 font-bold bg-green-500 rounded-sm text-slate-50">
              Get Quote
            </button>
          </table>
        </div>
        <div className="absolute md:text-[40px] text-[20px] font-bold left-0 right-0 m-auto text-center text-slate-50 md:top-[50%] top-[10%]">
          Global <span>Explorers...</span>
        </div>
      </div>

      <div className="md:my-10 my-[400px]  ">
        <div className=" ml-[10%]">
          <Link to={"/"}>{`Home > `}</Link>
          <Link to={"/about"} className="text-green-600">{`About`}</Link>
        </div>
        <div className=" text-[40px] ml-[10%] text-green-400 mb-3 mt-[-5px]">
          About
        </div>
      </div>

      <div className="flex flex-row gap-[5%]">
        <div className="w-[45%] mx-[2.5%] text-[20px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32
        </div>

        <div className=" w-[45%] mx-[2.5%] ">
          <div>
            <div className="text-[30px] font-bold">Our vission</div>
            <div className="mb-[2.5%] text-[20px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </div>
          </div>
          <div>
            <div className="text-[30px] font-bold">Our mission</div>
            <div className=" mb-[2.5%] text-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
