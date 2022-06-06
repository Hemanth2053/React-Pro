import React from 'react'
import { useState } from 'react'
import Card from './Maincomp/Card'
import Paginate from './Maincomp/Paginate'

function App() {

  const swiggy = [
    { hotel_Name: "Vasant Bhavan", cuisine: "Indian", rating: "4", distance: "5"  },
    { hotel_Name: "A2B", cuisine: "Indian", rating: "3", distance: "3"  },
    { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: "4.6", distance: "7"  },
    { hotel_Name: "Dominos", cuisine: "American", rating: "4.2", distance: "8"  },
    { hotel_Name: "Taco bell", cuisine: "Mexican", rating: "2", distance: "10"  },
    { hotel_Name: "KFC", cuisine: "American", rating: "3.8", distance: "22"  },
  ]
  const [data, SetData] = useState(swiggy)
  const handleFilter = (value)=>{
    const DuplicateData = [...swiggy];
    if(value === "All"){
      SetData(swiggy)
      return;
    }
    const filterdData = DuplicateData.filter(c=>c.cuisine===value)
    SetData(filterdData)
  }
  const handleSortAccend = (value)=>{
    const DuplicateData = [...swiggy]
    
    const sortedData = DuplicateData.sort((a, b)=> a.distance-b.distance)
    SetData(sortedData)
  }
  const handleSortDeccend = (value)=>{
    const DuplicateData = [...swiggy]
    const sortedData = DuplicateData.sort((a, b)=> b.distance-a.distance)
    SetData(sortedData)
  }

  
  const[currentPage, SetCurrentPage] = useState(1);
  const[postPerPage, SetPostPerPage] = useState(2)

  const paginate = (pageNumber) =>SetCurrentPage(pageNumber)

  const IndexOfLastPost = currentPage*postPerPage
  const IndexOfFirstPost = IndexOfLastPost-postPerPage
  let currentPost = data.slice(IndexOfFirstPost, IndexOfLastPost)

  return (
    <div style={{backgroundColor:"grey", height:"100vh"}}>
      <button onClick={()=>handleFilter("All")}>Show All</button>
      <button onClick={()=>handleFilter("Indian")}>Indian</button>   
      <button onClick={()=>handleFilter("American")}>American</button>
      <button onClick={()=>handleFilter("Mexican")}>Mexican</button>
      <button onClick={()=>handleSortAccend()}>NearBy</button>
      <button onClick={()=>handleSortDeccend()}>FarFrom</button>
        <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
          {currentPost.map(a=>(
            <Card key={a.hotel_Name} hotel_Name={a.hotel_Name} rating={a.rating} cuisine={a.cuisine} distance={a.distance}/>
            
          ))}
          <Paginate postPerPage={postPerPage} totalPost={swiggy.length} paginate={paginate}/>
        </div>
    </div>
  )
}

export default App