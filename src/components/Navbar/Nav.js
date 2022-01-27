import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa'
import { FaLine} from 'react-icons/fa'


const Nav = () => {
	let Links = [
		{name:"Home", link:"/"},
		{name:"Review", link:"/review"},
		{name:"Database", link:"/database"}
	]

	

  return (
    <div className="shadow-md w-full top-0 left-0">
			<div className="md:flex items-center justify-between bg-green-900 py-4 md:px-10 px-7">
				<div className="flex font-bold text-2xl cursor-pointer items-center font-[Poppins]">
					<span className="text-3xl mr-1 pt-2">
						<FaBeer className="text-green-300" />
					</span>
					<h6 className="text-green-100 pt-1">Hypothetical  Medical</h6>
				</div>
				<div  className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden">
					<FaLine className='text-green-100'  />
				</div>
					<ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in'>
						{Links.map((Link) => (
							<li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
							<a href={Link.link} className="text-green-100 hover:text-green-300 duration-500">{Link.name}</a>
							</li>
						))}
					</ul>
			 		
			</div>
    </div>
  )
}

export default Nav
