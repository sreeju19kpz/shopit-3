import { useEffect, useState } from "react";
const useFetchSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const rData = await response.json();
        if (!response.ok) {
          setLoading(false);
          setFailed(true);
          return;
        }
        setLoading(false);
        setData(rData);
      } catch (error) {
        console.log(`Fetching UserData faliled with error ${error}`);
      }
    };
    fetchProduct();
  }, [id]);
  return { loading, faliled, data };
};

export default useFetchSingleProduct;
