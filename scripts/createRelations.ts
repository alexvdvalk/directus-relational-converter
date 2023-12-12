import { createRelation } from "@directus/sdk";
import { client } from "./directus";

export default async (collection: string) => {
  await createLanguageRelation(collection);
  await createTableRelation(collection);
};

const createLanguageRelation = async (collection: string) => {
  const result = await client.request(
    createRelation({
      collection: `${collection}_translations`,
      field: "languages_code",
      related_collection: "languages",
      meta: {
        one_field: null,
        sort_field: null,
        one_deselect_action: "nullify",
        junction_field: "abc_id",
      },
      schema: {
        on_delete: "SET NULL",
      },
    })
  );
};

const createTableRelation = async (collection: string) => {
  const result = await client.request(
    createRelation({
      collection: `${collection}_translations`,
      field: `${collection}_id`,
      related_collection: collection,
      meta: {
        one_field: "translations",
        junction_field: "languages_code",
      },
      schema: {
        on_delete: "SET NULL",
      },
    })
  );
};
