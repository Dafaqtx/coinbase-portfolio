import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "dmmnt14j",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skWVAkdDGSu7YAi65l3cztejgRkhECdWBYc9JCvB7aFemzmxykgfESKbxnXI54ZQn58a0gvHQcyevGEktGbpOXW9ncMgAxNIF8bdhM0WOPxXvWwpw39CTRkvRFehW2nvTDNwdMDwwbIJGtmEFb89oByqRmG2bIy2gWR7wK0BrB3xtl1CH6Gf",
  useCdn: false,
});
