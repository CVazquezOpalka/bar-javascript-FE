import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosURL from '../tools/axiosInstance'
import BrandCard from "../components/UI/BrandCard";
import Spinner from "../components/svg/Spinner";
import HasError from "../components/svg/HasError";

function Home() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosURL
      .get("/api/brands?populate=*", {
        signal: controller.signal,
      })
      .then((response) => {
          const brand = response.data.data;
          setBrands(brand);
          setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setHasError(true);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="w-24 mx-auto">
        <Spinner></Spinner>
      </div>
    );
  }
  if (hasError) {
    return (
      <div>
        <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
          404!
        </h1>
        <h2 className="text-stone-600 text-center mb-2 ">
          Please try in other moment
        </h2>
        <HasError />
      </div>
    );
  }
  return (
    <div className="flex justify-around flex-wrap">
      {brands.map((brand) => (
        <BrandCard key={brand.id} data={brand} />
      ))}
      {brands.length <= 0 && (
        <p className="text-center text-2xl text-gray-700">No beer data found</p>
      )}
    </div>
  );
}

export default Home;
