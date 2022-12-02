import React, { useState } from 'react';
import validator from 'validator';

import logoApple from 'img/Registration/Apple.png';
import logoFacebook from 'img/Registration/Facebook.png';
import logoGoogle from 'img/Registration/Google.png';
import logoVk from 'img/Registration/Vk-fill.png';
import logoYandex from 'img/Registration/Yandex.png';
import Cross from 'img/Registration/Vector.png';

import styles from 'components/Registration/styles.module.css';


function Registration({registration , setRegistration, inputShow, setInputShow}){

    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            passwordRepeat: "",
        }
    }) 
    function OpenInput(){
        setRegistration(!registration);
        setInputShow(!inputShow);
    }

    function changeInputRegister  (event, name) {
        setRegister((prev) => {
            return {
                ...prev,
                [event.target[name]]: event.target.value,
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
    function Input(name,placeholder, repeat=''){
        return (<div className={styles.nameInputWrapper}><p className={styles.nameInput}>{repeat}  {name}*: </p><input 
        type={name}
        placeholder={placeholder}
        id={String(repeat + name)}
        name={String(repeat + name)}
        value={register[name+repeat]}
        onChange={(event)=>changeInputRegister(event,String(name+repeat))}
        className = {styles.Input}/></div>
        )
    };
    if(registration){
    return(
        <div>
            <div className={styles.blur}>
                <div className={styles.wrapper}>
                    <div>
                        <div className={styles.crossWrapeer} onClick={()=>setRegistration(!registration)}><img src={Cross} className={styles.cross}/></div>
                    </div>
                    <h2 className={styles.title}>Registration:</h2>
                    <div className={styles.wrapperImg}>
                        <div className={styles.img}><img src= {logoApple} className={styles.logo} /></div>
                        <div className={styles.img}><img src= {logoFacebook} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoGoogle} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoVk} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoYandex} className={styles.logo}/></div>
                    </div>
                    <h1 className={styles.descriptionIcons}>или зарегистрируйтесь с помощью email</h1>
                    <form onSubmit={submitChackin} className={styles.form}>
                        {Input('Email', 'Введите Ваш адрес эл. почты')}
                        {Input('Password', 'Введите Ваш пароль')}
                        {Input('Password','Повторите Ваш пароль', 'Repeat')}
                        <input type="submit" value='Зарегистрироваться' className={styles.btn}/>
                    </form>
                    <hr className={styles.line}></hr>
                    <div className={styles.otherInput}><p>Уже зарегистрированы?</p><p className={styles.textInput} onClick={OpenInput}>Войти</p></div>
                    <div className={styles.footer}>Создавая аккаунт я соглашаюсь <p className={styles.footer_title}>c  Политикой конфиденциальности и Условиями пользования</p></div>
                </div>
            </div>
        </div>
    )}
}
export default Registration;