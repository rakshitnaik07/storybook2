import React from "react";
import "./Resto.css";
import biscuit from "./imges/Biscuit_Susu.png";
import krosang from "./imges/Krosang.png";
import strawberry from "./imges/Strawberry.png";
import healthy from "./imges/S_Kids_Meal.png";
import mango from "./imges/Mangoo_Milk.png";
import smoothie from "./imges/Smoothie_Berry.png";
import rainbow from "./imges/Rainbow_Cupcake.png";
import mie from "./imges/Mie_Gocengan.png";
import filter from "./imges/Filter.png";
import minus from "./imges/Minus.png";
import plus from "./imges/Plus.png";
import Tomato from "./imges/Tomato.png";
import Japanes from "./imges/Japanes.png";
import Avocado from "./imges/Avocado.png";
import Lettuce_Stuff from "./imges/Lettuce_Stuff.png";

const menu = () => {
  return (
    <div className="container">
      <div className="food-heading">
        <h1>Special Discount Today</h1>
        <span>
          Ends in <a href="">12:10:09</a>
        </span>
      </div>
      <div className="head-box">
        <div className="head-item">
          <img src={Tomato} alt="Biscuit Mama with Susu" />
          <h2>Tomato with Tofu Salad</h2>
          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">12%</a>
                <p>Rp 500</p>
              </span>
              <h4> Rp 250</h4>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="head-item">
          <img src={Japanes} alt="Krosang Thats It" />
          <h2>Japanese Chiken Gyoze</h2>

          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 500</p>
              </span>
              <h4> Rp 300</h4>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" width={10}/>
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="head-item">
          <img src={Avocado} alt="Krosang Thats It" />
          <h2>2pcs of Amazing Avocado</h2>

          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 900</p>
              </span>
              <h4> Rp 200</h4>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="head-item">
          <img src={Lettuce_Stuff} alt="Biscuit Mama with Susu" />
          <h2>Lettuce with Stuff</h2>
          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 1000</p>
              </span>
              <h4> Rp 500</h4>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>

      <div className="food-heading">
        <h1>Explore Our Best Menu</h1>
        <p>View All</p>
      </div>
      <div className="categories">
        <button className="active">All</button>
        <button>Main Course</button>
        <button>Appetizer</button>
        <button>Dessert</button>
        <button>Side Dishes</button>
        <button>Beverages</button>
        <button>Kids</button>
        <div className="filter-image">
          <div className="image">
            <img src={filter} alt="" />
          </div>
          <button className="filter">Filter</button>
        </div>
      </div>

      <div className="menu-grid">
        <div className="menu-item">
          <img src={biscuit} alt="Biscuit Mama with Susu" />
          <h2>toast biscuit with</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 100,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={krosang} alt="Krosang Thats It" />
          <h2>chicken bread </h2>

          <div className="foods">
            <div className="food-rate">
              <p>Price per portion </p>
              <h2>Rp 250.00</h2>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={strawberry} alt="Strawberry Float" />
          <h2>Strawberry Float</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 450,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>
          </div>
        </div>

          
        
     
  );
};

export default menu;
