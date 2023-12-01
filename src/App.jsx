import { useState } from 'react'
import './App.css'
import Line from './components/Line'
import Search from './components/Search'
import { foods } from './db/data'

function App() {

  // for filtering the list
  const [list, setList] = useState(foods)
  const [searchInput, setSearchInput] = useState("")
  
  // filter from search
  function handleSearch(input) {
    if (input.trim() !== "") {      
      // nothing to filter - get whole list
    }
    // find food that match based on the name
    const matches = foods.filter( food => {
      const name = food.name.toLowerCase()
      return name.includes(input.toLowerCase())

    })
    // shorten the list
    setList(matches)
    // for highlighting the matching text
    setSearchInput(input)
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: "center",
    }}>
    <Search handleSearch={handleSearch}/>
    { 
      list.map((food, i) => {
        return <Line key={i} item={food} searching={searchInput} />
      })
    }
    </div>
  )
}

export default App
