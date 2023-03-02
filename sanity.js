import sanityClient, { createClient, SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

//connection to backend
const client = createClient({
  projectId: "3oz477g8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
