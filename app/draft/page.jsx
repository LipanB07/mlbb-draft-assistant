"use client"
import { useState } from "react";
import style from "@/styles/DraftPage.module.css";
import DraftPanel from "@/components/DraftPanel";
import SuggestionPanel from "@/components/SuggestionPanel";

export default function DraftPage() {
    const [lane, setLane] = useState("");

    function handleLaneChange(e) {
        setLane(e.target.value);
        console.log(e.target.value)
    }

    return (
        <main>
            {/* Lane Selection */}
            <section className={style.laneSection}>
                <h3>Your Lane:</h3>
                <select value={lane} onChange={handleLaneChange} className={style.laneSelect}>
                    <option value="">---  ---</option>
                    <option value="gold">Gold Lane</option>
                    <option value="exp">Exp Lane</option>
                    <option value="mid">Mid Lane</option>
                    <option value="jungle">Jungle</option>
                    <option value="roam">Roam</option>
                </select>
            </section>

            {/* Draft Panels */}
            <section>
                <DraftPanel title="Bans" slots={10} />
                <DraftPanel title="Allies" slots={5} />
                <DraftPanel title="Enemies" slots={5} />
            </section>

            {/* Suggestions */}
            <section>
                <SuggestionPanel />
            </section>
        </main >
    )
}