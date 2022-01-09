
import { IProp } from './ImageCardList'

const ImageCard = ({img_src,earth_date,camera}:IProp) => {
    return (
        <li className='container'>
            <div className='image-container'><img src={img_src} alt={` taken with ${camera.full_name} on mars` } /></div>
            <div className="title">
                <p className="camera"><strong>{`${camera.name} - ${camera.full_name}`}</strong></p>
                <p className="date">{earth_date}</p>
            </div>
            <button>Like</button>
        </li>
    )
}

export default ImageCard
