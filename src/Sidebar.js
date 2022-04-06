import React,{useState} from 'react'
import { SidebarData } from './SidebarData'
import {FaGithub}from'react-icons/fa';
import {FaBars}from 'react-icons/fa'
import './Navbar.css'

export default function Sidebar() {const[sidebar,setsidebar]=useState(true)
  const showSidebar=()=>
setsidebar(!sidebar) 
  return ( <>
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
  </>)
}
