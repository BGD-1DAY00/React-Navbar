import React from 'react'
import { useFetch } from './useFetch'
import { Product } from './Product'
export const Prop = () => {
    const data = useFetch('https://course-api.com/react-prop-types-example')
  return (
    <div>
        <h2>Products</h2>
        <section className="products">
            {data.dataFromApi.map((product)=>{
                return <Product key={product.id} {...product} />
            })}
        </section>
    </div>
  )
}
