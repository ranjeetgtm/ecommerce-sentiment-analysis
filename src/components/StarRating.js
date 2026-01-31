import React from "react";
import "./StarRating.css";

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < fullStars ? "full" : "empty"}>★</span>
      ))}
    </div>
  );
}
