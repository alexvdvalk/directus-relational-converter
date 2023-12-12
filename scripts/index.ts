import { createTranslationsFields } from "./createTranslationFields";
import { createTranslationsTable } from "./createTranslationsTable";
import resetForTesting from "./resetForTesting";
import createRelations from "./createRelations";

let tablesToTranslate = [
  {
    table: "abc",
    fields: ["name", "description"],
  },
];

await resetForTesting();

for (const table of tablesToTranslate) {
  await createTranslationsFields(table.table);
  await createTranslationsTable(table.table);
  //   await createForeignKey(table.table);
  await createRelations(table.table);
}
