import React from 'react'
import { Link } from 'react-router-dom'
import Flex from '../Flex'

const Cards = ({filteredItems}) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-12 shadow-sm">
        {
            filteredItems.slice(0, 8).map((item) => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.image} alt="image" className="mx-auto w-full hover:scale-105 transition-all duration-300" />
                    </Link>
                    <div className="mt-4 px-4">
                        <h3 className="text-base font-semibold mb-2">{item.title}</h3>

                        <Flex className="justify-between">
                            <p className="text-black/50">{item.category}</p>
                            <p className="font-semibold">${item.price}</p>
                        </Flex>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards