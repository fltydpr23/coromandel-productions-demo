import { defineType, defineField } from "sanity";

export const clientBrandSchema = defineType({
  name: "clientBrand",
  title: "Client Brand",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Client Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "context", title: "Context Descriptor", type: "string", description: "E.g. ICC — World Cup 2023 Highlights" }),
    defineField({ name: "location", title: "Region / Location", type: "string" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "context", media: "logo" },
  },
});
