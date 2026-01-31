import React from "react";
import "./Review.css";

export default function Review({ reviewer, comment, rating }) {
  const fullStars = Math.floor(rating);

  return (
    <div className="review-card">
      <div className="review-header">
        <strong>{reviewer}</strong>
        <span className="review-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < fullStars ? "full" : "empty"}>★</span>
          ))}
        </span>
      </div>
      <p className="review-comment">{comment}</p>
    </div>
  );
}