'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';
import { routes } from '@/constants/routes';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="inventory-navbar">
      {/* 🔩 Pixel screws */}
      <div className="screw top-left" />
      <div className="screw top-right" />
      <div className="screw bottom-left" />
      <div className="screw bottom-right" />

      <div className="inventory-wrapper">
        {routes.map((item, idx) => (
          <Link key={idx} href={item.href} className="inventory-slot-link">
            <div className={`inventory-slot ${pathname === item.href ? 'active-slot' : ''}`}>
              <div className="inventory-icon">{item.icon}</div>
              <div className="inventory-label">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
