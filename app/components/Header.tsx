"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sections = ["home", "experience", "about", "lab", "achievements"];

export default function Header(): React.JSX.Element {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === "/certificates" ? "certificates" : "home");

  useEffect(() => {
    if (pathname === "/certificates") {
      setActive("certificates");
      return;
    }

    const updateActiveSection = () => {
      const probeY = 170;
      let currentSection = sections[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;

        if (top <= probeY) {
          const distance = Math.abs(probeY - top);
          if (distance < bestDistance) {
            bestDistance = distance;
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("load", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
    };
  }, [pathname]);

  const navClass = (id: string) =>
    `px-4 py-2 rounded-md text-sm transition-all duration-300 ${
      active === id
        ? "bg-black text-purple-400 border border-purple-500/60 shadow-[0_0_14px_rgba(168,85,247,0.6)]"
        : "text-white hover:text-purple-400"
    }`;

  const sectionHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/image.png"
              alt="Logo"
              width={192}
              height={115}
              className="-rotate-6"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Link href={sectionHref("home")} className={navClass("home")} onClick={() => setActive("home")}>
                Home
              </Link>
            </li>
            <li>
              <Link href={sectionHref("experience")} className={navClass("experience")} onClick={() => setActive("experience")}>
                Work Experience
              </Link>
            </li>
            <li>
              <Link href={sectionHref("about")} className={navClass("about")} onClick={() => setActive("about")}>
                Skills
              </Link>
            </li>
            <li>
              <Link href={sectionHref("lab")} className={navClass("lab")} onClick={() => setActive("lab")}>
                Projects
              </Link>
            </li>
            <li>
              <Link href={sectionHref("achievements")} className={navClass("achievements")} onClick={() => setActive("achievements")}>
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/certificates" className={navClass("certificates")} onClick={() => setActive("certificates")}>
                Certificates
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
