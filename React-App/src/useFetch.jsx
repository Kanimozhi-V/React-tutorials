//Custom Hooks

import { useEffect, useState } from 'react';

const useFetch = (url) =>{


    const [data,setData] = useState(null)

    const [dummy,setDummy] = useState(true);

    const [error,setError] = useState(null);

    //Use Effect Hook
    useEffect(()=>{
        // console.log("Use Effect Called");
        // console.log(dummy);
        // fetch("https://jsonplaceholder.typicode.com/posts")
        setTimeout(()=>{
            //Fetch API Data 
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("Could not retrieve data");
                }
                console.log(response)
                return response.json()
            }).then(data => setData(data))
            //Error Handling
            .catch((error) => { 
                console.log(error.message);
                setError(error.message);
            })  
        },1000)
    },[]);

    return [data,dummy,error];
}

export default useFetch;