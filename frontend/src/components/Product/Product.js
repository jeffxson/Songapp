import { StoriesStyle } from "./stylem.js";

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <StoriesStyle>
        <Link to={`/product/${product._id}`} className="card">
          <img src={product.image} variant="top" className="thumb" />
          <div className="article">
            <h1>How to Conduct Remote Usability Testing</h1>
          </div>
        </Link>
      </StoriesStyle>
    </>
  );
};

export default Product;
