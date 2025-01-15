'use client'
import React from 'react'
import { AppStore, store } from '../store'
import { useRef } from 'react'
import {Provider} from 'react-redux'
type Props = {
    children: React.ReactNode
}

function StoreProvider({children}: Props) {
    const storeRef = useRef<AppStore>()
    if(!storeRef.current){
        storeRef.current = store()
    }
    return (
    <Provider store={storeRef.current} >{children}</Provider>
  )
}

export default StoreProvider