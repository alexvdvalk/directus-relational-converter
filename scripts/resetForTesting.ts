import { deleteCollection, deleteField } from "@directus/sdk";
import { client } from "./directus";

export default async () => {
  const result = await client.request(deleteCollection("abc_translations"));
  console.log("Deleted Table abc_translations");
  const res = await client.request(deleteField("abc", "translations"));
  console.log("Deleted Field abc/translations");
};
