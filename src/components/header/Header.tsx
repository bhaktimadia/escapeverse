"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils";
import { navConfig } from "./Header.data";

function renderNavItems({
    isMobile = false,
    isActive,
    onClickLink,
}: {
    isMobile?: boolean;
    isActive: (path: string) => boolean;
    onClickLink?: () => void;
}) {
    return navConfig.map((item) => {
        const isDropdown = item.type === "dropdown";

        if (isDropdown && item.childList) {
            if (isMobile) {
                return (
                    <details key={item.title} className="group">
                        <summary className="cursor-pointer text-sm font-bold hover:text-[#9000FF]">
                            {item.title}
                        </summary>
                        <div className="pl-4 pt-2 flex flex-col gap-1">
                            {item.childList.map((child) => (
                                <Link
                                    key={child.slug}
                                    href={`/rooms/${child.slug}`}
                                    onClick={onClickLink}
                                >
                                    <span className="text-sm font-bold hover:text-[#9000FF] cursor-pointer">
                                        {child.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </details>
                );
            }

            return (
                <div key={item.title} className="relative group">
                    <Link
                        href={item.link ?? "#"}
                        className={cn(
                            "text-sm font-bold cursor-pointer transition",
                            isActive(item.link ?? "")
                                ? "text-[#9000FF] underline"
                                : "hover:text-[#9000FF]"
                        )}
                    >
                        {item.title} <span className="ml-1">▾</span>
                    </Link>
                    <div
                        className="absolute left-0 mt-2 bg-accent rounded-md shadow-md p-4 w-64 z-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto -translate-y-2"
                        role="menu"
                        aria-label={`${item.title} Dropdown`}
                    >
                        {item.childList.map((child) => (
                            <Link key={child.slug} href={`/rooms/${child.slug}`}>
                                <span className="py-1 block text-sm font-bold hover:text-[#9000FF] cursor-pointer">
                                    {child.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <Link key={item.title} href={item.link!} onClick={onClickLink}>
                <span
                    className={cn(
                        "text-sm font-bold cursor-pointer transition",
                        isActive(item.link!) ? "text-[#9000FF] underline" : "hover:text-[#9000FF]"
                    )}
                >
                    {item.title}
                </span>
            </Link>
        );
    });
}

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState(false);

    const isActive = (path: string): boolean => pathname === path;

    return (
        <header className="bg-dark text-white w-full fixed z-50 top-0">
            <nav className="flex justify-between items-center py-5 px-22 md:px-26 relative">
                <Link href="/" className="text-xl font-semibold">
                    Logo
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMobileMenu(!mobileMenu)}
                    aria-label="Toggle Mobile Menu"
                >
                    ☰
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {renderNavItems({ isActive })}

                    <button
                        onClick={() => router.push("/booking")}
                        className="bg-[#9000FF] cursor-pointer text-white px-4 py-1.5 rounded-full font-semibold hover:bg-white hover:text-[#9000FF] border-2 border-[#9000FF] transition"
                    >
                        Book Now
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden flex flex-col bg-gunmetal text-white px-6 pt-2 pb-4 gap-4 transition-all duration-300 overflow-hidden",
                    mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                <nav className="flex flex-col gap-2" role="navigation" aria-label="Mobile Navigation">
                    {renderNavItems({ isMobile: true, isActive, onClickLink: () => setMobileMenu(false) })}

                    <button
                        onClick={() => {
                            setMobileMenu(false);
                            router.push("/booking");
                        }}
                        className="mt-2 bg-[#9000FF] text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#9000FF] border-2 border-[#9000FF] transition"
                    >
                        Book Now
                    </button>
                </nav>
            </div>
        </header>
    );
}
