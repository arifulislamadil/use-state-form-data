import React, { useState } from 'react';

const AppForm = () => {
    const [firstName,setFirstName]= useState("")
    const [lastName,setLastName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    
    const submit =(e)=>{
     e.preventDefault()
     console.log(firstName,lastName,email,password)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='last'>Last Name</label>
                    <input
                        type="text"
                        name="name"
                        id="last"
                        onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="text"
                        name="name"
                        id="email"
                        onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='pass'>password</label>
                    <input
                        type="text"
                        name="name"
                        id="pass"
                        onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AppForm;