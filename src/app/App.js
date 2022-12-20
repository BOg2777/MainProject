import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { observer } from 'mobx-react-lite'

import { Layout } from './Layout'
import Router from './Royter'

function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
            <ModalProvider>
                <Layout>
                  <Router />
                </Layout>
            </ModalProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default observer(App)

