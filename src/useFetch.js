import React, {useState, useEffect, useCallback} from 'react'

export const useFetch = (url) => {

    const [dataFromApi, setDataFromApi] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    
    useEffect(() => {
        const abortController = new AbortController()
        const fetchData = async(url)=>{
            try{
                const data = await fetch(url, {signal: abortController.signal})
                const res  = await data.json()
                setDataFromApi(()=>res)
                setLoading(false)
            }catch(error){
                if (error.name === 'AbortError') {
                    console.log('request was cancelled');
                }else{
                    setError(true)
                }
            }
        }
        fetchData()
        return () => {
            
            abortController.abort()
        };
    }, []);

    
  return {dataFromApi, loading, error}
}
