'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../../context/AuthUserContext'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()
  const { signInWithEmailAndPassword } = useAuth()

  return <div></div>
}
