import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function HeroBanner({ bannerProducts }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerProducts.smallText}</p>
        <h3>{bannerProducts.midText}</h3>
        <h1>{bannerProducts.largeText1}</h1>
        <img
          src={urlFor(bannerProducts.image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>
      <div>
        <Link href={`/product/${bannerProducts.product}`}>
          <button type="button">{bannerProducts.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{bannerProducts.desc}</p>
        </div>
      </div>
    </div>
  );
}
