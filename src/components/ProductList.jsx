import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10; // Number of products per page
  const API_URL = `${process.env.REACT_APP_BASE_URL}products?page=${page}&limit=${limit}`;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setLoading(false);
      setProducts(response?.data?.data || []);
      setTotalProducts(response?.data?.total || 1);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="h-100">
      <h2 className="p-4 ps-0">Products List</h2>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center w-100">
        <div className="table-responsive w-100" style={{ overflowX: "auto" }}>
          <table border="1" className="w-100 table table-striped">
            <thead>
              <tr>
                <th className="text-nowrap">Product Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th className="text-nowrap">Stock Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product?.productName || ""}</td>
                  <td>{product?.description || ""}</td>
                  <td>₹{product?.price || ""}</td>
                  <td>{product?.stockQuantity || ""}</td>
                  <td>{product.category?.categoryName || "No Category"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} of {Math.ceil(totalProducts / limit)} </span>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(totalProducts / limit)))}
          disabled={page >= Math.ceil(totalProducts / limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
