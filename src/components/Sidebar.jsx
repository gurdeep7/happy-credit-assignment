export const Sidebar = () =>{


    return(<div className="hidden lg:block">
        <div className="text-gray-600 border-b-2 border-gray-600">
    <div className="text-2xl font-bold">Categories</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-5">All</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Babies and Kids</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Clothing and apparel</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Computers and accesories</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Consumer Electronics</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Gifts</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Health and beauty</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Holidays and oceans</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Household</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2">Media</div>
    <div className="text-xl hover:text-gray-900 hover:cursor-pointer mt-2 mb-5 underline">See All 15</div>
    </div>
    <div className="mt-5">
    <div className="text-2xl font-bold">Filter</div>
    <div className="mt-3 border-b-2 border-gray-600">
<div className="text-xl font-bold">Type</div>
<div className="flex">
  
<input className="w-5 h-5 mt-3 mr-2 form-checkbox border-2 border-gray-400 rounded-md text-teal-500" type="checkbox" id="onlyCoupons" name="onlyCoupons" value="onlyCoupons" />
<label for="onlyCoupons" className="text-l mt-2">Only Coupons</label>
</div>
<div className="flex">
<input className="w-5 h-5 mt-3 mr-2 form-checkbox border-2 border-gray-400 rounded-md text-teal-500" type="checkbox" id="exclusive" name="exclusive" value="exclusive" />
<label for="onlyCoupons" className="text-l mt-2">Exclusives</label>
</div>
<div className="flex">
<input className="w-5 h-5 mt-3 mr-2 mb-5 form-checkbox border-2 border-gray-400 rounded-md text-teal-500 " type="checkbox" id="bogo" name="bogo" value="bogo" />
<label for="onlyCoupons" className="text-l mt-2">Bogo and more</label>
</div>
    </div>
    <div className="mt-3 border-b-2 border-gray-600">
<div className="text-xl font-bold">Discount</div>
<div className="flex">
<input className="w-5 h-5 mt-3 mr-2 form-checkbox border-2 border-gray-400 rounded-md text-teal-500" type="checkbox" id="zfn" name="zfn" value="zfn" />
<label for="onlyCoupons" className="text-l mt-2">0-49% off</label>
</div>
<div className="flex">
<input className="w-5 h-5 mt-3 mr-2 form-checkbox border-2 border-gray-400 rounded-md text-teal-500" type="checkbox" id="5to8" name="5to8" value="5to8" />
<label for="onlyCoupons" className="text-l mt-2">50-80% off</label>
</div>

    </div>
    </div>
    </div>)
}