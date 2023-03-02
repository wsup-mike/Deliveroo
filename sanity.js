import sanityClient, { createClient, SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

//connection to backend
const client = createClient({
  projectId: "3oz477g8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

//create an 'image builder'
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); // a helper function for later
