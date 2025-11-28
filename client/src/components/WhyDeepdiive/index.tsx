import React from 'react'
import { Users, MessageCircle } from 'lucide-react';
import styles from './WhyDeepdiive.module.css';

export const WhyDeepdiive = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.title}>Why DeepDiive?</h2>
            <p className={styles.description}>
              Deeper conversations strengthen trust, connection, and happiness within remote teams.
            </p>
            <div className={styles.iconContainer}>
              <div className={styles.iconWrapper}>
                <Users className={styles.icon} strokeWidth={1.5} />
              </div>
              <div className={styles.iconWrapper}>
                <MessageCircle className={styles.icon} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
