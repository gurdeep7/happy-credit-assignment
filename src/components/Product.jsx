export const Product = ()=>{

    function handleChange(event) {
        let value =event.target.value
        console.log(value)
      }
    

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
        </>
    )
}