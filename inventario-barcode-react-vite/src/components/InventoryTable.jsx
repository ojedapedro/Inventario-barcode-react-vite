import React from 'react'
import { useInventory } from '../context/InventoryContext'

export default function InventoryTable(){
  const { theoretical, physical, resetPhysical } = useInventory()

  return (
    <div>
      <h2>Inventarios</h2>
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:1}}>
          <h3>Teórico</h3>
          <table border="1" cellPadding={6} style={{width:'100%'}}>
            <thead><tr><th>Código</th><th>Nombre</th><th>Esperado</th></tr></thead>
            <tbody>
              {theoretical.map(t=> (
                <tr key={t.code}><td>{t.code}</td><td>{t.name}</td><td>{t.expectedQty}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{flex:1}}>
          <h3>Físico (escaneado)</h3>
          <button onClick={resetPhysical}>Resetear físico</button>
          <table border="1" cellPadding={6} style={{width:'100%',marginTop:8}}>
            <thead><tr><th>Código</th><th>Cantidad</th></tr></thead>
            <tbody>
              {physical.map(p=> (
                <tr key={p.code}><td>{p.code}</td><td>{p.qty}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}