import React, { useState, useEffect } from 'react';
import './App.css';

const NewsItem = ({ image, alt, title, description, link }) => {
  return (
    <div className="news-item">
      <img src={image} alt={alt} className="news-image" />
      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Читать далее...</a>
      </div>
    </div>
  );
};

const App = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/data/newsData.json')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <div className="news-container">
      {newsData.map((news) => (
        <NewsItem
          key={news.id}
          image={news.image}
          alt={news.alt}
          title={news.title}
          description={news.description}
          link={news.link}
        />
      ))}
    </div>
  );
};

export default App;