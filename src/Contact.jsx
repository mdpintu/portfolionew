import React, { useState } from 'react';
const Contact = () => {
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (event) => {
    const {name , value} = event.target;

    setData((preVal) =>{
      return{
        ... preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My phone number is ${data.phone}. My Emaile Id is ${data.email}. My Password is ${data.password}. My message is ${data.msg}. Thank you`)
  };
  return (
    <>
        <div className='container'>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
            <div className="contact_wrap">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">Full Name</label>
                  <input 
                  type="text"
                   placeholder="Name"
                    name="fullname" 
                    value={data.fullname}
                     onChange={InputEvent}
                      className="form-control"
                       id="exampleInputName"
                        aria-describedby="nameHelp"
                         />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPhone" className="form-label">Phome</label>
                  <input 
                  type="number"
                   placeholder="Mobile Number"
                    name="phone"
                     value={data.phone}
                      onChange={InputEvent}
                       className="form-control"
                        id="exampleInputPhone"
                         aria-describedby="phoneHelp"
                          />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input 
                  type="email"
                   placeholder="Email Id"
                    name="email" 
                    value={data.email} 
                    onChange={InputEvent} 
                    className="form-control"
                     id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                       />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input 
                  type="password"
                   placeholder="Password" 
                   name="password" 
                   value={data.password} 
                   onChange={InputEvent} 
                   className="form-control"
                    id="exampleInputPassword1"
                     />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea 
                  placeholder="Message"
                  name="msg" 
                  value={data.msg}
                  onChange={InputEvent}
                   className="form-control" 
                   id="exampleFormControlTextarea1"
                    rows="5"> 
                    </textarea>
                </div>
                <div className="mb-3 form-check">
                  <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="exampleCheck1" 
                  />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button 
                type="submit" 
                className="btn btn-primary">
                  Submit
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
