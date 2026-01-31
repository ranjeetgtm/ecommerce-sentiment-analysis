import React from "react";
import "./SentimentCard.css";

export default function SentimentCard({ sentiment, value }) {
  let color = "#ccc";
  if (sentiment === "positive") color = "#16a34a";
  else if (sentiment === "negative") color = "#ef4444";
  else if (sentiment === "neutral") color = "#f59e0b";

  return (
    <div className="sentiment-card" style={{ borderColor: color }}>
      <h4 className={`sentiment-title ${sentiment}`}>{sentiment.toUpperCase()}</h4>
      <p className="sentiment-value">{value}%</p>
    </div>
  );
}
