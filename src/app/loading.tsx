'use client'
import React, { useState } from 'react'
import { MetroSpinner } from 'react-spinners-kit'
export default function Loading() {
  const [loading, setLoading] = useState(true)
  return (
    <MetroSpinner
      size={30}
      color="#686769"
      loading={() => {
        setLoading(loading)
      }}
    />
  )
}
