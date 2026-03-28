import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black">
      <div className="flex w-full flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6 lg:px-10">
        <p className="font-display text-2xl tracking-[0.14em] text-white">LUCENTREZ</p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-white/75">
          <li><Link href="/catalog">Catalog</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      <p className="border-t border-white/15 px-4 py-3 text-left text-[10px] uppercase tracking-[0.12em] text-white/45 md:px-6 lg:px-10">
        © {new Date().getFullYear()} Lucentrez
      </p>
    </footer>
  );
}
