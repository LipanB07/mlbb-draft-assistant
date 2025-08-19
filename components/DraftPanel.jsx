import Slot from "./Slot";
import style from "@/styles/DraftPage.module.css";

export default function DraftPanel({ title, slots }) {
    return (
        <div className={style.draftPanel}>
            <h3>{title}</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {Array.from({ length: slots }).map((_, i) => (
                    <Slot key={i} />
                ))}
            </div>
        </div>
    );
}