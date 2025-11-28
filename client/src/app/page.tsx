"use client";

//libraries
import { motion } from "framer-motion";

// components
import Landing from "../components/Landing";
import Nav from "components/Nav";
import styles from "./page.module.css";
import Hero from "components/Hero";
import { HowItWorks } from "components/HowItWorks";
import { WhyDeepdiive } from "components/WhyDeepdiive";
import { Ready } from "components/Ready";
import { Footer } from "components/Footer";

export default function Home() {
  return (
    <div className={styles.landing_page}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Nav />
          <Hero />
          <HowItWorks />
          <WhyDeepdiive />
          <Ready />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
