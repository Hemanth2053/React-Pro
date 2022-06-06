import React from 'react'
import { useState } from 'react';
import '../App.css'
import Card from '../Jscomp/Card';
import Paginate from '../Jscomp/Paginate'

function Home() {
    const makeMytrip = [
        { busName: "KRP", rating: 4.5, traveingTo: "Chennai", departure: "8", type: "AC sleeper", price: 700 },
        { busName: "PVR", rating: 4, traveingTo: "Chennai", departure: "10", type: "AC sleeper", price: 1100 },
        { busName: "RPN", rating: 3.5, traveingTo: "Coimbatore", departure: "11", type: "Non-AC sleeper", price: 800 },
        { busName: "Parven", rating: 5, traveingTo: "Chennai", departure: "7", type: "AC sleeper", price: 700 },
        { busName: "Scania", rating: 4, traveingTo: "Madurai", departure: "11", type: "AC sleeper", price: 1200 },
        { busName: "Raj Travels", rating: 3, traveingTo: "Salem", departure: "11", type: "AC sleeper", price: 900 },
        { busName: "SRM Travels", rating: 4, traveingTo: "Chennai", departure: "10", type: "AC sleeper", price: 850 },
        { busName: "KKR Travels", rating: 4, traveingTo: "Coimbatore", departure: "9", type: "Non-AC sleeper", price: 450 },
        { busName: "MKP Tours", rating: 5, traveingTo: "Chennai", departure: "8", type: "Non-AC sleeper", price: 1250 },
        { busName: "KRI travles", rating: 3, traveingTo: "Coimbatore", departure: "9", type: "AC sleeper", price: 1400 },
        { busName: "HP bus", rating: 2, traveingTo: "Chennai", departure: "8", type: "AC sleeper", price: 800 },
        { busName: "JRP Travels", rating: 4, traveingTo: "Madurai", departure: "9", type: "AC sleeper", price: 650 },
    ]
    
      const[data, Setdata] = useState(makeMytrip)
      const handleCityFilter = (value) => {
        const DuplicateData = [...makeMytrip]
        SetCurrentPage(1)
        if(value === "All"){
          Setdata(makeMytrip)
          return;
        }
        
        const filterdCityData = DuplicateData.filter(a=>a.traveingTo === value)
        Setdata(filterdCityData)
      }
    
      const handleAbovePriceFilter = (value) => {
        const DuplicateData = [...makeMytrip]
      
        const filterdPriceData = DuplicateData.filter(a=>a.price >= 800)
        Setdata(filterdPriceData)
      }
      const handleBelowPriceFilter = (value) => {
        const DuplicateData = [...makeMytrip]
      
        const filterdPriceData = DuplicateData.filter(a=>a.price <= 800)
        Setdata(filterdPriceData)
      }
      const handleTimeSort = (value)=>{
        const DuplicateData = [...makeMytrip]
        const sortedTimeData = DuplicateData.sort((a, b)=>a.departure-b.departure)
        
        Setdata(sortedTimeData)
      }
      const handleRatingSort = (value)=>{
        const DuplicateData = [...makeMytrip]
        const sortedRatingData = DuplicateData.sort((a, b)=>a.rating-b.rating)
        Setdata(sortedRatingData)
      }
      const handlePriceSort = (value)=>{
        const DuplicateData = [...makeMytrip]
        const sortedPriceData = DuplicateData.sort((a, b)=>a.price-b.price)
        Setdata(sortedPriceData)
      }
    
      const[currentPage, SetCurrentPage] = useState(1);
      const[postPerPage, SetPostPerPage] = useState(4);
    
      const paginate = (pageNumber) =>SetCurrentPage(pageNumber)
    
      const IndexOfLastPost = currentPage*postPerPage
      const indexOfFirstPost = IndexOfLastPost-postPerPage
      let currentPost = data.slice(indexOfFirstPost, IndexOfLastPost)
    
  return (
    <div className="App">
    <div className="header">
      
      <button className="sortbtn" onClick={()=>handleTimeSort() }>Departure Time</button>
      <button className="sortbtn" onClick={()=>handleRatingSort() }>Rating</button>
      <button className="sortbtn" onClick={()=>handlePriceSort() }>Price</button>
    </div>
    <div className="main">
      <div className="sidebar">
        
            <button className="allbtn" onClick={()=>handleCityFilter("All")}>All</button>
            <h3>City Filter</h3>
        <div className="citycont">
            <button className="filterbtn" onClick={()=>handleCityFilter("Chennai")}>Chennai</button>
            <button className="filterbtn" onClick={()=>handleCityFilter("Coimbatore")}>Coimbatore</button>
            <button className="filterbtn" onClick={()=>handleCityFilter("Salem")}>Salem</button>
            <button className="filterbtn" onClick={()=>handleCityFilter("Madurai")}>Madurai</button>
          
        </div>
            <h3>Price Filter</h3>
        <div className="pricecont">
            <button className="pricebtn" onClick={()=>handleAbovePriceFilter()}>Above 800</button>
            <button className="pricebtn" onClick={()=>handleBelowPriceFilter()}>Below 800</button>
          
        </div>
      </div>
      <div style={{width: "100%", display: "flex", flexWrap: "wrap"}} className="content">
      
        {currentPost.map(a=>(
          <Card key={a.busName} busName={a.busName} traveingTo={a.traveingTo} price={a.price} departure={a.departure} type={a.type} rating={a.rating}/>
       ))}
          <Paginate className="paginatecont" postPerPage={postPerPage} totalPost={makeMytrip.length} paginate={paginate}/>
      </div>
    </div>
    
    
  </div>
  )
}

export default Home