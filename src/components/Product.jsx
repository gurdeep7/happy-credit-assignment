import axios from "axios"
import { useEffect, useState } from "react"

export const Product = ()=>{
const [products, setProducts] = useState([])
    function handleChange(event) {
        let value =event.target.value
        console.log(value)
      }
    
      useEffect(()=>{
        axios.get("https://klarna-clone.herokuapp.com/product")
        .then(res => { 
        setProducts(res.data)
        })
        },[])
    return(
        <>
        <div>
            <input type="text" className="w-full h-12 text-2xl border-b-2 border-black focus:border-0" placeholder="Search..."/>
        </div>
        <div>
        <select onChange={handleChange} className="absolute right-0 border-2 mt-3 border-blue-400">
                <option value="all">Feature</option>
                <option value="atoz">A-Z</option>
                <option value="all">Newest</option>
               
            </select>
        </div>
        <div className="grid grid-cols-3">
{products?.map((el)=>{
    console.log(el)
    return <div >
            <img src={el.product_img} alt={el.title} />
            <p style={{fontWeight:"bolder"}}>{el.title}</p>
            <p>{el.tag}</p>
            <div className="offer" >
            <p>{el.offer}</p>
            <p>{el.percentage}</p>
            </div>
        </div>
})}
        </div>
        </>
    )
}