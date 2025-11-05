import jsPDF from 'jspdf'
import 'jspdf-autotable'

export function generateDiscrepancyPdf(rows){
  const doc = new jsPDF()
  doc.setFontSize(14)
  doc.text('Reporte de discrepancias — Inventario', 14, 20)

  if(rows.length === 0){
    doc.setFontSize(12)
    doc.text('No se encontraron discrepancias.', 14, 40)
    doc.save('reporte_discrepancias.pdf')
    return
  }

  const tableData = rows.map(r=>[r.code, r.name, r.expected.toString(), r.qty.toString(), r.diff.toString()])
  doc.autoTable({
    head: [['Código','Nombre','Esperado','Físico','Diferencia']],
    body: tableData,
    startY: 30,
    styles: { fontSize: 10 }
  })
  doc.save('reporte_discrepancias.pdf')
}