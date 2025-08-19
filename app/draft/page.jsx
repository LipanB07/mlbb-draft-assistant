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
                    <option value="Gold Lane">Gold Lane</option>
                    <option value="Exp Lane">Exp Lane</option>
                    <option value="Mid Lane">Mid Lane</option>
                    <option value="Jungle">Jungle</option>
                    <option value="Roam">Roam</option>
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