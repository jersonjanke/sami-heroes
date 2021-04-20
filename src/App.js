import './App.scss'
import React from 'react'

import List from './components/List'
import Search from './components/Search'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Search />
        <List />
      </div>
      <Footer />
    </>
  )
}

export default App
