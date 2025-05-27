import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white py-8 px-4 mt-12 border-t border-yellow-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
        {/* Sol: Logo ve kısa açıklama */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-extrabold text-yellow-500 tracking-wider">
            Auto Tuning
          </span>
          <p className="text-sm text-white/70 max-w-xs text-center md:text-left">
            İzmir&apos;de profesyonel chip tuning, ses sistemleri ve araç
            modifiye hizmetleri. Kalite ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
        {/* Orta: Menü */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link href="/" className="hover:text-yellow-400 transition">
            Anasayfa
          </Link>
          <Link href="/services" className="hover:text-yellow-400 transition">
            Hizmetler
          </Link>
          <Link href="/works" className="hover:text-yellow-400 transition">
            Projeler
          </Link>
          <Link href="/referances" className="hover:text-yellow-400 transition">
            Referanslar
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            İletişim
          </Link>
        </nav>
        {/* Sağ: Sosyal medya ve iletişim */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 mb-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 6 .334 6.409 0 12c.334 5.591.347 5.999.406 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.283.072-1.691.072-7.282s-.013-5.999-.072-7.282c-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.93-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
          <span className="text-xs text-white/50 mt-2">
            © {new Date().getFullYear()} İzmir Auto Tuning. Tüm hakları
            saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
