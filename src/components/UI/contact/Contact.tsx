import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-green-100">
          <div className="container mx-auto py-10">
              <h3 className="text-3xl font-bold text-center my-10">Contact with Us</h3>
        <div className="flex justify-center items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d600.5457736321912!2d92.1782626!3d22.6393009!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1693771506074!5m2!1sen!2sbd"
              width="700"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col gap-5 z-20 -m-24">
            <div className="flex items-center gap-5 p-5 pl-12 bg-white rounded-md">
              <BsFillBuildingsFill className="text-4xl mr-6" />
              <div>
                <h5 className="text-xl font-bold">Office address</h5>
                <p>
                  Narikel bagan, Asambosti road, Tabalchari bazar, Rangamati
                </p>
              </div>
            </div>

            <div className="flex  items-center gap-5 p-5  pl-12 bg-white rounded-md">
              <MdEmail className="text-4xl  mr-6" />
              <div>
                <h5 className="text-xl font-bold">Email</h5>
                <p>rangamatipubliccollege@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 pl-12 bg-white rounded-md">
              <MdPhoneInTalk className="text-4xl  mr-6" />
              <div>
                <h5 className="text-xl font-bold">Number</h5>
                <p>017++++++</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
