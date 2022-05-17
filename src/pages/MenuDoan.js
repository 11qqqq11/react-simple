import React, { useState} from 'react'
import "../styles/MenuDetail.css";
const doan1 = require('../images/doan1.jpg')
const doan2 = require('../images/doan2.jpg')
const doan3 = require('../images/doan3.jpg')
const doan4 = require('../images/doan4.jpg')
const doan5 = require('../images/doan5.jpg')

const thucdondoan = { doan1, doan2, doan3, doan4, doan5 }


const MenuDoan = () =>{

  const [selected1, setSelected1] = useState(thucdondoan.doan1);

 return(
     <div className="menu">
     <div className='ment'>
       <button className="button-5 c" onClick={() => setSelected1(thucdondoan.doan1)}>1</button>
       <button className="button-5 c" onClick={() => setSelected1(thucdondoan.doan2)}>2</button>
       <button className="button-5 c" onClick={() => setSelected1(thucdondoan.doan3)}>3</button>
       <button className="button-5 c" onClick={() => setSelected1(thucdondoan.doan4)}>4</button>
       <button className="button-5 c" onClick={() => setSelected1(thucdondoan.doan5)}>5</button>
     </div>

         <img className='md' src={selected1} alt='shirt' />
         
     </div>
 )
}

export default MenuDoan