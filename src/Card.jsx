import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards(props) {
    return (
        <>
            <div className='col-lg-4 mt-4'>
                <div className="cards">
                    <div className="card">
                        <div className="card_pic">
                            <img src={props.imgsrc} alt="" className='img-fluid' />
                        </div>
                        <div className="card_info">
                            <div className="card_title">
                                <h3>{props.title}</h3>
                            </div>
                            <div className="card_text">
                                <p> {props.text} </p>
                            </div>
                            <div className="new_btn">
                                <button className='btn btn-info'><a href={props.link}>Read More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Cards;