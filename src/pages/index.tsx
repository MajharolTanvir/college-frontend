import RootLayouts from "@/components/Layouts/RootLayouts";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  );
};