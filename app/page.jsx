"use state"
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section className="home">
      <Hero />
      <a
        href="https://ko-fi.com/vincenzofarro"
        target="_blank" rel="noopener noreferrer"
        className="btn"
      >
        <span className="truncate">Support Me on Ko-fi</span>
      </a>
    </section>
  );
}
