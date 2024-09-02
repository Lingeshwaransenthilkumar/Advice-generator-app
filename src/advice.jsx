import {useEffect,useState} from 'react';

function Adviceapp(){

    const [advice,setAdvice]=useState("Please click me find something useful");
    //const [count,setCount]=useState(0);
    const [id,setId]=useState(1);
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        // console.log(res)
        const data = await res.json();
        //console.log(data)
        setId(data.slip.id);
        setAdvice(data.slip.advice);
        //setCount(count+1);

    }
    // it helps to call the function at loading instead of clicking it to revoke it
    useEffect(function(){
        getAdvice();
    },[])


    return(
        <div className='container'>
            <h5>ADVICE #{id}</h5>
            <h3 className='advice'>" {advice} "</h3>
            {/*<p>Count of advices asked is {count}</p>*/}
            <div className='desktop-divider'><img src="/images/pattern-divider-desktop.svg" alt="" /></div>
            <div className='mobile-divider'><img src="/images/pattern-divider-mobile.svg" alt="" /></div>
            <button className='advice-btn' onClick={getAdvice}><img src="/images/icon-dice.svg" alt="" /></button>

        </div>
    )
}

export default Adviceapp