// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Search from './components/search/search'

const App = () => {

  const handelOnSearchChange = {searchData} => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handelOnSearchChange} />
    </div>
  )
}

export default App 