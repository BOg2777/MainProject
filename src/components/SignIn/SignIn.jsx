import React, { useState } from 'react';

import logoApple from 'img/Registration/Apple.svg';
import logoFacebook from 'img/Registration/Facebook.svg';
import logoGoogle from 'img/Registration/Google.svg';
import logoVk from 'img/Registration/Vk-fill.svg';
import logoYandex from 'img/Registration/Yandex.svg';
import Cross from 'img/Registration/Vector.svg';

import styles from 'components/SignIn/styles.module.css';

function SignIn({registration , setRegistration, inputShow, setInputShow,dataBase,isSignIn,setIsSignIn}){
    const [register, setRegister] = useState(() => {
        return {
            Email: "",
            Password: "",
            PasswordRepeat: "",
        }
    }) 

    function changeInputRegister  (event) {
        setRegister((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    function submitChackin(){
        dataBase.forEach((element) => {
            if(element.email == register.Email && element.password == register.Password){
                alert('True');
            }else{alert('false')}
        });
    }
    function Entry(name,placeholder){
        console.log(register,dataBase)
        return (<div className={styles.nameInputWrapper}><p className={styles.nameInput}>{name}*: </p><input 
        type={String(name)}
        placeholder={placeholder}
        id={String(name)}
        name={String(name)}
        value={register[String(name)]}
        onChange={(event)=>changeInputRegister(event)}
        className = {styles.Input}/></div>
        )
    };

    function OpenRegister(){
        setRegistration(!registration);
        setInputShow(!inputShow);
    };
    if(inputShow){
        return(
            <div className={styles.blur}>
                <div className={styles.wrapper}>
                    <div>
                        <div className={styles.crossWrapeer} onClick={()=>setInputShow(!inputShow)}><img src={Cross} className={styles.cross}/></div>
                    </div>
                    <h2 className={styles.title}>Войти:</h2>
                    <div className={styles.wrapperImg}>
                        <div className={styles.img}><img src= {logoApple} className={styles.logo} /></div>
                        <div className={styles.img}><img src= {logoFacebook} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoGoogle} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoVk} className={styles.logo}/></div>
                        <div className={styles.img}><img src= {logoYandex} className={styles.logo}/></div>
                    </div>
                    <h1 className={styles.descriptionIcons}>или зарегистрируйтесь с помощью email</h1>
                    <form  className={styles.form} onSubmit={submitChackin}>
                        {Entry('Email', '  Введите Ваш адрес эл. почты')}
                        {Entry('Password', '  Введите Ваш пароль')}
                        <input type="submit" value='Войти' className={styles.btn}/>
                    </form>
                    <hr className={styles.line}></hr>
                    <div className={styles.otherInput}><p>Еще не зарегистрированы?</p><p className={styles.textInput} onClick={OpenRegister}>Зарегистрироваться</p></div>
                    <div className={styles.footer}>Создавая аккаунт я соглашаюсь <p className={styles.footer_title}>c  Политикой конфиденциальности и Условиями пользования</p></div>
            </div>
        </div>
        )
    }
}
export default SignIn;