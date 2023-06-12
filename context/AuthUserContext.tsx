'use client'
import { createContext, useContext, ReactNode } from 'react'
import {
  UserCredential,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
} from 'firebase/auth'
import useFirebaseAuth from '../firebase/useFirebaseAuth'

interface AuthUser {
  uid: string
  email: string
}

interface AuthContext {
  authUser: AuthUser | null
  loading: boolean
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>
  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>
  signOut: () => Promise<void>
}

const authUserContext = createContext<AuthContext | undefined>(undefined)

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useFirebaseAuth()

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const result = await firebaseSignInWithEmailAndPassword(
      auth.firebaseAuth,
      email,
      password
    )
    return result
  }

  const contextValue: AuthContext = {
    authUser: auth.authUser,
    loading: auth.loading,
    signInWithEmailAndPassword: auth.signInWithEmailAndPassword,
    createUserWithEmailAndPassword: auth.createUserWithEmailAndPassword,
    signOut: auth.signOut,
  }

  return (
    <authUserContext.Provider value={contextValue}>
      {children}
    </authUserContext.Provider>
  )
}

export const useAuth = (): AuthContext => {
  const auth = useContext(authUserContext)
  if (!auth) {
    throw new Error('useAuth must be used within an AuthUserProvider')
  }
  return auth
}
