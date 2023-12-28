import React from 'react'
import {Button} from "@nextui-org/react";
const Hero = () => {
  return (
    <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
    </div>
  </div>
</div> 
  )
}

export default Hero