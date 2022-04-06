import React,{useState} from 'react'
import {FaFemale}from 'react-icons/fa'
import Files from"./Files"
import Document from"./Document"
 const Menucard=({menuData})=> {
    const[filesData,setfilesData]=useState(Files);
    console.log(menuData);
    return(
   <>
   {menuData.map((curElem)=>{
       return(
           <>
 
     <div className='main 2'>
         Patient &nbsp;
         <div className='main3'>
             suchi
             </div>
         
     </div> <div className='imp'> <div className='main17'><div className='main4'>
    <img src="company image/lady picture.jpg"height="100px" width="100px" />

<div className='main5'>Gender
<div className='main8'>{curElem.Gender}</div>
<div className='main11'>street address
<div className='main12'>{curElem.address}</div>

</div>
</div>

<div className='main6'>Birthday
<div className='main9'>{curElem.Birthday}</div>
<div className='main13'>ZIP
<div className='main14'>{curElem.ZIP}</div>

</div>
</div>
<div className='main7'>city
<div className='main10'>{curElem.city}</div>
<div className='main15'> Phone Number
<div className='main16'>{curElem.Phone}</div>

</div>
</div>
</div>
<div className='main18'>{curElem.name}&nbsp;

<div className='memb'>Member Status 
<div classname="mbj">{curElem.Member}</div>
</div>

</div>

<div className='box3'>appointments&nbsp;&nbsp;&nbsp;
<div classname='box4'>Upcoming appointments</div>
</div>
 <div className='box'>
<div className='main21'>Root canal treatment &nbsp;
<div className='main23'>previous treatment</div>
</div> 
<div className='main24'> 

<div className='main25'>26 nov19 &nbsp;
<div className='main26'>090 :10</div>

</div>

<div className='main27'>treatment
<div className='main28'> open access &nbsp;</div>
</div>
<div className='main29'>dentist
<div className='main30'>drg.ahmad &nbsp;</div>


</div>
<div className='main31'>name
<div className='main32'>jackline</div>
</div>
</div>
</div>

<div className='main22'>
<div className='main33'>
    28 nov19
<div className='main34'>09:10</div>
</div>
<div className='main27'>treatment
<div className='main28'> open access &nbsp;</div>
</div>
<div className='main29'>dentist
<div className='main30'>drg.ahmad &nbsp;</div>


</div>
<div className='main31'>name
<div className='main32'>jackline</div>
</div>

</div>



</div>
<div className='notes2'><div className='notes1'>
<div className='notes'>notes
<div className='seeall'>see all</div></div>
<div className='para'>ijk abc hjkl oops ghjk

</div>
<div className='para'>ijk abc hjkl oops deers </div>
<div className='para'>ijk abc hjkl oops deers
<div className='save'>save notes</div></div>
<div classname='paragra'>lop iop tyu yuk</div>
<div className='para3'><FaFemale/>yuj jkl oop free jkl 
<div className='para4'>20-20-2022</div></div></div>
<div className='documents'><Document filesData={filesData}/></div>
</div>
</div>
















        </>
       )
       
   }
   )}
   
        
        </>)
      

    };
    export default Menucard;
    
 
  
