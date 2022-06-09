import React from 'react'
import "../styles/MenuDetail.css";





const MenuDoan = (props) =>{

  const handleClick = (e) => {
    const pic = e.target.value;
    props.onClick(pic);
    console.log(pic);
  }

 return(

       <button className={"button-5 c" + (props.check=== props.value ? " t" : "")} onClick={handleClick} value={props.value}>{props.name}</button>
       

 )
}

export default MenuDoan