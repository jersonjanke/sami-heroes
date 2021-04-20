import './App.scss'
import React from 'react'

import List from './components/List'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  )
}

export default App
