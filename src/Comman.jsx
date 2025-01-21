import React from 'react'
import parse from 'html-react-parser';
const Comman = (props) => {
return(
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row align-items-center">
            <div className="col-6">
                <div className='content_wrap'>
                <h1>{parse(props.title)}</h1>
                <p className='sub-title'>{parse(props.subTitle)}</p>
                <h5>{props.softSkil}</h5>
                 <a href={props.href} className='custom_color' download>  <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> {props.link}</a>
                </div>
                
            </div>
            <div className="col-6">
                <div className='animated'>
                <img src={props.imgsrc} alt="My SVG Image" className='img-fluid' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)
}
export default Comman


