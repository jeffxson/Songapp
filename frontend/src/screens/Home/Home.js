import { HomeStyle } from "./style.js";
import { MobileStyle } from "./stylem.js";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Header message="jh" />

      <HomeStyle>
        <div className="image">
          <div className="conainer1">
            <div className="boxer">
              <Link to={`/product}`}>
                <h1> Naija Party & Owanbe </h1>
              </Link>
            </div>
            <div className="boxer1">
              <Link to={`/product}`}>
                <h1> In the mood for some praise and worship </h1>
              </Link>
            </div>
            <div className="boxer2">
              <Link to={`/product}`}>
                <h1> Naija Party & Owanbe </h1>
              </Link>
            </div>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="band ">
            {products.map((product) => (
              <div key={product._id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        )}
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
