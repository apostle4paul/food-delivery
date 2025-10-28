import React, { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import AppDownload from "../../components/AppDownload/AppDownload"


const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      {/* passing the state as a props */}
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
