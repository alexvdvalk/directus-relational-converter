import { createField } from "@directus/sdk";
import { client } from "./directus";

export const createTranslationsFields = async (collectionName: string) => {
  return await client.request(
    createField(collectionName, {
      field: "translations",
      type: "alias",
      meta: {
        interface: "translations",
        special: ["translations"],
      },
    })
  );
};
