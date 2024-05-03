import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import RecipePage from './pages/RecipePage'
import BrowseFree from './pages/BrowseFree'
import Trending from './pages/Trending'
import BlogPage from './pages/BlogPage'
import PricingPage from './pages/PricingPage'
import Home from './pages/Home'


export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/recipe" element={<RecipePage/>}/>
      <Route path="/browsefree" element={<BrowseFree/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </Router>
  )
}
