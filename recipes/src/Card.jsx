import { useState, useEffect } from 'react';
import './App.css';
import styles from './Card.module.css';

const Card = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=chicken%20soup';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_REACT_API_KEY,
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        console.log(data);
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data.length === 0) return <div>No data available</div>;
  return (
    <div>
   {data.map((recipe) => {
      if (!recipe.name || !recipe.description) {
        console.warn(`Recipe is missing name or description: ${recipe}`);
        return null;
      }
      return (
        <div className={styles.cards} key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </div>
      );
    })}
  </div>
)

}
export default Card;