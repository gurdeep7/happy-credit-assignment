import axios from "axios"
import { useEffect, useState } from "react"

export const Product = ()=>{
const [products, setProducts] = useState([])
    function handleChange(event) {
        let value =event.target.value
       if(value == "all"){
        axios.get("https://klarna-clone.herokuapp.com/product")
        .then(res => { 
        setProducts(res.data)
        }) 
       }
       else{
        axios.get("https://klarna-clone.herokuapp.com/product")
        .then(res => { 
            var arr = res.data
          arr.sort(function(a,b){
            if(a.title< b.title) { return -1; }
            if(a.title> b.title) { return 1; }
            return 0;
          })
          setProducts(arr)
            }) 
       }
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
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-6">
{products?.map((pr)=>{
    return <div className="m-5 relative" >
            <img src={pr.product_img} alt={pr.title} />
            <p style={{fontWeight:"bolder"}}>{pr.title}</p>
            <p>{pr.tag}</p>
            <div className="absolute text-white bottom-16 text-bold z-10" >
            <p className="text-5xl">{pr.offer}</p>
            <p className="text-2xl">{pr.percentage}</p>
            </div>
        </div>
})}
        </div>
        </>
    )
}