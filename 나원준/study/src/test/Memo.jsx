import {useState,useMemo} from 'react';

const getAverage =(numbers)=>{
    if(numbers.length===0) return 0;
    const sum =numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
}

const Memo=()=>{
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('');
    const onlyNumber = /^[0-9]*$/;
    const onChange=(e)=>{
        setNumber(e.target.value);
    }

    const onInsert=(e)=>{
        if(onlyNumber.test(number)){
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
        }
    }
    const avg= useMemo(()=>getAverage(list),[list]);
    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(<li key={index}>{value}</li>))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}

export default Memo;