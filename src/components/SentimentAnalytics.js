import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import "./SentimentAnalytics.css";

export default function SentimentAnalytics({ products }) {
  // Overall sentiment counts
  const overall = { positive: 0, neutral: 0, negative: 0 };
  products.forEach(p => {
    overall.positive += p.sentiment.positive;
    overall.neutral += p.sentiment.neutral;
    overall.negative += p.sentiment.negative;
  });

  // Data for line chart (Sentiment over time example)
  const lineData = products.map((p, idx) => ({
    product: p.name,
    Positive: p.sentiment.positive,
    Neutral: p.sentiment.neutral,
    Negative: p.sentiment.negative,
  }));

  // Data for pie chart
  const pieData = [
    { name: "Positive", value: overall.positive },
    { name: "Neutral", value: overall.neutral },
    { name: "Negative", value: overall.negative },
  ];

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

  // Extract top keywords from reviews (basic)
  const allReviews = products.flatMap(p => p.reviewsList.map(r => r.comment.toLowerCase().split(" ")));
  const wordCounts = {};
  allReviews.flat().forEach(word => {
    if (word.length > 3) { // ignore very short words
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  });
  const topKeywords = Object.entries(wordCounts)
    .sort((a,b) => b[1]-a[1])
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));

  return (
    <section className="sentiment-analytics">
      <h2>📊 Sentiment Analytics</h2>

      {/* Overall Sentiment Cards */}
      <div className="sentiment-cards-overall">
        <div className="card positive">
          <h3>Positive</h3>
          <p>{overall.positive}</p>
        </div>
        <div className="card neutral">
          <h3>Neutral</h3>
          <p>{overall.neutral}</p>
        </div>
        <div className="card negative">
          <h3>Negative</h3>
          <p>{overall.negative}</p>
        </div>
      </div>

      {/* Sentiment Over Time Line Chart */}
      <div className="chart-container">
        <h3>Sentiment Over Products</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Positive" stroke="#10b981" />
            <Line type="monotone" dataKey="Neutral" stroke="#f59e0b" />
            <Line type="monotone" dataKey="Negative" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Distribution Pie Chart */}
      <div className="chart-container">
        <h3>Overall Sentiment Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" label>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Keywords */}
      <div className="keywords-section">
        <h3>Top Keywords from Reviews</h3>
        <ul>
          {topKeywords.map((k, i) => (
            <li key={i}>{k.word} ({k.count})</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
