import React, { useEffect } from "react";
import Banner from "../../Banner/Banner";
import Gallery from "../../Gallery/Gallery";
import CategoryTab from "../../CategoryTab/CategoryTab";
import DealOfDay from "../../DealOfDay/DealOfDay";
import Services from "../../Services/Services";

const Home = () => {
  useEffect(() => {
    document.title = "Kiddo | Home";
  }, [])
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <DealOfDay></DealOfDay>
      <Services></Services>

    </div>
  );
};

export default Home;
