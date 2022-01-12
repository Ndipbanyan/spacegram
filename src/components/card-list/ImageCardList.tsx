import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../card/ImageCard"
import './index.css'
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
 const [data,setData]=useState<IProp[] | []>([])
 const [loading,setLoading]=useState(true)
 const [error,setError]=useState(false)

 

 const baseUrl='https://api.nasa.gov'
 const apiKey=process.env.REACT_APP_SECRET_CODE

 const fetchData=()=>{
     const url=`${baseUrl}/mars-photos/api/v1/rovers/curiosity/photos?sol=120&page=1&api_key=C8cTufGJGsXrPM8ASRLbqC8KrQUkGaOlIsYfUaI5`
     axios.get(url)
          .then(response=>{
            const result:IProp[]=response.data.photos
            setData(result)
            setLoading(false)
            })
          .catch((err)=>{
              setLoading(false)
              setError(true)
          })
        
 }

useEffect(()=>{fetchData()},[])

const render=()=>{
    const jsx=loading?
    <h1 className="loading">Loading...</h1>:error?
    <h1 className="loading">Something went wrong...</h1>:data.length> 0?
    (<ul>
        {data.map((item:IProp)=>
       { return (<ImageCard key={item.id} {...item}/>)}
            )}
        
    </ul>)
    :null
    return jsx
}

    return (<>
    
        {render()}
    
    </>
        
    )
}

export default ImageCardList
