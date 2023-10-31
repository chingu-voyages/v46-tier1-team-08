// import { useState, useEffect } from 'react';
// //import './App.css';
// import styles from './Card.module.css';

// const Card = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chicken≈';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': import.meta.env.VITE_REACT_API_KEY,
//           'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error('API request failed');
//         }
//         const data = await response.json();
//         console.log(data);
//         setData(data.results);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
  

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (data.length === 0) return <div>No data available</div>;
//   return (
   
//         <div className={styles.cardGrid}>
//     <div className={styles.cardsContainer}>
//    {data.map((recipe) => {
//       if (!recipe.name || !recipe.description) {
//         console.warn(`Recipe is missing name or description: ${recipe}`);
//         return null;
//       }
//       return (
      
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage: `url(${recipe.thumbnail_url})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//           key={recipe.id}
//         >
//           <h2 className={styles.cardName}>{recipe.name}</h2>
//         </div>
       
 
//         // <div className={styles.cardGrid}>
//         // <div className={styles.cards}  style={{
//         //   backgroundImage: `url(${recipe.thumbnail_url})`,
//         //   height: '334px',
//         //   width: '242px',
//         //   backgroundSize: 'cover',
//         //   backgroundPosition: 'center',
//         // }} key={recipe.id}>
//         //   <h2 className={styles.cardName}>{recipe.name}</h2>
//         // </div>
//         // </div>
//       );
//     })}
//     </div>
//   </div>
// )

// }
// export default Card;
//-----------------------------------------------------------------------------------

// import { useState, useEffect } from 'react';
// import styles from './Card.module.css';
// import data from './data.json';
// import {CSSTransition} from 'react-transition-group';
import FlipCard from './FlipCard';


const Card = () => {
return(
  <FlipCard />
)
//   const [isLoading, setIsLoading] = useState(true);
//    //const [flip, setFlip] = useState(false);
//    const [showFront, setShowFront] = useState(true);
   //const cardRef = useRef(null);
 
//   useEffect(() => {
//     setIsLoading(false);
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//  
//   const recipes = data[0].results;
//   if (!recipes || recipes.length === 0) return <div>No data available</div>;
//   const handleCardClick = () => {
//     setShowFront((v) => !v);
//   };


// return (

//   <div className={styles.flippableCardContainer}>
//   <CSSTransition
//       in={showFront}
//       timeout={300}
//       classNames='flip'
//   >
//       <FlipCard onClick={handleCardClick}/>
//   </CSSTransition>
// </div>
//   <div className={styles.cardGrid}>
//     <div className={styles.cardsContainer} >
//       {/* map through the data and return the recipe name and image */}
//       {recipes.map((recipe) => { 
//         if (!recipe.name) {
//           console.warn(`Recipe is missing name or description: ${recipe}`);
//           return null;
//         }
//       
//         return (
//           <>
//           <div
//             className={`${styles.card} ${flip ? styles.flip : ''}`}
//             style={{
//               backgroundImage: `url(${recipe.thumbnail_url})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }} onClick={() => setFlip(!flip)}
//             //each item in a list needs a unique key
//             key={recipe.id}
//           >
//             <h2 className={styles.cardName}>{recipe.name}</h2> 
//             <div className={`${styles.front}`}>
//                 <h2 className={styles.cardName}>{recipe.name}</h2>
//               </div>
//               <div className={`${styles.back}`}>
//                 <p>{recipe.name}</p>
//               </div>
//           </div>
//           </>  );
//       })}
//     </div>
//   </div>
  
// );
 };

export default Card;