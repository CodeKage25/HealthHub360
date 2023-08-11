'use client'
import React, { useState } from 'react'
import Button from '../../design-system/Button/Button'
interface HeaderProps {
  onSearch: (searchQuery: string) => void
}
const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    onSearch(searchQuery)
    setSearchQuery(''); 
  }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value)
  //   onSearch(event.target.value) // Call onSearch as you type
  // }


  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <>
      <div className="flex flex-col bg-[url('/images/healthhub.png')] bg-[50%] bg-lightgray bg-cover h-[529px] bg-no-repeat relative">
        <div className="bg-blue h-[529px] mix-blend-multiply"></div>
        <div className="inline-flex flex-col items-center gap-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-4 z-10">
            <h3 className="text-white text-center font-satoshi text-5xl not-italic font-bold leading-52 tracking-wider">
              Get Quick Access to <br /> Hospitals in your Area
            </h3>
            <h3 className="text-white opacity-80 text-center font-satoshi sm:text-sm sm:font-light lg:text-base lg:font-normal leading-5 tracking-wide">
              Find the nearest hospital to you and make an appointment. Discover{' '}
              <br /> Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
            </h3>
          </div>
          <div className="flex items-center justify-between bg-white rounded-2xl  max-w-[400px] md:max-w-[529px] lg:w-[529px] h-[78px] focus:border-sky-500 focus:ring-sky-500">
            <span className="">
              <img
                className="pl-6 sm:w-[50px] lg:w-[50px]"
                src="/icons/mapMarker.svg"
                alt="mapmarker"
              />
            </span>
            <input
              className="h-[78px] max-w-[400px] focus:outline-none"
              placeholder="Search Hospital"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            ></input>
            <span className="">
              <Button
                styles={
                  'flex  max-w-[100px] bg-blue justify-center items-center rounded-lg gap-[10px] pt-4 pb-4 pl-5 pr-5 pr-4 mr-4 text-white font-satoshi non-italic text-base leading-6 font-medium'
                }
                onClick={handleSearch}
                type={'button'}
                title={'Search'}
                disabled={false}
              >
                Search
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
