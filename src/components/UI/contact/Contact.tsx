import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="mb-20">
      <div className="container mx-auto">
        <div className="flex item-center justify-center mb-10">
          <h3 className="text-3xl font-bold text-[#262582] text-center border-b-2 border-green-600 w-[220px]">
            যোগাযোগ করুন
          </h3>
        </div>
        <div className="md:flex justify-center items-center">
          <div className="mx-4 md:mx-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d600.5457736321912!2d92.1782626!3d22.6393009!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1693771506074!5m2!1sen!2sbd"
              className="w-full h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] xl:w-[700px] lg:h-[400px]"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col gap-5 md:-ml-16 m-5 md:m-0">
            <div className="flex items-center gap-5 p-5 lg:pl-12 glass rounded-md">
              <BsFillBuildingsFill className="text-7xl md:text-4xl md:mr-6" />
              <div>
                <h5 className="text-xl font-bold">অফিসের ঠিকানা</h5>
                <p>নারিকেল বাগান, আসামবস্তি রাস্তা, তবলছড়ি বাজার, রাঙ্গামাটি</p>
              </div>
            </div>

            <div className="flex  items-center gap-5 p-5  lg:pl-12 glass rounded-md">
              <MdEmail className="text-5xl md:text-4xl md:mr-6" />
              <div>
                <h5 className="text-xl font-bold">ইমেইল এড্রেস</h5>
                <p>publiccollege@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 lg:pl-12 glass rounded-md">
              <MdPhoneInTalk className="text-5xl md:text-4xl md:mr-6" />
              <div>
                <h5 className="text-xl font-bold">ফোন নাম্বার</h5>
                <p>০১৮৪+++++++</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
