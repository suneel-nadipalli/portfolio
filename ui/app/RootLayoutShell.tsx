'use client';

import { usePathname } from 'next/navigation';
import NavBar from '@/components/NavBar';

export default function RootLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = pathname !== '/';

  return (
    <>
      {showNav && <NavBar />}
      <main>{children}</main>
    </>
  );
}
