"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem } from "../component/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/component/ui/button";

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
        "w-full bg-yellow-500 max-w-3xl mx-auto text-white rounded-md flex items-center justify-center px-2 md:px-4 z-30",
        className
      )}
    >
      {/* Sol: Logo */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <Image
          src="/tuning-logo.png"
          alt="Auto Tuning Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      {/* Orta: Menü */}
      <div className=" flex justify-center">
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
      <div>
        <Button>Biz sizi arayalım</Button>
      </div>
    </div>
  );
}

export default Navbar;
