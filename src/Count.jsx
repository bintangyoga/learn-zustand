import './App.css';
import { useAppStore } from './stores/app-store';
import { shallow } from 'zustand/shallow';

export default function Count() {
    const [cupOfCoffee, increase, decrease] = useAppStore((state) => {
        return [
            state.cupOfCoffee,
            state.increase,
            state.decrease,
        ];
    }, shallow);

    console.log('Render Count');

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <button type='button' onClick={decrease}>-</button>
                <div style={{ margin: '0 1rem' }}>Cup of Coffee: {cupOfCoffee}</div>
                <button type='button' onClick={increase}>+</button>
            </div>
        </>
    )
}