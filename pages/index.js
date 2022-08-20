import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner, Footer } from "../components";

const Home = ({ products, bannerProducts }) => {
  return (
    <>
      <HeroBanner bannerProducts={bannerProducts.length && bannerProducts[0]} />
      <div className="products-heading">
        <h2>Best selling</h2>
        <p>The bes sound in the market</p>
      </div>
      <div className="products-container">
        {products?.map((item) => item.name)}
      </div>
      Footer
    </>
  );
};

export default Home;

// Makes API call in the server and returns the page already whit the data, make it available globaly
export const getServerSideProps = async () => {
  // Give an arr of all the products
  const query = "*[_type=='product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type=='banner']";
  const bannerProducts = await client.fetch(bannerQuery);

  return { props: { products, bannerProducts } };
};
