import React, { useState } from 'react'


function Login(){

    const [emaillogin,SetEmailLogin] = useState("")
    const [passwordlogin,SetPasswordLogin] = useState("")    
    // const [login, SetLogin] = useState([])


    function handleOnEmailLogin(e){
        SetEmailLogin(e.target.value)
    }
    function handleOnPasswordLogin(e){
        SetPasswordLogin(e.target.value)
    }
    // users:"[{"email":"","fullName":"ghori","password":"shaahzad"},{"email":"shazilhassan@gmail.com","fullName":"tariq ghori","password":"sanatariq"},{"email":"tariqghori73@gmail.com","fullName":"sana tariq","password":"ghorihome"}]"

    const handleOnLogin = (e) => {

        e.preventDefault()
        
        const user  =  localStorage.getItem("users")
        
        // if(!user) {
        //   localStorage.setItem("users" , JSON.stringify([{email : email , fullName : fullName , password : password}]))
        // }
        let arr= JSON.parse(user)
        // arr.push({email : email , fullName : fullName , password : password})
       localStorage.setItem('isLogged', 'true')
        {arr.map((item) => {
            
            if(emaillogin===item.email && passwordlogin===item.password){localStorage.setItem('isLogged','false')
            alert('welcome ' + item.fullName)
        }
           
    return(
    <div className="mp" key={item.email}>

    </div>
    )
    }
    
    
    )}  
 if(localStorage.getItem('isLogged')==='true')alert('wrong email or password')


        localStorage.setItem("users" , JSON.stringify(arr))
        
        alert("kaam hogaya")

    }

function handleOnLogoff(){
    localStorage.setItem('isLogged','true')   

    alert('good bye' )
    
}



    return(
        <>
            <h1>Login</h1>

        Email<input type="text" value={emaillogin} onChange={handleOnEmailLogin
        }  />
        Password<input type="text" value={passwordlogin} onChange={handleOnPasswordLogin} />
        <button onClick={handleOnLogin}>Login</button>
        <button onClick={handleOnLogoff}>LogOff</button>
  
        

{/* {todos.map((todo) => {

return (
    <div key={todo.id}>

        <li key={todo.id} className="mt-1">

            {!todo.isEdit ?
                <>
                    {todo.text}
                    <button disabled={todos.find(el => el.isEdit)} onClick={() => onEditAction(todo.id, "edit")}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </> */}



        </>
    )
}


export default Login