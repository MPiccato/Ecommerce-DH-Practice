import { Hero } from "../../components/ui/Hero/Hero"
import { useEffect, useState } from "react";
import styles from './Home.module.css';
import {Card} from "../../pages/Card/CardProduct";



export const Home = () => {
  
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json()
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
 
  }, []);

  
    return (
    <>
      <Hero />
      <div className={styles.container}>
        {products.map((product)=> (
          <Card 
            key={product.tail}
            product={product}/>
        ))}

      </div>
    </>
  )
}
