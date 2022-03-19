import "./Navbar.css"
import {BiMenu} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"
export const Navbar = ()=>{
return<>
<div className="flex fixed border-b-2 bg-white border-gray-200 w-full font-sans z-10">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfafjDTFh7LZPeAKd5zU2Cr1J3QG6st80iAeX_9xMVr6A-yZaz0oiBdx0KotIQ2h4Ah0s&usqp=CAU" className="m-2 h-14"/>
<div className="hidden font-extrabold lg:flex">
<button className=" w-28 font-bold bg-slate-300 hover:text-teal-500 hover:underline dropdown">
Shop
<div className="absolute hidden bg-white drop-content  grid-cols-3 mt-6 w-screen shadow-2xl">
<div className="w-full">
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Deals</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Trends</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Klarna Stores</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Brower Extenison</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">In Store</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Rewards club</div>
</div>
<div className="w-full"> 
<div className="h-12 text-black hover:text-teal-500 text-left font-normal italic pl-20">Categories</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Auto</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Beauty</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Black owned business</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Clothes and fashion</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Electronics</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Home</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Luxury</div>
    <div className="h-12 font-bold text-black hover:text-teal-500 text-left text-2xl pl-20">Toys and Entertainment</div>
    <div className="h-12 font-semibold flex text-teal-500 text-left text-xl pl-20">View all <AiOutlineArrowRight className="ml-2 mt-1" /></div>
</div>
<div className="w-full">

<div className="h-12 text-black hover:text-teal-500 text-left font-normal italic pl-20">Featured Stores</div>
    <div className="h-12 font-normal text-black hover:text-teal-500 text-left text-2xl pl-20">Bed Bath And beyond</div>
    <div className="h-12 font-normal text-black hover:text-teal-500 text-left text-2xl pl-20">Macy's</div>
    <div className="h-12 font-normal text-black hover:text-teal-500 text-left text-2xl pl-20">Sephoria</div>
    <div className="h-12 font-normal text-black hover:text-teal-500 text-left text-2xl pl-20">H&M</div>
    <div className="h-12 font-semibold flex text-teal-500 text-left text-xl pl-20">View all <AiOutlineArrowRight className="ml-2 mt-1" /></div>
</div>
</div>
</button>
<button className=" w-28 font-bold bg-slate-300 hover:text-teal-500 hover:underline">
How it works
</button>
<button className=" w-28 font-bold bg-slate-300 hover:text-teal-500 hover:underline">
play in 4
</button>
<button className=" w-36 font-bold bg-slate-300 hover:text-teal-500 hover:underline">
The Shopping app
</button>
<button className=" w-28 font-bold bg-slate-300 hover:text-teal-500 hover:underline">
Help
</button>
</div>
<div className="fixed right-0 m-2 bg-slate-200  ">
<button className="border-2 relative align-top m-3 rounded-2xl w-20 hover:bg-black hover:text-white pb-1 border-black">
    Log in
</button>
<button className="border-2 hidden m-3 lg:inline-block rounded-2xl w-28 bg-black text-white hover:bg-white hover:text-black pb-1 border-black">
    Get the app
</button>

{/* Hamburger menu for mobile screen */}
<button className="inline-block relative p-3 lg:hidden pb-1 hamburger">
<BiMenu className="text-4xl block" />
<div className="absolute hidden bg-white right-0 mt-3 w-96 hamburger-content shadow-2xl">
<div className="h-20 font-bold text-black hover:text-teal-500 mt-3 text-3xl ">Shop</div>
<div className="h-20 font-bold text-black hover:text-teal-500  text-3xl ">How it works</div>
<div className="h-20 font-bold text-black hover:text-teal-500  text-3xl ">Play in 4</div>
<div className="h-20 font-bold text-black hover:text-teal-500  text-3xl ">The shopping help</div>
<div className="h-20 font-bold text-black hover:text-teal-500  text-3xl ">Help</div>

</div>
</button>
</div>
</div>
</>
}