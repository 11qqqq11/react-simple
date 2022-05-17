import React, { useState} from 'react'
import "../styles/MenuDetail.css";
const raucu = require('../images/raucu.gif')
const goi = require('../images/goi.gif')
const khaivi = require('../images/khaivi.gif')
const kho = require('../images/kho.gif')
const hau = require('../images/hau.gif')
const dacsan = require('../images/dacsan.gif')
const muc = require('../images/muc.gif')
const mu = require('../images/mu.gif')
const bop = require('../images/bop.gif')
const heo = require('../images/heo.gif')
const bo = require('../images/bo.gif')
const ga = require('../images/ga.gif')
const tsd = require('../images/tsd.gif')
const com = require('../images/com.gif')
const lau = require('../images/lau.gif')
const hsth = require('../images/hsth.gif')
const doi = require('../images/doi.gif')
const douong = require('../images/douong.gif')
const thucdon = { raucu, goi, khaivi, kho, hau, dacsan, muc, mu, bop, heo, bo, ga, tsd, com, lau, hsth, doi, douong }


const MenuDetail = () =>{

  const [selected, setSelected] = useState(thucdon.khaivi);

 return(
     <div className="menu">
     <div className='ment'>
       <button className="button-5" onClick={() => setSelected(thucdon.khaivi)}>Khai Vị</button>
       <button className="button-5" onClick={() => setSelected(thucdon.goi)}>Món Gỏi</button>
       <button className="button-5" onClick={() => setSelected(thucdon.raucu)}>Rau Củ</button>
       <button className="button-5" onClick={() => setSelected(thucdon.kho)}>Món Khô</button>
       <button className="button-5" onClick={() => setSelected(thucdon.hau)}>Hàu-Sò Huyết-Ốc</button>
       <button className="button-5" onClick={() => setSelected(thucdon.dacsan)}>Món Đặc Sản</button>
       <button className="button-5" onClick={() => setSelected(thucdon.muc)}>Mực-Tôm-Cua</button>
       <button className="button-5" onClick={() => setSelected(thucdon.mu)}>Cá Mú-lăng-Chình Sông</button>
       <button className="button-5" onClick={() => setSelected(thucdon.bop)}>Cá Bóp-Bông Lau-Kèo</button>
       <button className="button-5" onClick={() => setSelected(thucdon.heo)}>Heo - Dê</button>
       <button className="button-5" onClick={() => setSelected(thucdon.bo)}>Món Bò</button>
       <button className="button-5" onClick={() => setSelected(thucdon.ga)}>Gà - Vịt</button>
       <button className="button-5" onClick={() => setSelected(thucdon.tsd)}>Thủy Sản Đồng</button>
       <button className="button-5" onClick={() => setSelected(thucdon.com)}>Cơm - Mì</button>
       <button className="button-5" onClick={() => setSelected(thucdon.lau)}>Món Lẩu</button>
       <button className="button-5" onClick={() => setSelected(thucdon.hsth)}>Hải Sản Tại Hồ</button>
       <button className="button-5" onClick={() => setSelected(thucdon.doi)}>Món Dồi</button>
       <button className="button-5" onClick={() => setSelected(thucdon.douong)}>Đồ Uống</button>
     </div>

         <img className='md' src={selected} alt='shirt' />
         
     </div>
 )
}

export default MenuDetail