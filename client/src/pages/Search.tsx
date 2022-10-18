import React from 'react';
import PageTitle from '../components/PageTitle';
import locationIcon from '../icons/location.svg';
import ButtonSearch from '../components/ButtonSearch';
import ButtonSearchCategories from '../components/ButtonSearchCategories';
import { useState, useEffect } from 'react';

import { getGymClasses } from '../utils/api.service'
import { useNavigate } from 'react-router-dom';
import { Post } from '../../../globalTypes/Post'


export default function Search() {

  const navigate = useNavigate();

  const [classes, setClasses] = useState([])

  useEffect(() => {
    getGymClasses()
      .then(data => setClasses(data))
      .catch(error => console.log(error))

  }, [])


  const categories = ['Yoga', 'Pilates', 'Boxing', 'Running', 'Cyclyng', 'Swimming', 'Dance', 'Hiking', 'Other']

  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [timeButtons, setTimeButtons] = useState<Array<string>>([]);
  const [categoryButtons, setCategoryButtons] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>();


  const handleRange = (event: any) => {
    setMaxPrice(event.target.value)
  }

  const handleTime = (newButton: string) => {
    timeButtons.includes(newButton) ?
      setTimeButtons(oldButtons => oldButtons.filter(el => { return el !== newButton })) : setTimeButtons([...timeButtons, newButton])
  }

  const handleCategory = (newButton: string) => {
    categoryButtons.includes(newButton) ?
      setCategoryButtons(oldButtons => oldButtons.filter(el => { return el !== newButton })) : setCategoryButtons([...categoryButtons, newButton])
  }

  const handleLocation = (event: any) => {
    setLocation(event.target.value)
  }

  const handleSearch = async () => {


    // get time, location, price
    // create a url
    //fetch('/search?location=' + location + '&time=' + time)

    let categoryString = '';

    if(categoryButtons.length === 0) {
      categoryString = categories.join()
    } else {
      categoryString = categoryButtons.join()
    }

    try {
      const response = await fetch( 'http://localhost:3001/search?exerciseType=' + categoryString + '&location=' + location) //http://localhost:3001/search?exerciseType=Other,Pilates
      const json = await response.json()
      console.log(json)

      navigate('/searchresults', {state: {
        data: json
      }} )
    } catch (error) {
      console.log(error)
    }







  }

  return (
    <main className='mt-20'>
      <PageTitle title='SEARCH YOUR CLASS' />
      <section className='ml-8 font-black mt-6'>



        <button onClick={handleSearch}>search</button>
        <h2 className='mb-3 location-h2'>Location</h2>
        <form>
          {/* <label htmlFor="location" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label> */}
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 ">
              <img className='h-10 w-7 mr-5 z-10' src={locationIcon} />
            </div>
            <input type="search" id="location-search" onChange={(event) => handleLocation(event)} className="z-0 block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder-gray-400 pl-[55px] w-[90%] drop-shadow-md" placeholder="filter by location" />
            {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
          </div>
        </form>
        <section className='mt-6'>
          <h2>Time</h2>
          <ButtonSearch buttonText='Morning' buttonClick={() => handleTime('Morning')} isPressed={timeButtons.includes('Morning')} />
          <ButtonSearch buttonText='Afternoon' buttonClick={() => handleTime('Afternoon')} isPressed={timeButtons.includes('Afternoon')} />
          <ButtonSearch buttonText='Evening' buttonClick={() => handleTime('Evening')} isPressed={timeButtons.includes('Evening')} />
        </section>
        <section className='mt-6'>
          <h2>Price</h2>
          <form>
            <input type="range" id="price" min={0} max={50} onChange={(event) => handleRange(event)} className="w-[90%] max-w-sm" />
            <p>{maxPrice}</p>
          </form>
        </section>
        <section className='mt-6'>
          <h2>Categories</h2>
          {categories.map((category, index) => <ButtonSearchCategories key={index} buttonText={category} buttonClick={() => handleCategory(category)} isPressed={categoryButtons.includes(category)} />)}
        </section>
      </section>
    </main>
  )
}