import { React, useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";
import { AiFillFilter } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import Modal from "../modal/Modal";
// import FilterModal from "../modal/FilterModal";
function Shop() {
  const { products } = useContext(ProductContext);
  const [modal, setModal] = useState([false, false]);
  console.log(modal);
  return (
    <div className="shop-container">
      <div className="shop-container-header">
        <p>{products.length} products</p>
        <div className="filter-sort-container">
          <div
            className="filter-container"
            onClick={() => {
              setModal([!modal[0], false]);
            }}
          >
            <AiFillFilter />
            <p>Filter</p>
            {modal[0] === true && <Modal modal={modal} />}
          </div>
          <div
            className="sort-container"
            onClick={() => {
              setModal([false, !modal[1]]);
            }}
          >
            <BiSortAlt2 />
            <p>Sort</p>
            {modal[1] === true && <Modal modal={modal} />}
          </div>
        </div>
      </div>
      <div className="shop-container-body">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
