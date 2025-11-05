import React, { createContext, useContext, useEffect, useState } from 'react'
import * as db from '../services/db'

const InventoryContext = createContext()

export function InventoryProvider({children}){
  const [theoretical, setTheoretical] = useState([]) // from DB
  const [physical, setPhysical] = useState([]) // scanned

  useEffect(()=>{
    (async ()=>{
      const items = await db.loadTheoretical()
      setTheoretical(items)
    })()
  },[])

  const addScanned = (code) => {
    setPhysical(prev=>{
      const copy = [...prev]
      const idx = copy.findIndex(i=>i.code===code)
      if(idx>=0){
        copy[idx] = {...copy[idx], qty: copy[idx].qty + 1}
      } else {
        copy.push({code, qty:1, scannedAt: Date.now()})
      }
      return copy
    })
  }

  const resetPhysical = ()=> setPhysical([])

  return (
    <InventoryContext.Provider value={{theoretical, physical, addScanned, resetPhysical, setTheoretical}}>
      {children}
    </InventoryContext.Provider>
  )
}

export const useInventory = ()=> useContext(InventoryContext)