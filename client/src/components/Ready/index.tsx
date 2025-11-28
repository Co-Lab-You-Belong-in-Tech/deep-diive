import React from 'react'
import { useRouter } from 'next/navigation';
import styles from './Ready.module.css';
import { RoutePath } from 'routes';

export const Ready = () => {
  const router = useRouter();
  return (
    <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Ready to Take a DeepDiive?</h2>

          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton} onClick={() => router.push(RoutePath.Game)}>
              Play Now
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>
        </div>
      </section>
  )
}
