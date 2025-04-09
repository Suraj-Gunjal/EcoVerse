import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data";
import { updateAnimations } from "../animations";

function HomePage() {
  useEffect(() => {
    // Update animations when the component mounts
    updateAnimations();
  }, []);

  return (
    <div className="home-page">
      <Header />

      <main>
        <section className="hero" data-scroll-section>
          <div className="hero-content">
            <h1 data-scroll data-scroll-speed="1">
              Welcome to ECO-verse
            </h1>
            <p data-scroll data-scroll-speed="0.8">
              Sustainable living, one product at a time.
            </p>
            <button className="cta-button" data-scroll data-scroll-speed="0.6">
              Shop Now
            </button>
          </div>
        </section>

        <section className="intro" data-scroll-section>
          <div className="container">
            <h2 data-scroll data-scroll-delay="0.1">
              Hamara Mission
            </h2>
            <p className="hinglish-intro" data-scroll data-scroll-delay="0.2">
              ECO-verse mein hum sustainable aur eco-friendly products offer
              karte hain jo aapke lifestyle ko green banaye. Hamari team pure
              passion ke saath aisi products design karti hai jo environment ke
              liye acchi ho aur aapke ghar ko bhi beautiful banaye. ECO-verse ke
              saath, green living sirf ek choice nahi, balki ek lifestyle ban
              jati hai!
            </p>
          </div>
        </section>

        <section id="products" className="products-section" data-scroll-section>
          <div className="container">
            <h2 data-scroll>Our Eco-Friendly Products</h2>
            <p data-scroll>
              Discover our selection of handpicked sustainable products for
              everyday life.
            </p>

            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section" data-scroll-section>
          <div className="container">
            <h2 data-scroll>Why Choose Eco-Friendly?</h2>

            <div className="benefits-grid">
              <div className="benefit-card" data-scroll>
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Reduce Waste</h3>
                <p>
                  Our products are designed to minimize waste and environmental
                  impact.
                </p>
              </div>

              <div className="benefit-card" data-scroll>
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Healthier Living</h3>
                <p>
                  Products free from harmful chemicals and toxins for your
                  wellbeing.
                </p>
              </div>

              <div className="benefit-card" data-scroll>
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3>Support Sustainability</h3>
                <p>
                  Each purchase contributes to a more sustainable future for our
                  planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" data-scroll-section>
          <div className="container">
            <h2 data-scroll>About Us</h2>
            <div className="about-content">
              <div className="about-image" data-scroll data-scroll-speed="0.3">
                <img
                  src="story2.jpg"
                  alt="Our story"
                />
              </div>
              <div className="about-text" data-scroll>
                <p>
                  Founded in 2022, ECO-verse began with a simple mission: to
                  make eco-friendly products accessible, affordable, and
                  appealing to everyone. We believe that small changes in our
                  daily habits can lead to significant positive impacts on our
                  environment.
                </p>
                <p>
                  Our team of eco-enthusiasts sources and designs products that
                  not only reduce environmental impact but also bring joy and
                  functionality to your everyday life.
                </p>
                <button className="about-cta">
                  Learn More About Our Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="testimonials-section"
          data-scroll-section
        >
          <div className="container">
            <h2 data-scroll>What Our Customers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial" data-scroll>
                <div className="testimonial-content">
                  <p>
                    "I've been using the bamboo water bottle for months now and
                    I love it! Keeps my water cold all day and looks stylish
                    too."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://placehold.co/100?text=P" alt="Priya S." />
                  <div>
                    <h4>Priya S.</h4>
                    <p>Delhi</p>
                  </div>
                </div>
              </div>

              <div className="testimonial" data-scroll>
                <div className="testimonial-content">
                  <p>
                    "The solar power bank has been a game-changer for my hiking
                    trips. Reliable, durable, and eco-friendly!"
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://placehold.co/100?text=R" alt="Rahul M." />
                  <div>
                    <h4>Rahul M.</h4>
                    <p>Mumbai</p>
                  </div>
                </div>
              </div>

              <div className="testimonial" data-scroll>
                <div className="testimonial-content">
                  <p>
                    "I've replaced all my plastic kitchenware with bamboo
                    alternatives from ECO-verse. Great quality and customer
                    service!"
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://placehold.co/100?text=A" alt="Ananya P." />
                  <div>
                    <h4>Ananya P.</h4>
                    <p>Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" data-scroll-section>
          <div className="container">
            <h2 data-scroll>Contact Us</h2>
            <div className="contact-content">
              <div className="contact-form-container" data-scroll>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info" data-scroll>
                <div className="info-item">
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>
                      123 Green Lane, Eco Park
                      <br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@eco-verse.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
