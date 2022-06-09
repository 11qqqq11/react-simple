import React, { useState} from 'react'
import "../styles/MenuDetail.css";
import { thucDonTiec } from "../store/menuTiec";
import MenuButton from '../components/MenuButton';
import MenuImage from '../components/MenuImage';


const MenuDoan = () =>{

  const [selected2, setSelected2] = useState(thucDonTiec[0].image);

  const changePic = (newPic) => {
    setSelected2(newPic);
  }

 return(
     <div className="menu">
     <div className='ment'>
     {thucDonTiec.map((item, key) => {
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

         <MenuImage pic={selected2}/>
         
     </div>
 )
}

export default MenuDoan