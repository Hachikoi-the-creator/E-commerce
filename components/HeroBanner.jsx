import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function HeroBanner({ bannerProducts }) {
  const { smallText, midText, largeText1, image, product, buttonText, desc } =
    bannerProducts;

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>
      <div>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
