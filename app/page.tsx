import Head from 'next/head'
import Link from 'next/link'
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { Metadata } from "next";

import { Mdx } from "./components/mdx";
async function Page(slug: string[]) {

  const _slug = slug?.join("/") || "";
  const doc = allDocs.find((doc) => _slug);

  return doc;
}

export default async function Home( ) {
  const _page = await Page(["index"]);

  if (_page === undefined) {
    notFound();
  }

  return (
    <>
      <div >
        <Mdx code={_page!.body.code} />
      </div>
    </>
  );
}

