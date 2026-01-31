import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import SentimentCard from "../components/SentimentCard";
import Review from "../components/Review";
import LatestCollection from "../components/LatestCollection";
import SentimentAnalytics from "../components/SentimentAnalytics";
import ContactSection from "../components/ContactSection";

import blacktshirt from "../components/assets/blacktshirt.png";
import strippedshirt from "../components/assets/strippedshirt.png";
import greyhoodie from "../components/assets/greyhoodie.png";
import summerdress from "../components/assets/summerdress.png";
import denimjacket from "../components/assets/denimjacket.png";

import "./Home.css";

// Product data
const products = [
  {
    id: 1,
    name: "Black Tshirt",
    price: 49.99,
    rating: 4.5,
    reviews: 320,
    image: blacktshirt,
    sentiment: { positive: 70, neutral: 20, negative: 10 },
    reviewsList: [
      { reviewer: "Ranjit Gautam", comment: "Ramroo cha hai ekdam reasonable price ma quality nice cha", rating: 5 },
      { reviewer: "Bishal pandey", comment: "jhur cha manparena sabailai suggestion naligda hunxa haha", rating: 2 },
    ],
  },
  {
    id: 2,
    name: "Striped Shirt",
    price: 24.99,
    rating: 4.2,
    reviews: 168,
    image: strippedshirt,
    sentiment: { positive: 50, neutral: 30, negative: 20 },
    reviewsList: [
      { reviewer: "sandesh Bhandari", comment: "Loved this hoodie!", rating: 4 },
      { reviewer: "Sujan Bashyal", comment: "Very comfortable and cloth quality also nice", rating: 4 },
    ],
  },
  {
    id: 3,
    name: "Grey Hoodie",
    price: 59.99,
    rating: 4.6,
    reviews: 210,
    image: greyhoodie,
    sentiment: { positive: 80, neutral: 10, negative: 10 },
    reviewsList: [
      { reviewer: "Sagun Gautam", comment: "thikai xaa testo wow pani xaina ", rating: 3 },
      { reviewer: "Sanjay chudali", comment: "average xa ani price ni high .", rating: 2 },
    ],
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 39.99,
    rating: 4.4,
    reviews: 275,
    image: summerdress,
    sentiment: { positive: 60, neutral: 25, negative: 15 },
    reviewsList: [
      { reviewer: "Hari chalise", comment: "very very comfortable kei nasochi ligda hunxa ", rating: 5 },
      { reviewer: "Sugam Gautam", comment: "bbl xaa manparyoo ajai 1 set magaudai xuu ", rating: 4 },
    ],
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 19.99,
    rating: 4.1,
    reviews: 410,
    image: denimjacket,
    sentiment: { positive: 55, neutral: 30, negative: 15 },
    reviewsList: [
      { reviewer: "Beepin Bc", comment: "ramro cha ddheraii dherai", rating: 5 },
      { reviewer: "Anish chettri", comment: "Very comfortable.", rating: 4 },
    ],
  },
];

export default function Home({ cart, setCart }) {
  const [searchTerm, setSearchTerm] = useState(""); // state for search

  const addToCart = (p) => setCart([...cart, p]);

  // Filter products based on search term
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Section */}
      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="product-with-sentiment">
              <ProductCard product={p} addToCart={addToCart} />
              <div className="sentiment-cards">
                <SentimentCard sentiment="positive" value={p.sentiment.positive} />
                <SentimentCard sentiment="neutral" value={p.sentiment.neutral} />
                <SentimentCard sentiment="negative" value={p.sentiment.negative} />
              </div>
              <div className="reviews-section">
                {p.reviewsList &&
                  p.reviewsList.map((r, i) => <Review key={i} {...r} />)}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No products found
          </p>
        )}
      </section>

      {/* Other Sections */}
      <LatestCollection products={products.slice(0, 3)} addToCart={addToCart} />
      <SentimentAnalytics products={products} />
      <ContactSection />
    </div>
  );
}
