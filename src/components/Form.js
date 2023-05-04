import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = {
      firstName: firstName,//controlled
      lastName: lastName,//controlled
      //firstName: e.target[0].value // uncontrolled form example
      //lastName: e.target[1].value // uncontrolled form example

    }
    props.sendFormDataSomewhere(formData);
      setFirstName(""); //uncontrolled form wouldn't include these two
      setLastName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
