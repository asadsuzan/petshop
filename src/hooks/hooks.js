import { useEffect } from "react"
import { useState } from "react"


export const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  return products
}

