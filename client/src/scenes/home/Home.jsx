import React from 'react'
import ItemDetails from '../itemDetails/ItemDetails'
import MainCorousel from "./MainCarousel"
import ShoppingList from './ShoppingList'
import Subscribe from './Subscribe'


const Home = () => {
  return (
    <div className='home'>
      <MainCorousel/> 
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home