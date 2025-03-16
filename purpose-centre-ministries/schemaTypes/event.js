import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  liveEdit: false,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(20).error("Description should be at least 20 characters"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Date is required"),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => Rule.required().error("At least one category is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
      slug: "slug.current",
      categories: "categories",
    },
    prepare({ title, date, media, slug, categories }) {
      return {
        title,
        subtitle: `${slug ? `/${slug}` : "No slug"} | ${
          categories ? categories.map((cat) => cat.title).join(", ") : "No categories"
        }`,
        media,
      };
    },
  },
});
