import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";

// Styles
import styles from "./Store.module.css";

// Redux
import { fetchProducts } from "../../Redux/products/productsAction";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "./Product";
import Loading from "../loading/Loading";

const Store = ({ apiURL }) => {

  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    window.location.href.split("/")[3] === "all" ?
    dispatch(fetchProducts(`https://dummyjson.com/products?limit=10&skip=${pageNumber}&select`)) :
    dispatch(fetchProducts(apiURL))
    window.scrollTo(0,0)
  }, [pageNumber]);

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsState);

  const handlePageClick = (data) => {
    setPageNumber(
      data.selected === 0 ? 0 :
      data.selected === 1 ? 10 :
      data.selected === 2 ? 20 :
      data.selected === 3 ? 30 :
      data.selected === 4 ? 40 :
      data.selected === 5 ? 50 :
      data.selected === 6 ? 60 :
      data.selected === 7 ? 70 :
      data.selected === 8 ? 80 :
      data.selected === 9 && 90 
    )
  }

  return (
    <section className={styles.Store}>
      <div className="container">
        <div className={styles.content}>
          {productsData.loading || productsData.products.length === 0 ? (
            <Loading />
          ) : (
            productsData.products.products.map((product) => (
              <Product key={product.id} productsData={product} />
            ))
          )}
        </div>
        {window.location.href.split("/")[3] === "all" && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        )}
      </div>
    </section>
  );
};

export default Store;
