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
const Quote = () => {
    return (
        <div className=" w-full bg-gray-400 flex flex-row py-10 md:py-0 justify-center md:h-[100px] h-auto items-center">
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
    )
}

export default Quote;