import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import {Header,Feed,VideoDetails,ChannelDetails,SearchDetails} from "./components"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Feed/>}/>
        <Route path ="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm" element={<SearchDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App