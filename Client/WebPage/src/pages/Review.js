import React from 'react';
import Cart from "./Cart";
import data from "./Ticket";


const Review = () => {
  return(
    <>
    <h1 classname ="text-center mt-3"> All Events</h1>
    <section classname= "py-4 container">
      <div className = "row justify-content-center">
        {data.productData.map((item ,index)=>{
          return(
            <Cart img={item.img} title={item.title} desc={item.desc} date ={item.date} price={item.price} key={index}/>
          )
        })}
      </div>
      
    </section>
    </>
  )
}
export default Review;
