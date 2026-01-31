import React from "react";
import ProductCard from "./ProductCard";
import "./LatestCollection.css";

export default function LatestCollection({ products, addToCart }) {
  return (
    <section className="latest-collection">
      <h2>🔥 Latest Collections</h2>
      <div className="latest-products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
