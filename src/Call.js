import React from 'react'
import { useFetch } from './useFetch'
export const Call = () => {
    
        const {loading, error, dataFromApi} = useFetch('https://jsonplaceholder.typicode.com/users')
    
    
  return (
    <div>m,</div>
  )
}
