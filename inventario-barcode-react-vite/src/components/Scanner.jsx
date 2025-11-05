import React, { useEffect, useRef, useState } from 'react'
import { BrowserMultiFormatReader } from '@zxing/browser'
import { useInventory } from '../context/InventoryContext'

export default function Scanner(){
  const videoRef = useRef(null)
  const codeReaderRef = useRef(null)
  const { addScanned } = useInventory()
  const [scanning, setScanning] = useState(false)
  const [lastCode, setLastCode] = useState(null)

  useEffect(()=>{
    const codeReader = new BrowserMultiFormatReader()
    codeReaderRef.current = codeReader
    return ()=>{
      try{ codeReader.reset() }catch(e){}
    }
  },[])

  const start = async ()=>{
    if(!codeReaderRef.current) return
    setScanning(true)
    try{
      await codeReaderRef.current.decodeFromVideoDevice(undefined, videoRef.current, (result, err)=>{
        if(result){
          const code = result.getText()
          setLastCode(code)
          addScanned(code)
        }
      })
    }catch(e){
      console.error(e)
      alert('No se pudo acceder a la cámara. Revisa permisos o usa un navegador compatible.')
      setScanning(false)
    }
  }

  const stop = ()=>{
    setScanning(false)
    if(codeReaderRef.current) codeReaderRef.current.reset()
  }

  return (
    <div>
      <h2>Escáner</h2>
      <div>
        <video ref={videoRef} style={{width:320,height:240,border:'1px solid #ccc'}} />
      </div>
      <div style={{marginTop:8}}>
        {!scanning ? <button onClick={start}>Iniciar escaneo</button> : <button onClick={stop}>Detener</button>}
      </div>
      <div style={{marginTop:8}}>
        <b>Último código escaneado:</b> {lastCode ?? '—'}
      </div>
    </div>
  )
}