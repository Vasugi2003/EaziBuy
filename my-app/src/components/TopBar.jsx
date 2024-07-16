import React from 'react'
import '../style/TopBar.css'

function TopBar(props) {
    console.log(props.category)
    
    const handleCategorySelection = (e) =>{
        props.setSelectedCategory(e.target.value)
    }

    const handleSearchInput = (e) => {
        props.setSearchInput(e.target.value)
    }
  return (
    <div className='topbar'>    
        <select onChange={handleCategorySelection}>
            <option value="">Select...</option>
            {props.category.map((c)=> <option value={c} key={c}>{c}</option>)}
        </select>

        <input type="text" placeholder="Search" onChange={handleSearchInput} value={props.searchInput}/>
    </div>
  )
}

export default TopBar