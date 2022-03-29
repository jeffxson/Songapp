import { StoriesStyle } from './stylem.js'
import {  Link } from 'react-router-dom'


 const Trending = ({product}) => {

    return (
     
      
        <> 
           <StoriesStyle>
           <Link to={`/product/${product._id}`}>
         <h1>{product.name}</h1>
       </Link>
          </StoriesStyle>
</> 
    )
}

export default Trending
