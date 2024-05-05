
import React, { useState } from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import ExpolreMenu from "../../Component/ExpolreMenu/ExpolreMenu";
import FoodDisplay from "../../Component/foodDisplay/FoodDisplay";
import AppDownload from "../../Component/AppDownload/AppDownload";
const Home=()=>{
    const [category, setCategory]=useState("All");
    return(
        <div>
        <Header/>
        <ExpolreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        </div>
    )
}
export default Home;