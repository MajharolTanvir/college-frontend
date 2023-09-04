import { FaBookOpen } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { FaUniversity, FaUserGraduate, FaUserTie } from "react-icons/fa";


const MiniCard = () => {
  return (
    <div className="md:container md:mx-auto my-16 mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:mx-5 lg:mx-0">
        <div className="bg-[#262582] py-4 md:py-8 text-white shadow-sm rounded-md">
          <div className="flex justify-center items-center gap-3 ">
            <FaUniversity className="text-4xl md:text-6xl" />
            <div className="text-lg md:text-xl">
              <h3 className="font-bold">Founded</h3>
              <div>
                <p>17 July 2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#262582] py-4 md:py-8 text-white shadow-sm rounded-md">
          <div className="flex justify-center items-center gap-3 ">
            <FaUserTie className="text-4xl md:text-6xl" />
            <div className="text-xl">
              <h3 className="font-bold">Faculty</h3>
              <div className="flex items-center">
                <p>30</p>
                <BsPlusLg />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#262582] py-4 md:py-8 text-white shadow-sm rounded-md">
          <div className="flex justify-center items-center gap-3 ">
            <FaBookOpen className="text-4xl md:text-6xl" />
            <div className="text-xl">
              <h3 className="font-bold">Department</h3>
              <div className="flex items-center">
                <p>30</p>
                <BsPlusLg />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#262582] py-4 md:py-8 text-white shadow-sm rounded-md">
          <div className="flex justify-center items-center gap-3 ">
            <FaUserGraduate className="text-4xl md:text-6xl" />
            <div className="text-xl">
              <h3 className="font-bold">Students</h3>
              <div className="flex items-center">
                <p>1000</p>
                <BsPlusLg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
