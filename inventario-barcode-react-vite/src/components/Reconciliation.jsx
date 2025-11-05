import React from 'react'
import { useInventory } from '../context/InventoryContext'
import { generateDiscrepancyPdf } from '../utils/pdf'

export default function Reconciliation(){
  const { theoretical, physical } = useInventory()

  const reconcile = ()=>{
    const mapTheoretical = new Map(theoretical.map(t=>[t.code,t]))
    const rows = []
    const codes = new Set([...theoretical.map(t=>t.code), ...physical.map(p=>p.code)])
    codes.forEach(code=>{
      const t = mapTheoretical.get(code)
      const expected = t ? t.expectedQty : 0
      const name = t ? t.name : '—'
      const p = physical.find(i=>i.code===code)
      const qty = p ? p.qty : 0
      const diff = qty - expected
      if(diff !== 0){
        rows.push({code, name, expected, qty, diff})
      }
    })

    generateDiscrepancyPdf(rows)
  }

  return (
    <div>
      <h2>Conciliación y Reporte</h2>
      <p>Compara inventario físico vs teórico y descarga un reporte PDF con las discrepancias.</p>
      <button onClick={reconcile}>Generar reporte de discrepancias (PDF)</button>
    </div>
  )
}