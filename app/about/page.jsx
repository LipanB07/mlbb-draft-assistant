"use client"
import Image from "next/image";
import style from "@/styles/AboutPage.module.css";

export default function AboutPage() {
    return (
        <main className={style.about}>
            {/* === PAGE TITLE === */}
            <h1>MLBB Draft Assistant</h1>

            {/* === SECTION: INTRODUCTION === */}
            <section className={style.aboutSection}>
                <h2>What is MLBB Draft Assistant?</h2>
                <p>
                    <strong>MLBB Draft Assistant</strong> helps Mobile Legends players make smarter draft decisions by
                    analyzing hero interactions — highlighting who each hero counters, who counters
                    them, and which heroes work best together.
                    <br /><br />
                </p>
                <p>
                    The assistant uses a relationship-based scoring system to evaluate hero suitability
                    in your current draft. Each hero interacts with others through four key types of relationships:
                </p>
                <br />
                <ul>
                    <li>
                        <strong className={style.blueAcccent}>Counters</strong> — hero that performs well <em>against</em> another. <strong className={style.blueAcccent}>+1</strong> score.
                    </li>
                    <li>
                        <strong className={style.blueAcccent}>Countered by</strong> — hero that performs poorly <em>against</em> another. <strong className={style.blueAcccent}>−1</strong> penalty.
                    </li>
                    <li>
                        <strong className={style.blueAcccent}>Synergy</strong> — hero that works well <em>with</em> another. <strong className={style.blueAcccent}>+0.1</strong> score.
                    </li>
                    <li>
                        <strong className={style.blueAcccent}>Anti-synergy</strong> — hero that conflicts <em>with</em> another. <strong className={style.blueAcccent}>−0.1</strong> penalty.
                    </li>
                </ul>
            </section>

            {/* === SECTION: DATA SOURCE + DISCLAIMER === */}
            <section className={style.aboutSection}>
                <h2>Data Source and Disclaimer</h2>
                <p>
                    All hero data and matchup information are based on publicly available content from the
                    <strong> official Mobile Legends:
                        <a href="https://www.mobilelegends.com/" className={style.blueAcccent}> https://www.mobilelegends.com/</a>
                    </strong>.
                </p>

                {/* Reference image from official MLBB site */}
                <div className={style.imageWrapper}>
                    <Image
                        src="/images/counterRelationshipImg.png"
                        alt="Counter relationship chart — from the official MLBB website"
                        width={500}
                        height={280}
                        className={style.aboutImage}
                    />
                </div>

                <p>
                    The relationships (counters, synergies, etc.) reflect only the top 5–10 most relevant interactions
                    displayed publicly for each hero.
                </p>
                <p>
                    This means the results are <strong>not exhaustive</strong> — a hero might show a +2 score because it counters
                    two enemies, but could still be slightly disadvantaged against others not listed on the official site.
                    Use these suggestions as a <em>guideline</em>, not as absolute truth.
                </p>
                <p className={style.dataNote}>
                    <strong>Last data update:</strong> <span>November 2025</span>
                </p>
            </section>

            {/* === SECTION: ABOUT THE DEVELOPER === */}
            <section className={style.aboutSection}>
                <h2>About the Developer</h2>
                <br />
                <div className={style.devContainer}>
                    {/* Developer bio */}
                    <div className={style.devText}>
                        <p>
                            Hi! I'm <strong>Vincenzo Farro</strong>, a developer and Mobile Legends gamer from Italy.
                            I love to win, and this project was born from my desire to have an advantage during the drafting phase.
                            My goal is to keep improving this draft tool and, in the future, integrate more advanced data such as
                            hero win rates, patch updates, and player preferences.
                        </p>
                    </div>

                    {/* Developer image */}
                    <div className={style.devImageWrapper}>
                        <Image
                            src="/images/vincenzoImage.png"
                            alt="Vincenzo Farro - Developer"
                            width={200}
                            height={200}
                            className={style.devImage}
                        />
                    </div>
                </div>
            </section>

            {/* === SECTION: TECHNOLOGIES USED === */}
            <section className={style.aboutSection}>
                <h2>Technologies Used</h2>
                <ul>
                    <li>Next.js 14</li>
                    <li>React</li>
                    <li>Puppeteer (for data extraction)</li>
                    <li>Custom JavaScript algorithms</li>
                </ul>
            </section>

            {/* === SECTION: CONTACT LINKS === */}
            <section className={style.aboutSection}>
                <h2>Connect with Me</h2>
                <ul>
                    <li>GitHub : <a href="https://github.com/vin-03" target="_blank" rel="noopener noreferrer" className={style.blueAcccent}>github.com/vin-03</a></li>
                    <li>Ko-fi : <a href="https://ko-fi.com/vincenzofarro" target="_blank" rel="noopener noreferrer" className={style.blueAcccent}>ko-fi.com/vincenzofarro</a></li>
                    <li>LinkedIn : <a href="https://www.linkedin.com/in/vincenzo-farro/" target="_blank" rel="noopener noreferrer" className={style.blueAcccent}>linkedin.com/in/vincenzo-farro</a></li>
                    <li>My WebSite : <a href="https://vincenzofarro.com/" target="_blank" rel="noopener noreferrer" className={style.blueAcccent}>vincenzofarro.com</a></li>
                </ul>
            </section>
        </main>
    );
}
