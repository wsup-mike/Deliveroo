import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url";
//connection to backend
export const client = createClient({
  // projectId: "3oz477g8", // Mikes content lake
  projectId: "qwoxusny", // Sonnys content lake
  dataset: "production",
  useCdn: true,
  // apiVersion: "2022-01-12",
  // apiVersion: "2023-03-04",
  apiVersion: "2021-10-21",
});

// 1:39 to resume

// //create an 'image builder'
// const builder = ImageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source); // a helper function for later

// Run this to add exceptin for localhost 3000 CORS policy (cd into sanity folder and run command below for: 3000, 3333 and 19006)

// sanity cors add http://localhost:3000

// export const projectId = "3oz477g8";

// Sangha Version belol
