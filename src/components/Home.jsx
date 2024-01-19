import React from 'react'

import stats from '../data/stats'

function Home() {

const card= stats.map(obj =>{
    return ( 
             <div className='flex items-center justify-between p-8 flex-col  ' >
                <h1 className='text-[28px] font-bold ' >{obj.quantity }{obj.quantity==500 && "+"} </h1>
                <p  className='text-[16px] font-semibold  '>{obj.name}</p>
             </div>

            )
})




  return (
    <div className='w-full h-[91vh] bg-[#000] flex flex-col md:flex-row-reverse items-center justify-evenly ' >
        
        <div className=' w-[250px] h-[250px] md:w-[350px] md:h-[350px]  rounded-full overflow-hidden ' >
            <img src="./assets/satish.jpg" alt="" />
        </div>

        <div className='  text-white w-[90%] md:w-[45%] md:h-[60%] h-[55%] flex flex-col items-center gap-3 ' >
            <p className='text-[20px] font-semibold ' >Hi, my name is</p>
            <h1 className='text-[45px] font-bold '  >Satish Dewasi</h1>
            <h4 className='text-[17px] text-center ' >Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing. amet consectetur adipisicing elit. Provident, atque?</h4>
            <p className='text-[20px] font-semibold ' > +91 9876543434</p>
            <p className='text-[20px] font-semibold text-center'>satishdewasi101@gmail.com</p>
            
            <div className=' mt-2 md:mt-12 w-[98%] h-[90px] bg-[#7659e5] flex items-center justify-between rounded-md' >
                
                {card}
                 
            </div>

        </div>
         
    </div>
  )
}

export default Home