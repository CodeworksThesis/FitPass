import React from 'react';
import PageTitle from '../components/PageTitle';
import locationIcon from '../icons/location.svg';
import ButtonSearch from '../components/ButtonSearch';
import ButtonSearchCategories from '../components/ButtonSearchCategories';
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { getSearchGymClassResults } from '../utils/api.service'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

export default function Search() {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0()

  const categories = ['Yoga', 'Pilates', 'Boxing', 'Running', 'Cycling', 'Swimming', 'Dance', 'Hiking', 'Other']
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [dayButtons, setDayButtons] = useState<Array<string>>([]);
  const [categoryButtons, setCategoryButtons] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>();
  const [search, setSearch] = useState<string>()
  
  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value))
  }

  const handleDay = (newButton: string) => {
    dayButtons.includes(newButton) ?
      setDayButtons(oldButtons => oldButtons.filter(el => { return el !== newButton })) : setDayButtons([...dayButtons, newButton])
  }

  const handleCategory = (newButton: string) => {
    categoryButtons.includes(newButton) ?
      setCategoryButtons(oldButtons => oldButtons.filter(el => { return el !== newButton })) : setCategoryButtons([...categoryButtons, newButton])
  }

  const handleLocation = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSearch = async () => {
    let categoryString = '';
    if(categoryButtons.length === 0) {
      categoryString = categories.join()
    } else {
      categoryString = categoryButtons.join()
      }
    const dayString = dayButtons.join();
    try {
      const json = await getSearchGymClassResults(search as string, categoryString, location as string,maxPrice,dayString)
      navigate('/searchresults', {state: {
        data: json
      }} )
    } catch (error) {
      console.log(error)
    }
  }
  console.log(isAuthenticated)
  return (
    <>
    {isAuthenticated ? 
    <main className='mt-20'>
      <PageTitle title='SEARCH YOUR CLASS' />
      <section className='ml-8 mt-6'>
        <form onSubmit={handleSearch}>
          <div className='flex'>
            <input onChange={(event) => setSearch(event.target.value)} className='font-normal p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder-gray-400 w-[80%] drop-shadow-md' 
            type="search" 
            placeholder='Insert exercise name' />
            <div className='flex justify-center items-stretch bg-[#6F87F5] rounded-lg w-10 cursor-pointer'>
              <AiOutlineSearch  className={`text-2xl self-center text-white`} onClick={handleSearch}/>
            </div>
          </div>
        </form>
        <h2 className='mb-3 location-h2 mt-10'>Location</h2>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 ">
              <img className='h-10 w-7 mr-5 z-10' src={locationIcon} />
            </div>
            <input type="search" id="location-search" onChange={(event) => handleLocation(event)} className="z-0 block p-4 pl-10 w-full h-10 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder-gray-400 pl-[55px] w-[90%] drop-shadow-md" placeholder="Filter by location" />
          </div>
        </form>
        <section className='mt-6'>
          <h2>Time</h2>
          <ButtonSearch buttonText='Today' buttonClick={() => handleDay('Today')} isPressed={dayButtons.includes('Today')} />
          <ButtonSearch buttonText='Tomorrow' buttonClick={() => handleDay('Tomorrow')} isPressed={dayButtons.includes('Tomorrow')} />
          <ButtonSearch buttonText='Next week' buttonClick={() => handleDay('Next week')} isPressed={dayButtons.includes('Next week')} />
        </section>
        <section className='mt-6'>
          <h2>Price</h2>
          <form onSubmit={handleSearch}>
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
            : (navigate('/'))}
            </>
  )
}