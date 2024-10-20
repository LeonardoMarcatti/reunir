import React, {memo} from "react";
import Form from 'react-bootstrap/Form';

const Input = memo(function Input({label, data, type}){
   return <div className="mb-3">
      <Form.Label htmlFor={data} className="form-label">{label}</Form.Label>
      <Form.Control type={type} id={data} name={data} required className="from-control"/>
   </div>
})

export default Input