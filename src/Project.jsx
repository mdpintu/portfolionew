import React from 'react';
import Cards from './Card';
import Sdata from './Sdata';
const Project = () => {
    const ndata = (val) =>
    <Cards
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    text={val.text}
    link={val.link}
     />
    return(
       
        <>
<div className='container'>
    <div className="row mt-3">
        {Sdata.map(ndata)}
    </div>
</div>

        </>
    )
}
export default Project