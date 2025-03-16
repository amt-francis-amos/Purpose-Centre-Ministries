import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "zhx38059", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2023-01-01", 
});

export default sanityClient;
