"use client";
import style from "@/styles/DraftPage.module.css";

export default function HeroSearchModal({ isOpen, closePopUp, heroes }) {
    if (!isOpen) return null;

    return (
        <div className={style.overlay} onClick={closePopUp}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeBtn} onClick={closePopUp}>x</button>
                <input
                    type="text"
                    className={style.inputSearch}
                    placeholder="Search the hero..."
                    // value={query}
                    // onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />
                <div className={style.heroSelectionSection}>
                    {heroes.map(hero => (
                        <div className={style.heroItem}>
                            <img
                                src={hero.icons.round}
                                alt={hero.name}
                                className={style.heroIcon}
                            />
                            <div
                                key={hero.id}
                                className={style.heroName}
                            >
                                {hero.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}