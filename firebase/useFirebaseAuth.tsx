import { useState, useEffect } from 'react'
import {
  UserCredential,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
} from 'firebase/auth'
import firebase from './firebase'

interface AuthUser {
  uid: string
  email: string
}

const formatAuthUser = (user: firebase.User | null): AuthUser | null => {
  if (!user) {
    return null
  }
  return {
    uid: user.uid,
    email: user.email || '',
  }
}

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const authStateChanged = async (authState: firebase.User | null) => {
    if (!authState) {
      setLoading(false)
      return
    }

    setLoading(true)

    const formattedUser = formatAuthUser(authState)

    setAuthUser(formattedUser)

    setLoading(false)
  }

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return firebaseSignInWithEmailAndPassword(firebase.auth(), email, password)
  }

  const createUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return firebaseCreateUserWithEmailAndPassword(
      firebase.auth(),
      email,
      password
    )
  }

  const signOut = (): Promise<void> => firebase.auth().signOut().then(clear)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  // Include firebaseAuth property in the returned object
  const firebaseAuth = firebase.auth()

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    firebaseAuth, // Add this line
  }
}
