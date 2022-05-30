import { useState } from "react";
import "./App.css"
const App = () => {
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })

  // state to manage manage the submit 
  const [submit, setSubmit] = useState(false)
  const [valid, setValid] = useState(false)

  // handleChange function definiton
  const handleFirstNameChange = (e) => {
    setInputValue({...inputValue, first_name: e.target.value})
    // setSubmit(false)
  }
  const handleLastNameChange = (e) => {
    setInputValue({...inputValue, last_name: e.target.value})
    // setSubmit(false)
  }
  const handleEmailChange = (e) => {
    setInputValue({...inputValue, email: e.target.value})
    // setSubmit(false)
  }

    let newValid = valid;


  // handleSUbmit function definiton
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.first_name && inputValue.last_name && inputValue.email){
      setValid(true)
      newValid = true
    }
    setSubmit(true)
    //  console.log(submit, valid, newValid);
       if(newValid){
      setInputValue({
        first_name: "",
        last_name: "",
        email: ""
      })
       newValid = false
    }
  }

  return (
    <div className="appContainer">
        
        <form className="formContainer" onSubmit={handleSubmit}>
          {
            submit && valid ? <div className="success">Your registration was sucessful!!</div> : null
          }
          {/* first Name */}
          <input onChange={handleFirstNameChange} value={inputValue.first_name} className="inputField" type="text" placeholder="First Name" />
          {submit && !newValid && !inputValue.first_name ? <span>This field cannot be left empty</span> : null }
          {/*  last name */}
          <input onChange={handleLastNameChange} type="text" value={inputValue.last_name}className="inputField" placeholder="Last Name" />
          {submit &&!newValid && !inputValue.last_name ? <span>This field cannot be left empty</span> : null }
          {/* email */}
          <input onChange={handleEmailChange} type="text" value={inputValue.email}className="inputField" placeholder="Email" />
          {submit && !newValid && !inputValue.email ? <span>This field cannot be left empty</span> : null }
          <button className="btn" type="submit">Register</button>
        </form>
    </div>
  )
}

export default App;
