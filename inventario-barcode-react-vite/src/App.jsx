import React from 'react'
import Scanner from './components/Scanner'
import InventoryTable from './components/InventoryTable'
import Reconciliation from './components/Reconciliation'

export default function App(){
  return (
    <div style={{padding:20,fontFamily:'Inter, system-ui, Arial'}}>
      <h1>Gestión de Inventarios — Escaneo de Códigos de Barras</h1>
      <p>Escanea ítems con la cámara, compáralos con el inventario teórico y genera reportes PDF.</p>

      <section style={{marginTop:20}}>
        <Scanner />
      </section>

      <section style={{marginTop:20}}>
        <InventoryTable />
      </section>

      <section style={{marginTop:20}}>
        <Reconciliation />
      </section>
    </div>
  )
}