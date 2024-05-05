
import React from "react";
import "./ExpolreMenu.css"
import { menu_list } from "../../assets/assets";
const ExpolreMenu=({category,setCategory})=>{
    return(
        <div className="expolre-menu" id="expolre-menu">
            <h1>Expolre our menu</h1>
            <p className="explore-menu-text">
                choose from a diverse menu featuring a delectable array of dishes .Our mission is to satisfy your cravings and elevate your dining experience one delicious at a time
            </p>

<div className="expolre-menu-list">
    {menu_list.map((item,index)=>{
        return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}   key={index} className="explore-menu-list-item">
           <img  className={category===item.menu_name?"active":""} src={item.menu_image}  />
           <p>{item.menu_name}</p>
            </div>
        )
    })}
</div>
<hr />

        </div>
    )
}

export default ExpolreMenu;