import React, { useState} from 'react'
import "../styles/MenuDetail.css";
import { thucDonDoan } from "../store/menuDoan";
import MenuButton from '../components/MenuButton';
import MenuImage from '../components/MenuImage';

const MenuDoan = () =>{

  const [selected1, setSelected1] = useState(thucDonDoan[0].image);

  const changePic = (newPic) => {
    setSelected1(newPic);
  }

  return(
    <div className="menu">
    <div className='ment'>
    {thucDonDoan.map((item, key) => {
         return (

           <MenuButton 
             onClick={changePic} 
             name={item.name} 
             key={key}
             value={item.image}
           />
         );
       })}
    </div>

        <MenuImage pic={selected1}/>
        
    </div>
)
}

export default MenuDoan