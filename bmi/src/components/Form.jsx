import React, { useState } from 'react'
 

const Form = () => {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');
    
    const ResetForm=()=>{
        setHeightValue('');
        setWeightValue('');
        setBmiMessage('');
        setBmiValue('');
    }
  
    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);
  
            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };
    
  return (<>
      <div class="Bmi-box">
    <h2>Bmi Calculator</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required="yes" value={heightValue} onChange={(e)=>setHeightValue(e.target.value)}/>
        <label>Height(inch)</label>
      </div>
      <div class="user-box">
        <input type="text" name="" required="yes" value={weightValue} onChange={(e)=>setWeightValue(e.target.value)}/>
        <label>Weight(lbs)</label>
      </div>
      <a href="#" onClick={calculateBmi}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
      <span></span>
      <a href="#" onClick={ResetForm}>Reset</a>
      <h2>Your BMI : {bmiValue}</h2>
      <h2>MESSAGE : {bmiMessage}</h2>
    </form>
    <div><footer>Made By Harsh</footer></div>
    
  </div>
 
  </>
  )
}

export default Form;