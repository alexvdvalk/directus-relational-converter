import { createCollection } from "@directus/sdk";
import { client } from "./directus";

// Creates a [table]_translations table
// And related fields

export const createTranslationsTable = async (collectionName: string) => {
  return await client.request(
    createCollection({
      collection: `${collectionName}_translations`,
      meta: {
        hidden: true,
        icon: "import_export",
      },
      schema: {
        name: `${collectionName}_translations`,
      },
      fields: [
        {
          field: "id",
          type: "integer",
          schema: {
            has_auto_increment: true,
          },
          meta: {
            hidden: true,
          },
        },
        {
          field: "abc_id", //Colleciton Name
          type: "uuid",
          schema: {},
          meta: {
            hidden: true,
          },
        },
        {
          field: "languages_code",
          type: "string",
          schema: {},
          meta: {
            hidden: true,
          },
        },
      ],
    })
  );
};
