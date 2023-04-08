import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import { cookies, headers } from 'next/headers';



export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>


    </main>
  );
}
