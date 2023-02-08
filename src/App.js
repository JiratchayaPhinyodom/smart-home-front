import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

useEffect(() => {
    try {
        const url = "http://group5.exceed19.online/front/get_status"
        fetch(url).then((res_data) => {
            if (res_data.status == 400) {
                console.log("undefind")
            }
            else {
                res_data.json().then((res_all_data) => {
                    console.log("result", res_all_data)
                    console.log("66")
                }
              )
            }
        })
    }
    catch (error) {
        console.log("error")
    }
},[])

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "bulb_id": 1,
  "is_auto_or_manual": 1,
  "is_it_open": 0
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://group5.exceed19.online/front/request", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



  return (
    <div>
      <div className="kitchen">
        Kitchen
        {/* <button className='btn'>กด</button> */}
        <div className="form-check form-switch rmk">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manualk" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
          <form className="Submit">
            <input type="submit" value="Submit" />
          </form>
      </div>
       
      <div className="room">
       <div className="kitchen">
          Bedroom
          {/* <button className='btn'>กด</button> */}
          <div className="form-check form-switch rmb">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manualb" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
        </div>
        <div className="kitchen">
        Lounge
        <div className="form-check form-switch rml">
            <div>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <br></br>
              <h5 className="form-check-label manuall" htmlFor="flexSwitchCheckDefault" >Auto</h5>

            </div>

            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
            {/* <br></br> */}
            {/* <h5 className="form-check-label tx" htmlFor="flexSwitchCheckDefault" >Auto</h5> */}
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
