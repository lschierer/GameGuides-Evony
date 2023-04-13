import Head from 'next/head'
import Link from 'next/link'
import { notFound } from "next/navigation";
import { Doc,allDocs } from "contentlayer/generated";

import { Metadata } from "next";

import { Mdx } from "../../components/mdx";
import { ReactElement } from 'react';


async function getDocFromParams(DPP: {
  params: { slug: string[] };
}) {
  const slug = DPP.params.slug?.join("/") || "";
  let doc: Doc|undefined;
  if ((slug === "/") || (slug === "")){
    doc = allDocs.find((doc) => doc.slugAsParams === "index")
  } else {
    doc = allDocs.find((doc) => doc.slugAsParams === slug);
  }

  return doc;
}

/*
export async function generateMetadata( DPP: DocPageProps ): Promise<Metadata> {


  const doc = await getDocFromParams(DPP);

  if (!doc) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", doc.description ?? doc.title)
  ogUrl.searchParams.set("type", "Documentation")
  ogUrl.searchParams.set("mode", "light")

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
  }
}
*/

export async function generateStaticParams() {
  let slugs =  allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
  console.log(`staticParms returning ${slugs}`);
  return slugs;
}

export default async function Page({
                               params,
                             }: {
  params: { slug: string[] };
}): Promise<ReactElement<any>> {
  const doc = await getDocFromParams({params});

  if ((!doc) || (doc === undefined)) {
    notFound();
  }

  return (
    <>
      <div>
        <Mdx code={doc.body.code} />
      </div>
    </>

  );
};