import React from 'react'
import { FaBeer } from 'react-icons/fa'
import Button from './Button/Button'

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
					<ul className='md:flex md:items-center'>
						{Links.map((Link) => (
							<li key={Link.name} className="md:ml-8 text-xl">
							<a href={Link.link} className="text-green-100 hover:text-green-300 duration-500">{Link.name}</a>
							</li>
						))}
					</ul>
			 		<Button>
						 Get Started
					 </Button>
			</div>
    </div>
  )
}

export default Nav
