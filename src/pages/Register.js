import React, { useState } from 'react'

function Register(){
const [email,SetEmail] = useState("")
const [fullName,SetFullName] = useState("")
const [password,SetPassword] = useState("")

function handleOnChangeEmail(e){
    SetEmail(e.target.value)
}

function handleOnChangePassword(e){
    SetPassword(e.target.value)
}
function handleOnChangefullName(e){
    SetFullName(e.target.value)
}
    const onSave = (e) => {

        e.preventDefault()
        
        const user  =  localStorage.getItem("users")
        
        if(!user) {
          localStorage.setItem("users" , JSON.stringify([{email : email , fullName : fullName , password : password}]))
        }
        
        let arr = JSON.parse(user)

        arr.find(item => item.email === email)?alert('this email is already taken') : arr.push({email: email, fullName : fullName, password : password})
                
        localStorage.setItem("users" , JSON.stringify(arr))
        
        alert("kaam hogaya")
        SetEmail("")
        SetPassword("")
        SetFullName("")

console.log(email)}
    return(
        <>
        <h1>this is register page</h1>
        
        Email <input type="text" value={email} onChange={handleOnChangeEmail}  />
        Password<input type="password" value={password} onChange={handleOnChangePassword}/>
        FullName<input type="text" value={fullName} onChange={handleOnChangefullName} />
        <button onClick={onSave}>Register</button>
        
        </>
    )
}


export default Register