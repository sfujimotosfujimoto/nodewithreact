// SurveyField
import React from 'react';
// {input} same as props.input
export default ({ input, label }) => {
  // console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input {...input}/>
    </div>
  )
}

