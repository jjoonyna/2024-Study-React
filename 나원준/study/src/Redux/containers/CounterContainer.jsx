import Counter from '../Components/Counter';
import {useSelector, useDispatch} from 'react-redux'
import {increase, decrease} from '../modules/counter'


const CounterContainer =()=>{
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch();
    return <Counter number={number} onIncrease={()=>dispatch(increase())} onDecrease={()=>dispatch(decrease())} />
}


export default CounterContainer;