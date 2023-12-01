import './App.css'
import { useAppStore } from './stores/app-store';

export default function Count() {
  const store = useAppStore();

  return (
    <>
      <div style={{marginBottom: '1rem'}}>{store.user}</div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <button type='button' onClick={store.decrease}>-</button>
        <div style={{margin: '0 1rem'}}>Cup of Coffee: {store.cupOfCoffee}</div>
        <button type='button' onClick={store.increase}>+</button>
      </div>
    </>
  )
}