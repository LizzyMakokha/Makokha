import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetProduct = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [filteredProducts, setFilteredproducts] = useState([]);
  const [searchQuery, setSearchquery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc"); // default to descending

  const productsPerPage = 12;
  const navigate = useNavigate();

  const getproducts = async () => {
    setLoading("Please wait...");
    try {
      const response = await axios.get("https://makokha1.pythonanywhere.com/api/get_product_details");
      setProduct(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    if (!products) return;

    // Sort based on selected order
    const sorted = [...products].sort((a, b) =>
      sortOrder === "asc"
        ? a.product_cost - b.product_cost
        : b.product_cost - a.product_cost
    );

    // Apply search filter
    const filtered = sorted.filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredproducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, products, sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const img_url = "https://makokha1.pythonanywhere.com/static/images/";
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='container mt-4'>
      {/* Search + Sort Controls */}
      <div className='row mb-3'>
        <div className='col-md-6 mb-2'>
          <input
            type="text"
            placeholder="Search products..."
            className="form-control shadow-sm p-3 bg-success text-white"
            value={searchQuery}
            onChange={(e) => setSearchquery(e.target.value)}
          />
        </div>
        <div className='col-md-3'>
          <select
            className="form-select shadow-sm"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="desc">Sort: Price High to Low</option>
            <option value="asc">Sort: Price Low to High</option>
          </select>
        </div>
      </div>

      {loading && <div className="alert alert-info text-center">{loading}</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Product Cards */}
      <div className='row'>
        {currentProducts.map((product, index) => (
          <div className='col-md-3 mb-4' key={index}>
            <div className='card shadow h-100'>
              <img src={img_url + product.product_photo} alt="Product" className='card-img-top' />
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{product.product_name}</h5>
                <p className='card-text text-muted'>{product.product_description}</p>
                <p className='text-warning fw-bold'>Ksh {product.product_cost}</p>
                <button
                  className='btn btn-dark mt-auto'
                  onClick={() => navigate('/MpesaPayment', { state: { product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='d-flex justify-content-center mt-4'>
        <button
          className='btn btn-outline-primary mx-3'
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='align-self-center'>Page {currentPage} of {totalPages}</span>
        <button
          className='btn btn-outline-primary mx-2'
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GetProduct;
