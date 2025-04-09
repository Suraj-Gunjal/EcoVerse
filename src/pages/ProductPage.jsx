import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../data';
import { updateAnimations } from '../animations';

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate loading the product data
    setLoading(true);
    
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === parseInt(productId));
    
    // Set a timeout to simulate network request
    const timer = setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
    
    // Update animations after content loads
    if (foundProduct) {
      updateAnimations();
    }
    
    return () => clearTimeout(timer);
  }, [productId]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Render stars for ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="star full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </span>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="star half">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="none" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#halfStarGradient)" />
          </svg>
        </span>
      );
    }
    
    // Add empty stars to make total of 5
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="star empty">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </span>
      );
    }
    
    return stars;
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading product information...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <Header />
        <div className="container">
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="product-page">
      <Header />
      
      <main>
        <div className="breadcrumb" data-scroll-section>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#products">Products</Link></li>
              <li className="active">{product.name}</li>
            </ul>
          </div>
        </div>
        
        <section className="product-detail" data-scroll-section>
          <div className="container">
            <div className="product-details" data-scroll>
              <div className="product-image-gallery">
                <div className="main-image">
                  <img src={product.image} alt={product.name} />
                  <span className="eco-badge">Eco-Friendly</span>
                </div>
              </div>
              
              <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                
                <div className="product-meta">
                  <div className="product-rating">
                    <div className="stars">{renderStars(product.rating)}</div>
                    <span className="rating-value">{product.rating.toFixed(1)}</span>
                    <span className="reviews-count">(24 reviews)</span>
                  </div>
                  
                  <div className="product-sku">
                    <span>SKU: </span>ECO-{product.id.toString().padStart(4, '0')}
                  </div>
                </div>
                
                <div className="product-price">
                  <span className="current-price">₹{product.price}</span>
                  <span className="original-price">₹{Math.round(product.price * 1.2)}</span>
                  <span className="discount">Save 20%</span>
                </div>
                
                <div className="product-actions">
                  <div className="quantity-selector">
                    <button onClick={decrementQuantity} className="quantity-btn minus">-</button>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={handleQuantityChange} 
                      className="quantity-input"
                    />
                    <button onClick={incrementQuantity} className="quantity-btn plus">+</button>
                  </div>
                  
                  <button className="add-to-cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 20a1 1 0 100-2 1 1 0 000 2z"></path>
                      <path d="M20 20a1 1 0 100-2 1 1 0 000 2z"></path>
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
                    </svg>
                    Add to Cart
                  </button>
                  
                  <button className="wishlist-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="eco-benefits">
                  <h3>Eco Benefits</h3>
                  <ul>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Reduces plastic waste
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Sustainable materials
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Biodegradable packaging
                    </li>
                  </ul>
                </div>
                
                <div className="product-shipping">
                  <div className="shipping-info">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    <span>Free delivery for orders above ₹999</span>
                  </div>
                  
                  <div className="return-info">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"></path>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                    </svg>
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="product-tabs" data-scroll>
              <div className="tabs-nav">
                <button 
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="description-tab">
                    <p>{product.description}</p>
                    <p>
                      At ECO-verse, we're committed to providing products that are not only 
                      functional and stylish but also environmentally responsible. This {product.name.toLowerCase()} 
                      is part of our effort to make sustainable living accessible to everyone.
                    </p>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div className="features-tab">
                    <ul className="features-list">
                      {product.features.map((feature, index) => (
                        <li key={index}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="reviews-tab">
                    <div className="reviews-summary">
                      <div className="average-rating">
                        <h3>{product.rating.toFixed(1)}</h3>
                        <div className="stars">{renderStars(product.rating)}</div>
                        <p>Based on 24 reviews</p>
                      </div>
                      
                      <div className="rating-breakdown">
                        <div className="rating-bar">
                          <span className="stars-label">5 Stars</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: '70%' }}></div>
                          </div>
                          <span className="count">17</span>
                        </div>
                        <div className="rating-bar">
                          <span className="stars-label">4 Stars</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: '20%' }}></div>
                          </div>
                          <span className="count">5</span>
                        </div>
                        <div className="rating-bar">
                          <span className="stars-label">3 Stars</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: '8%' }}></div>
                          </div>
                          <span className="count">2</span>
                        </div>
                        <div className="rating-bar">
                          <span className="stars-label">2 Stars</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: '0%' }}></div>
                          </div>
                          <span className="count">0</span>
                        </div>
                        <div className="rating-bar">
                          <span className="stars-label">1 Star</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: '0%' }}></div>
                          </div>
                          <span className="count">0</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="review-list">
                      <div className="review-item">
                        <div className="reviewer-info">
                          <img src="https://placehold.co/40?text=A" alt="Avatar" />
                          <div>
                            <h4>Amit K.</h4>
                            <div className="stars">{renderStars(5)}</div>
                            <span className="review-date">March 15, 2025</span>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I've been using this product for a month now and I'm very impressed with the quality.
                            It's durable, functional, and truly eco-friendly. Highly recommended!
                          </p>
                        </div>
                      </div>
                      
                      <div className="review-item">
                        <div className="reviewer-info">
                          <img src="https://placehold.co/40?text=S" alt="Avatar" />
                          <div>
                            <h4>Sneha R.</h4>
                            <div className="stars">{renderStars(4)}</div>
                            <span className="review-date">February 28, 2025</span>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            Great product that serves its purpose well. The only reason I'm giving 4 stars
                            instead of 5 is that the color was slightly different than what I expected.
                            Otherwise, it's perfect!
                          </p>
                        </div>
                      </div>
                      
                      <div className="review-item">
                        <div className="reviewer-info">
                          <img src="https://placehold.co/40?text=R" alt="Avatar" />
                          <div>
                            <h4>Rajesh M.</h4>
                            <div className="stars">{renderStars(5)}</div>
                            <span className="review-date">February 12, 2025</span>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            Absolutely love this product! The quality is exceptional and knowing that
                            I'm making a positive impact on the environment makes it even better.
                            ECO-verse has gained a loyal customer in me.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="load-more-reviews">Load More Reviews</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="related-products" data-scroll-section>
          <div className="container">
            <h2 data-scroll>You May Also Like</h2>
            <div className="related-products-slider" data-scroll>
              {products
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <div key={relatedProduct.id} className="related-product-card">
                    <Link to={`/products/${relatedProduct.id}`}>
                      <div className="related-product-image">

                      </div>
                                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                    
                    <div className="related-product-info">
                      <h3>{relatedProduct.name}</h3>
                      <div className="price">₹{relatedProduct.price}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductPage;
