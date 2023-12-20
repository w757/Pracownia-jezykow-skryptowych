import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

function CompanyScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const result = await axios.get("/api/company/");
      setProducts(result.data);
    };
    featchData();
  }, []);

  return (
    <div>CompanyScreen - to do </div>
  );
}

export default CompanyScreen;