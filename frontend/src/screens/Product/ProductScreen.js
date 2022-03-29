import { StoriesStyle } from './stylem.js'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
 const ProductScreen = () => {
   
  
  const [product, setProduct] = useState({})
  let { id } = useParams()

  useEffect(() => {
     
    
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
        
      })
  }, [id])


  
    return (
     
      
        <> 
           <StoriesStyle>
           <div>
              
                <h1>{product.name}</h1>
                <h4>{product.description}</h4>
               
            

            </div>
          </StoriesStyle>
</> 
    )
}

export default ProductScreen
