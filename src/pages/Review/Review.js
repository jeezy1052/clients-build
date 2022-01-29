import React from 'react'
import { useForm } from 'react-hook-form'

const Review = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      firstName: '',
      strainName: ''
    }
  });
  console.log(errors)
  return (
    <div className=" bg-green-100 w-100 h-screen grid gap-8 grid-cols-2 grid-rows-1 justify-items-center justify-center ">
    <div className="text-center md:max-w-lg p-5">
      <h1  className="text-4xl font-bold font-[Poppins] text-green-900 mb-2">Leave a Review Today</h1>
      <h2  className="text-3xl font-bold font-[Poppins] text-green-900 mb-2">Tell us what you think.</h2>
      <p className="text-gray-500 ">We have revolutionized the storage system. No more trying to remember what was. We have a database full of the best reviews</p>
      <button>Leave a Review</button>
    </div>
    <div>
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  onSubmit={handleSubmit((data) => {
    console.log(data)
  })}
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
        Username
      </label>
      <input

      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
      {...register("firstname", {required: "This is required"})}

      />
    </div>
    <p>{errors.firstname?.message}</p>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="strainName">
        Strain Name
      </label>
      <input

      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="strainName" type="text" placeholder="Username"
      {...register("strainName",{required: "This is required"})}
      />
      <p>{errors.strainName?.message}</p>
     
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="help">
        Password
      </label>
    
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="help" type="text" placeholder="rating"
      {...register('help', {required: "This is required", minLength: 4, message: "Min length is 4"})}
       />     
      <p>{errors.firstName?.message}</p>
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-green-800 hover:bg-green-200 text-white hover:text-green-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-green-800 hover:text-green-800" href="#">
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
