import { Doc, allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";

export const generateStaticParams = async () =>
  allDocs.map((doc:any) => ({ slug: doc._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
  const doc = allDocs.find(
    (doc: any) => doc._raw.flattenedPath === params.slug);
  return { title: doc?.title, description: doc?.description };
};

const DocLayout = ({ params }: { params: { slug: string } }) => {
  let doc : Doc | undefined;
  console.log(`slug is ${params.slug}`);
  if ((params.slug === undefined) || (params.slug === "") || params.slug === "/") {
    doc = allDocs.find((doc) => doc._raw.flattenedPath === "");
  } else {
    doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);
  }
  let docDate: string;
  let MDXContent;

  if (!doc) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(doc!.body.code);
    if(doc.date !== undefined) {
      docDate = doc.date;
    } else {
      //figure out git info
    }
  }

  return (
    <div>
      <MDXContent />
    </div>
  );
};

export default DocLayout;