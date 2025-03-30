"use client";
import { HomePage } from "@/screens";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <HomePage />
    // <UniverseThemeUI/>
  );
}
