import React,{useState} from 'react'
import { SidebarData } from './SidebarData'
import {FaGithub}from'react-icons/fa';
import {FaBars}from 'react-icons/fa'
import './Navbar.css'
import Rightside from "./Rightside"
import {FaFemale}from 'react-icons/fa'
import Menu from"./Menuapi"


import Menucard from './Menucard';

function App() {
  const[menuData,setmenuData]=useState(Menu); 
  console.log(menuData);

  const[sidebar,setsidebar]=useState(true)
  const showSidebar=()=>
setsidebar(!sidebar)


  return (
    <><div className='side'>
    <div className="leftside"> <FaFemale/> 
    
    
    <nav className={sidebar?'nav-menu active':'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
    
    <div className='sidebar'><img src="company image/image1.png" height="50px" width="150px" /><div className='sidebar2'><FaBars onClick={showSidebar}/></div></div>
    {SidebarData.map((item,index)=>{
          return (
            <li key={index} className={item.cname}><div className='icons'>{item.icon}</div><span>{item.title}</span></li>
          );
        })}
      </ul>
    </nav>

</div>
<div className='rightside'><Menucard menuData={menuData}/></div>

</div></>)}

export default App;
