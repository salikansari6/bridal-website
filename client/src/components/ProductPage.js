import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import "../styles/ProductPage.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";
import { formatCurrency } from "../utils";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/product/${id}`).then((res) => {
      setProduct(...res.data);
    });
  }, [id]);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setTriggerAnimation(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [triggerAnimation]);

  const dispatch = useDispatch();

  return (
    <div className="product-page">
      {product && (
        <>
          <ImageGallery
            triggerAnimation={triggerAnimation}
            setTriggerAnimation={setTriggerAnimation}
            images={product.imageURL}
          ></ImageGallery>
          <div className="product-detail">
            <p className="product-detail__name">{product.name}</p>
            <p className="product-detail__price">
              {formatCurrency(product.price)}
            </p>
            inclusive of all taxes
            <div className="product-detail__features">
              <div className="try-buy">
                <span>TRY</span>
                <p>Virtual Try and Buy</p>
              </div>
              <div className="exchange">
                <span>
                  <SwapHorizIcon fontSize="small" />
                </span>
                <p>Easy 7 days return and exchange</p>
              </div>
              <div className="no-contact">
                <span>
                  <NotInterestedIcon fontSize="small" />
                </span>
                <p>No contact delivery</p>
              </div>
              <div className="delivery">
                <span>
                  <LocalShippingIcon fontSize="small" />
                </span>
                <p>Vivahlounge delivered</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="product-page__buy">
            <div className="product-page__buy__buttons">
              <button
                onClick={() => {
                  setTriggerAnimation(true);
                  dispatch(addToCart(product));
                }}
              >
                Add to bag
                <LocalMallIcon fontSize="small" />
              </button>
              <Link to="/payment">
                <button>Buy Now</button>
              </Link>
              <div className="add-as-gift">
                <input type="checkbox" name="gift" id="gift" />
                <label htmlFor="gift">Add as gift</label>
              </div>
              <button>
                Wishlist
                <FavoriteIcon fontSize="small" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
