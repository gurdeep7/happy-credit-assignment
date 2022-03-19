import { Product } from "./Product"
import { Sidebar } from "./Sidebar"

export const Main = () =>{


    return(<div className="inline-block w-full mt-28 font-sans">
        <div className="text-5xl font-bold lg:m-10">
        All deals and coupons.
        <p className="text-lg font-normal mt-3">
        The best online deals and coupons, including Klarna exclusives, updated daily.
        </p>
        </div>
    <div className="w-1/4 inline-block align-top pl-10">
    <Sidebar />
    </div>
    <div className="w-3/4 inline-block align-top h-20">
<Product />
    </div>
    </div>)
}