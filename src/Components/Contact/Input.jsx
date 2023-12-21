import React from 'react'

const Input = (props) => {
  const { label, name, type, change } = props;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={label}
        onChange={change}
      />
    </div>
  )
}

Input.defaultProps = {
  type: "text",
}


export default Input;
