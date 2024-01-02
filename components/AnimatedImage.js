"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

import React from "react";
import Image from "next/image";

export default function AnimatedImage({ src, fill, alt, sizes }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <motion.div
        variants={fadeIn("up", "spring", 0, 0.8)}
        style={{ width: "100%", height: "100%" }}
      >
        <Image src={src} alt={alt} fill={fill} sizes={sizes} />
      </motion.div>
    </motion.div>
  );
}
