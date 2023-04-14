import Head from 'next/head'
import Link from 'next/link'
import { notFound } from "next/navigation";
import { Doc,allDocs } from "contentlayer/generated";

import { Metadata, ResolvingMetadata } from "next";

import { Mdx } from "../../components/mdx";
import { ReactElement } from 'react';

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

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


export async function generateMetadata(
  { params, searchParams }: Props
):Promise<Metadata|undefined> {

  const slug = params.slug;
  const doc = await getDocFromParams({params: { slug }});

  if ((!doc) || (doc === undefined)) {
    return {}
  } else {
    return {
      title: doc.title,
      description: doc.description,

    };
  }
}


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