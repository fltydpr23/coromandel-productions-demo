import { defineType, defineField } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "id", title: "ID (slug-style)", type: "string", validation: (R) => R.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Sports", "Corporate", "Social", "Documentary", "Originals"],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "string",
      options: {
        list: ["sports", "corporate", "impact-stories", "documentaries", "originals"],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "vimeoId", title: "Vimeo ID", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
