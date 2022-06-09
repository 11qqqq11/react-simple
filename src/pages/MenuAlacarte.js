import React, { useState,useEffect } from 'react'
import "../styles/MenuDetail.css";
import { thucDon } from "../store/menuAlacarte";
import MenuButton from '../components/MenuButton';
import MenuImage from '../components/MenuImage';
import { useLocation } from "react-router-dom";

const MenuAlacarte = () =>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const location = useLocation();
  let  { from=thucDon[0].image }= location.state || {};
  console.log(from);
  const [selected, setSelected] = useState(from);

  const changePic = (newPic) => {
    setSelected(newPic);
  }

  return(
    <div className="menu">
    <div className='ment'>
    {thucDon.map((item, key) => {
         return (

           <MenuButton 
             onClick={changePic} 
             name={item.name} 
             key={key}
             value={item.image}
             check={selected}
           />
         );
       })}
    </div>

        <MenuImage pic={selected}/>
        
    </div>
)
}

export default MenuAlacarte