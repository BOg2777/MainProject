import { observer } from 'mobx-react-lite'
import { useState } from 'react';

import { AboveHeader,Header,Footer, SignUp, SignIn} from './ui'

import styles from './styles.module.css'

function Layout({ children }){
  const [dataBase, setDataBase] = useState([{
    email:'Developments@gmail.com',
    password:'Devel2022',
  },]);
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className={styles.root}>
      <SignUp registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} setDataBase={setDataBase} dataBase={dataBase} isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
      <SignIn registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} setDataBase={setDataBase} dataBase={dataBase} isSignIn={isSignIn} setIsSignIn={setIsSignIn}/> 
      <AboveHeader />
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
export default observer(Layout);