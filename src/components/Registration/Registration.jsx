import React, { useState } from 'react'

import validator from 'validator';


function Registration({registration}){
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            password2: "",
        }
    }) 
    const changeInputRegister = event => {
        event.persist()
        setRegister((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    const submitChackin = (event) => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("You did not enter email")
        } else if(register.password !== register.password2) {
            alert("Repeated password incorrectly")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            console.log('Все ок');
        }
    }
    function Input(name, repeat=''){
        return (<p>{repeat}  {name}: <input 
        type={name}
        id={String(repeat + name)}
        name={String(repeat + name)}
        value={register[String(name + repeat)]}
        onChange={changeInputRegister}
        formnovalidate
        /></p>
        )
    };
    if(registration){
    return(
        <div className="form">
        <h2>Registration:</h2>
        <form onSubmit={submitChackin}>
            {Input('email')}
            {Input('password')}
            {Input('password', 'Repeat')}
            <input type="submit" value='Зарегистрироваться'/>
        </form>
    </div>
    )}
}
export default Registration;