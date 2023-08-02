'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomePage from '../app/home/page'
import Button from '../design-system/Button/Button'

const Home = () => {
  return (
    <>
      <HomePage />
      <Button
        handleClick={() => {}}
        styles={'w-full bg-violet-500'}
        type={'button'}
        title={'Open modal'}
        disabled={false}
      >
        {/* children */}
        Open modal
      </Button>
    </>
  )
}

export default Home
