import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

function AboutUSScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const result = await axios.get("/api/about-us/");
      setProducts(result.data);
    };
    featchData();
  }, []);

  return (
    <div>AboutUSScreen - to do </div>
  );
}

export default AboutUSScreen;