import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "tfb2nbxf",
  dataset: "production",
  //   date when the project was created
  apiVersion: "2022-08-18",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Get CDN links from images in the Sanity DB
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
