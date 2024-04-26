import React from 'react'

function ObjectsParts() {
    const data = [
        "/assets/car.png",
        "/assets/car.png",
        "/assets/car.png",
        "/assets/car.png",
    ]
    return (
        <div className='mx-3 px-2 w-full h-full flex items-center justify-around'>
            <div className='grid grid-cols-1  gap-3'>
                {data.map((e) => (

                    <div className='rounded-full border-yellow-300 border-2   w-24 h-24 object-contain flex  items-center justify-center'                >
                        <img src={e} alt="" />
                    </div>
                ))}

            </div>
            <div className='border rounded-xl h-48 w-48 flex items-center justify-center'><img src="/assets/hacker.png" alt="" /></div>
        </div>
    )
}

export default ObjectsParts