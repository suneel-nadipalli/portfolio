'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';

const navItems = [
  { label: '🧾 Background', href: '/background' },
  { label: '📂 Projects', href: '/projects' },
  { label: '🌐 Webapps', href: '/webapps' },
  { label: '📄 Papers', href: '/papers' },
  { label: '🎮 Fun Stuff', href: '/fun' },
  { label: '📬 Contact', href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="crt-navbar vt323-font">
      <div className="hud-strip">
        <span className="hud-icon">🔋</span>
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
            <span>{item.label}</span>
          </Link>
        ))}
        <span className="hud-icon">💾</span>
        <span className="hud-icon">🎮</span>
      </div>
    </nav>
  );
}
