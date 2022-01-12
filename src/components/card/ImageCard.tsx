
import { useState } from 'react'
import { IProp } from '../card-list/ImageCardList'
import "./index.css"

const ImageCard = ({img_src,earth_date,camera}:IProp) => {
    const [liked,setLiked]=useState(false)
    const handleClick=()=>{
        setLiked(!liked)
    }
    return (
        <li >
            <div className='image-container'>
                <img src={img_src} alt={` taken with ${camera.full_name} on mars` } />
            </div>
            <div className="title">
                <p className="camera"><strong>{`${camera.name} - ${camera.full_name}`}</strong></p>
                <p className="date">{earth_date}</p>
            </div>
           <div className={`${liked?"press":""} btn`}>
               <button className={`${liked?"liked":"unliked"} `} onClick={handleClick}>{`${liked?"Unlike":"Like"}`}</button>
               <span >liked!</span>
            </div> 
        </li>
    )
}

export default ImageCard
