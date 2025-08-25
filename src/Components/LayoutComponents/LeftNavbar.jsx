import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    //   "id": 5,
    // "name": "Sports"
    return (
        <div>
            <h2 className="font-semibold text-xl text-[#403F3F] mb-5">All Category</h2>
            <div className="flex flex-col gap-3">
                {
                    categories.map(category =>
                    <button className="btn bg-base-300 border-none" key={category.id}>{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;