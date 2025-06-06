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
        {routes.map(({ icon: Icon, label, href }, idx) => (
          <Link key={idx} href={href} className="inventory-slot-link">
            <div className={`nav-hover-slot ${pathname === href ? 'active' : ''}`}>
              <Icon className="nav-hover-icon" />
              <span className="nav-hover-label">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
