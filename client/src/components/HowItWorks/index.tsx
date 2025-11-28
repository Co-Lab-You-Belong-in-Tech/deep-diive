import React from "react";
import { Users, MessageCircle, Heart } from 'lucide-react';
import styles from './HowItWorks.module.css';

export const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How It Works</h2>

        <div className={styles.grid}>
          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <Users className={styles.icon} strokeWidth={1.5} />
            </div>
            <h3 className={styles.stepTitle}>Invite a Teammate</h3>
            <p className={styles.stepDescription}>
              Start a session and share your unique link.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <MessageCircle
                className={styles.icon}
                strokeWidth={1.5}
              />
            </div>
            <h3 className={styles.stepTitle}>Pick a Card</h3>
            <p className={styles.stepDescription}>
              Meaningful questions designed for deeper conversations.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconContainer}>
              <Heart className={styles.icon} strokeWidth={1.5} />
            </div>
            <h3 className={styles.stepTitle}>Talk, Laugh, Connect</h3>
            <p className={styles.stepDescription}>
              Turns a simple chat into something deeper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
