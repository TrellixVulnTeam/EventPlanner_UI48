import React from "react";
import {useCart} from "react-use-cart";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Cart = (props) => {
    // const {addevent} = useCart();
    return(
        <div className ="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow hidden h-100 shadow">
            <img src="" class="card-img-top"/>
            <div class="card-body" text-center>
            <h5 class="card-title">{props.date}</h5>
            <h5 class="card-title"> ${props.price}</h5>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <button class="btn btn-success">Add to Cart</button>
            </div>
</div>
        </div>
    )
}
export default Cart;
