import "./Navbar.css"
import {BiMenu} from "react-icons/bi"
export const Navbar = ()=>{
return<>
<div className="flex border-b-2 border-gray-200 ">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfafjDTFh7LZPeAKd5zU2Cr1J3QG6st80iAeX_9xMVr6A-yZaz0oiBdx0KotIQ2h4Ah0s&usqp=CAU" className="m-2 h-14"/>
<div className="hidden lg:flex">
<button className=" w-28 bg-slate-300 hover:text-teal-500 hover:underline">
Shop
</button>
<button className=" w-28 bg-slate-300 hover:text-teal-500 hover:underline">
How it works
</button>
<button className=" w-28 bg-slate-300 hover:text-teal-500 hover:underline">
play in 4
</button>
<button className=" w-36 bg-slate-300 hover:text-teal-500 hover:underline">
The Shopping app
</button>
</div>
<div className="fixed right-0 m-2 ">
<button className="border-2 m-3 rounded-2xl w-20 hover:bg-black hover:text-white pb-1 border-black">
    Log in
</button>
<button className="border-2 hidden md:inline-block m-3 rounded-2xl w-28 bg-black text-white hover:bg-white hover:text-black pb-1 border-black">
    Get the app
</button>
<button>
<BiMenu />
</button>
</div>
</div>
</>
}