"use client";

// core
import Head from "next/head";
import { useState, useEffect } from "react";

//libraries
import { motion } from "framer-motion";

// components
import Landing from "../components/Landing";
import Loader from "components/Loader/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  return showLoader ? (
    <Loader hasText={false} />
  ) : (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Deepdiive" content="Ride the Wave of Better Conversations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Landing />
      </motion.div>
    </>
  );
}
