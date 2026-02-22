import React from "react";
import { styles } from "./style";
import featureCards from "./data";

function Features() {
  return (
    <div className={styles.sectionContainer}>
      {/* Header */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerTop}>
          <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
          <h5 className={styles.headerTitle}>Features</h5>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className={styles.heading}>
            Innovative solutions to{" "}
            <span className="mmd:block">enhance medical service</span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardsWrapper}>
        {featureCards.map((card) => (
          <div
            key={card.title}
            className={`${styles.cardBase} ${card.className}`}
          >
            <div className={styles.iconWrapper}>
              <img src={card.image} alt={card.title} className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;