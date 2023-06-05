import React, { use } from 'react'
import { Product } from './Product';

async function getData() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();
  // console.log(products)
  return products
}
const ProductFeed = () => {
  // console.log(products)
  const products = use(getData());
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
      {products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
        <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
      ))}
      <img className='md:col-span-full' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
      <div className='md:col-span-2'>
        {products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
          <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
        ))}
      </div>
      {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (
        <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
      ))}
    </div>
  )
}

export default ProductFeed
