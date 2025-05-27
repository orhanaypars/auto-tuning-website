"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../component/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "w-full bg-yellow-500 text-white rounded-md md:bg-yellow-500 md:text-white md:max-w-2xl md:mx-auto px-0 py-0 z-30",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Hizmetler">
          <div className="flex flex-col space-y-4 text-sm min-w-[180px]">
            <HoveredLink href="/services">Chip Tuning & Yazılım</HoveredLink>
            <HoveredLink href="/services">
              Ses & Hoparlör Sistemleri
            </HoveredLink>
            <HoveredLink href="/services">
              Egzoz & Performans Parçaları
            </HoveredLink>
            <HoveredLink href="/services">
              Süspansiyon & Jant Lastik
            </HoveredLink>
            <HoveredLink href="/services">
              Detaylı Temizlik & Detailing
            </HoveredLink>
            <HoveredLink href="/services">
              Ambiyans & LED Aydınlatma
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Galeri">
          <div className="flex flex-col space-y-4 text-sm min-w-[180px]">
            <HoveredLink href="/gallery">Uygulama Öncesi/Sonrası</HoveredLink>
            <HoveredLink href="/gallery">Müşteri Araçları</HoveredLink>
            <HoveredLink href="/gallery">Etkinlikler</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Hakkımızda">
          <div className="flex flex-col space-y-4 text-sm min-w-[180px]">
            <HoveredLink href="/about">Biz Kimiz?</HoveredLink>
            <HoveredLink href="/about">Vizyon & Misyon</HoveredLink>
            <HoveredLink href="/about">Ekibimiz</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="İletişim">
          <div className="flex flex-col space-y-4 text-sm min-w-[180px]">
            <HoveredLink href="/contact">İletişim Formu</HoveredLink>
            <HoveredLink href="/contact">Adres & Konum</HoveredLink>
            <HoveredLink href="/contact">WhatsApp</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
