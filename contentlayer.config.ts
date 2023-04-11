import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the Document",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: false,
    },
    description: {
      type: "string",
      description: "The description of the Doc",
      required: false,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/Docs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "Docs",
  documentTypes: [Doc],
});