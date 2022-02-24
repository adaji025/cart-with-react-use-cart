import React from 'react'
import ItemsCard from './components/ItemsCard'
import data from './data'

const Home = () => {
  return (
    <div>
        <h1 className='text-center mt-3 fw-light'>All Items</h1>
        <section className="container py-4">
        <div className="row justify-content-center">
            {data.productData.map((item, index) => {
                return(
                    <ItemsCard img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    item={item}
                    key={index} />
                )
            })}
        </div>
        </section>
    </div>
  )
}

export default Home