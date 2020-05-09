import React from 'react';
import './Feedback.css';

const Feedback = (props) => {
 return  <div className = "inputcontainer">
            <label>Feedback: 
                <input 
                type = "text" name = "feedback"
                value = {props.value} 
                onChange = {props.change}/></label>
         </div>
}

export default Feedback;
