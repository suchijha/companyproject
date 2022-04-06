import React from 'react'
const Document=({filesData})=>{
    return(<>{filesData.map((curElem)=>{
        return(<>
       <div className='doc'> <div className='document1'><div className='addfiles'>
            Files/Documents <div className='add'>Add files</div></div>

        <div className='document2'>{curElem.file1}</div>
 <div className='document3'>{curElem.file2}</div> 
 <div className='document4'>{curElem.file3}</div></div>    
        </div>
        
        
        
        
        
        </>)})}</>)
}
export default Document;
