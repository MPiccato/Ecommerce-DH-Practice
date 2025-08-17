import { useEffect, useState } from "react";
import { Hero } from "../../components/ui/Hero/Hero";
import { Card } from "../../pages/Card/CardProduct";
import { getProducts } from "../../service";
import styles from './Home.module.css';



export const Home = () => {
  
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(false)
  const [isLoading, setisLoading] = useState(true);



  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    }).catch(()=> {
      setError(true)
    }).finally(()=>{
      setisLoading(false);
    });
 
  }, []);

  
    return (
    <>
      <Hero />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className={styles.container}>
        {products.map((product)=> (
          <Card 
            key={product.id}
            product={product}/>
        ))}

      </div>
    </>
  )
}
