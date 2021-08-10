import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/App.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NewArrivals from "./NewArrivals";
import LandingPage from "./LandingPage";
import WeddingDresses from "./WeddingDresses";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import PaymentPage from "../components/Payment/PaymentPage";
import { CSSTransition } from "react-transition-group";
import { ShowChart } from "@material-ui/icons";

const App = () => {
  useEffect(() => {
    window.addEventListener(
      "load",
      () => {
        console.log("everything loaded");
      },
      [BrowserRouter]
    );

    //    window.document.getElementsByTagName('img').forEach(img =>{
    //     img.addEventListener("load",()=>{
    //         console.log("everything loaded")
    //     })
    //    })
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <Router>
      <CSSTransition
        in={showCart}
        timeout={500}
        classNames={"cart"}
        unmountOnExit={true}
        onExited={() => setShowCart(false)}
      >
        <Cart setShowCart={setShowCart} />
      </CSSTransition>

      <div>
        <Navbar showCart={showCart} setShowCart={setShowCart} />
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/newarrivals" component={NewArrivals}></Route>
          <Route path="/weddingdresses" component={WeddingDresses}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
