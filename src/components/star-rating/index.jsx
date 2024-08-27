import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfstars = 5}) {

    return <div className="star-rating">
        {
            [...Array(noOfstars)].map((_,index)=> {
                return <FaStar
                key={index}
                onClick={}
                onMouseMove={}
                onMouseLeave={}/>
            })
        }

    </div>
}