
  export const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');

      if (response.ok) {
        const data = await response.json()
        return data;
      } else {
        throw new Error("Error trayendo los productos");
      }
      
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }