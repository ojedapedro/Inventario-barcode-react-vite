import localforage from 'localforage'

const store = localforage.createInstance({name:'inventario-db'})

const THEORETICAL_KEY = 'theoretical'

export async function loadTheoretical(){
  const v = await store.getItem(THEORETICAL_KEY)
  if(!v){
    const sample = [
      {code:'123456789012', name:'Producto A', expectedQty: 10},
      {code:'987654321098', name:'Producto B', expectedQty: 5},
      {code:'111222333444', name:'Producto C', expectedQty: 2}
    ]
    await store.setItem(THEORETICAL_KEY, sample)
    return sample
  }
  return v
}

export async function saveTheoretical(items){
  await store.setItem(THEORETICAL_KEY, items)
}