import React from 'react'
import { observer } from 'mobx-react-lite'

import { AboveHeader,Header,Footer, SignUp, SignIn} from './ui'

import styles from './styles.module.css'

function Layout({ children }){
  return (
    <div className={styles.root}>
      <SignUp />
      <SignIn /> 
      <AboveHeader />
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
export default observer(Layout);