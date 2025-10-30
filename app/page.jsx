"use state"
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <a
        href="https://ko-fi.com/vincenzofarro"
        target="_blank"
        rel="noopener noreferrer"
        className="btn ko-fi-btn"
      >
        <span className="truncate">Support Me on Ko-fi</span>
        <Image
          src="/images/vincenzoImage.png"
          alt="Vincenzo Farro"
          width={44}
          height={44}
          className="profile-pic"
        />
      </a>
    </main>
  );
}
