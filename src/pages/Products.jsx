import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosURL from '../tools/axiosInstance'
import ProductItem from "../components/UI/ProductItem";
import Section from "../components/UI/Section";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import qs from "qs";
import HasError from "../components/svg/HasError";
import Spinner from "../components/svg/Spinner";

function Products() {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = qs.stringify(
    {
      populate: {
        img: {
          polpulate: "*",
        },
        beers: {
          populate: "*",
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosURL
      .get(`/api/brands/${id}?${query}`, {
        signal: controller.signal,
      })
      .then((response) => {
        const brand = response.data.data;
        setBrand(brand);
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
  }, [id, query]);

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
  if (!brand) {
    return (
      <div className="text-center">
        <p>Product not Found</p>
        <Link className="btn-primary" to="/">
          Back Home
        </Link>
      </div>
    );
  }
  const productList = brand.beers || [];
  return (
    <>
      <div className="text-center mb-3">
        <div
          className={`w-24 h-24 overflow-hidden rounded-full mx-auto shadow-lg `}
        >
          <img src={brand.img.url} alt="logo" />
        </div>
        <h1 className="text-2xl text-gray-700 uppercase">{brand.name}</h1>
        <p className="text-sm font-semibold my-2 text-stone-600">
          {brand.description}
        </p>
      </div>
      <Section>
        <ul>
          {productList.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </ul>
        {productList.length <= 0 && (
          <div className="text-center">No Beers where fonund</div>
        )}
      </Section>
      <div className="text-center mt-3">
        <Link
          to="/"
          className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default Products;
