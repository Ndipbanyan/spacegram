import { useEffect, useState } from "react";
import ImageCard from "./ImageCard"

export interface IProp{
    id:string;
    img_src:string;
    earth_date:string;
    camera:{
        name:string;
        full_name:string;
    }
}

const ImageCardList = () => {
 const [data,setData]=useState([{ id:"",
    img_src:"",
    earth_date:"",
    camera:{
        name:"",
        full_name:"",
    }

 }])

useEffect(()=>{},[])

    return (
        <ul>
            {data.map((item:IProp)=>
           { return (<ImageCard key={item.id} {...item}/>)}
                )}
            
        </ul>
    )
}

export default ImageCardList
