import { useState, useEffect } from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect -> to render the function on every code
    // useEffect dependencies -> to render the function on particular function
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource....');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1200);
    }, [url]); // to render the function only once

    return { data, isPending, error }
}

export default useFetch;