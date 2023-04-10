import Search from './search';
import UsersTable from './table';
import { cookies, headers } from 'next/headers';
import Content from './index.mdx';


export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Content />
    </main>
  );
}
