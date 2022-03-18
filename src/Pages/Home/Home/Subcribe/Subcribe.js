import { Button } from 'bootstrap';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Subcribe.css'

const Subcribe = () => {
    return (
        <div className='subscribe'>
            <div>
                <h1>Subscribe to our Newsletter</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
            <div className="subscribeInput ">
                <div className="input-group">
                    <input className='form-control' type="email" placeholder="Enter Email Address" aria-label="Enter Email Address" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <input type='submit' className="input-group-text" id="basic-addon2" value='Subscribe' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Subcribe;