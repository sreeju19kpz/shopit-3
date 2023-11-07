import { useEffect, useState } from "react";
const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        const rData = await response.json();
        if (!response.ok) {
          setLoading(false);
          setFailed(true);
          return;
        }
        setLoading(false);
        setData(rData.products);
      } catch (error) {
        console.log(`Fetching UserData faliled with error ${error}`);
      }
    };
    fetchProducts();
  }, []);

  return { loading, faliled, data };
};

export default useFetchProducts;
