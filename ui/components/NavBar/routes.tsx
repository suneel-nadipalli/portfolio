// Using lucide-react
import { House, IdCard, FolderOpen, ScrollText, Code, Gamepad2, Mail } from 'lucide-react';

export const routes = [
  { label: 'Home', icon: House, href: '/' },
  { label: 'About Me', icon: IdCard, href: '/background' },
  { label: 'Projects', icon: FolderOpen, href: '/projects' },
  { label: 'Webapps', icon: Code, href: '/webapps' },
  { label: 'Papers', icon: ScrollText, href: '/papers' },
  { label: 'Fun Stuff', icon: Gamepad2, href: '/fun' },
  { label: 'Contact', icon: Mail, href: '/contact' },
];