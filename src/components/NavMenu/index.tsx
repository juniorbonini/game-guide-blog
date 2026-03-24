import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Detonados" },
  { href: "/news", label: "Noticias" },
];

export function NavMenu() {
  return (
    <>
      <nav className="hidden md:flex items-center gap-0.5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-4 text-gray hover:text-primary font-medium transition-colors group"
          >
            {link.label}
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-danger transition-all duration-300 group-hover:left-2 group-hover:w-[calc(100%-16px)]" />
          </Link>
        ))}
      </nav>
    </>
  );
}
