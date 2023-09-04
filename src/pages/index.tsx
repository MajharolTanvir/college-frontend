import RootLayouts from "@/components/Layouts/RootLayouts";
import MiniCard from "@/components/UI/MiniCard/MiniCard";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import Banner from "@/components/UI/banner/Banner";
import MujibSection from "@/components/UI/mujibSection/MujibSection";
import Contact from "@/components/UI/contact/Contact";
import Events from "@/components/UI/events/Events";
import Introduction from "@/components/UI/introduction/Introduction";
import MessageCard from "@/components/UI/messageCard/MessageCard";
import Notice from "@/components/UI/notice/Notice";
import { ReactElement } from "react";
import CollageContact from "@/components/UI/CollageContact/collageContact";
import CollegeName from "@/components/UI/collegeName/collegeName";


const Home = () => {
  
  
  return (
    <div>
      <Banner />
      <ScrollingText />
      <MiniCard />

      <Introduction />
      <MessageCard />

      <Notice />

      <MujibSection />


      <Events />

      <Contact />

    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <CollageContact />
      <CollegeName />
      <RootLayouts>{page}</RootLayouts>
    </>
  );
  
};
