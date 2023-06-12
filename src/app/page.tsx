'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HomePage from '../app/home/page'
import { useAuth } from '../../context/AuthUserContext'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()
  const { signInWithEmailAndPassword } = useAuth()

  return (
    <>
      <HomePage />
    </>
  )
}

export default Home
