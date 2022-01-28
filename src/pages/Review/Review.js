import React from 'react'

const Review = () => {
  return (
    <div className=" bg-green-200 w-100 h-screen grid gap-8 grid-cols-2 grid-rows-1 justify-items-center justify-center ">
    <div className="text-center md:max-w-lg p-5">
      <h1  className="text-4xl font-bold font-[Poppins] text-green-900 mb-2">Leave a Review Today</h1>
      <h2  className="text-3xl font-bold font-[Poppins] text-green-900 mb-2">Tell us what you think.</h2>
      <p className="text-gray-500 ">We have revolutionized the storage system. No more trying to remember what was. We have a database full of the best reviews</p>
      <button>Leave a Review</button>
    </div>
    <div>
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="strainname">
        Strain Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="strainname" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="help">
        Password
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="help" type="text" placeholder="rating" />     
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    </div>
    </div>
  )
}

export default Review
