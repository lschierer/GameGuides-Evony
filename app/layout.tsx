import './globals.css';

import CloudScape from './(CloudScape)/layout';

import AnalyticsWrapper from './analytics';


export const metadata = {
  title: 'Evony TKR Tips',
  description:
    'Tips for Budget Gamers'
};

export default async function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <CloudScape>
          {children}
        </CloudScape>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
