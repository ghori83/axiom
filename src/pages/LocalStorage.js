import React from 'react'
import {useState} from "react"
 
const LocalStorage = () => {
const [userName, setUserName] = useState ("");
 
function handleOnChange(e){
    setUserName(e.target.value)
    console.log(userName)
}

  return (
    <form
     onSubmit = {(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={userName}
        // onChange={(e) => setName(e.target.value)}
        onChange={handleOnChange}
        placeholder="Username"
      />
       
      <label>
        <input
          type="checkbox"
        //   checked={checked}
        />
        Remember me
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};


export default LocalStorage