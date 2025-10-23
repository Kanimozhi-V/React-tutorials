import { useEffect, useState, useContext, useRef } from "react";
import { dataContext } from "./Home";

function Counter(){

    const [count,setCount]=useState(0);

    // useRef to persist value without re-rendering

    let refCount = useRef(0);

    const data = useContext(dataContext);

    function increment(){

        //Since react uses batch processing(For multiple times updatation) if we call the setCount with
        //  count+1 then it takes the intial value as 0 for both the calls.so we use preCount
        // setCount(preCount => preCount+1);
        // setCount(preCount => preCount+1);

        // setCount(count + 1);

        //Using useRef to persist the value without re-rendering

        refCount.current +=1;

        console.log('count:'+count);
        console.log('refcount:'+refCount.current);
    }

    useEffect(()=>{
        // console.log(count);
        console.log(refCount);
    })

    return(
        <>
        <h2>{data}</h2>
        <h2 className='m-5'>{refCount.current}</h2>
        <button className='mx-5 btn btn-primary' onClick={increment}>Up</button>
         <button className='btn btn-secondary' onClick={()=>{setCount(refCount.current)}}>Update</button>
        </>
    );


}
export default Counter;