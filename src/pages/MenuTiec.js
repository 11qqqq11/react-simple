import React, { useState} from 'react'
import "../styles/MenuDetail.css";
const tiec1 = require('../images/tiec1.jpg')
const tiec2 = require('../images/tiec2.jpg')

const thucdontiec = { tiec1, tiec2 }


const MenuDoan = () =>{

  const [selected2, setSelected2] = useState(thucdontiec.tiec1);

 return(
     <div className="menu">
     <div className='ment'>
       <button className="button-5 c" onClick={() => setSelected2(thucdontiec.tiec1)}>1</button>
       <button className="button-5 c" onClick={() => setSelected2(thucdontiec.tiec2)}>2</button>
     </div>

         <img className='md' src={selected2} alt='shirt' />
         
     </div>
 )
}

export default MenuDoan