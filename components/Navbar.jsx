'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.header}>
            {/* Logo and Name */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/icon.png"
                    alt="Legends Hub Icon"
                    width={24}
                    height={24}
                    className={styles.logoIcon}
                />
                <Link href="/" className={styles.siteName}>MLBB Draft Assistant</Link>
            </div>

            {/* Navbar */}
            <nav className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/draft">Draft</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}