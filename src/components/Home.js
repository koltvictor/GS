import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import portrait from "../assets/gabby.png";
import Reviews from "./Reviews";

export default function Home({ cartItems }) {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  console.log("these are cartItems", cartItems);

  return (
    <div>
      <Header cartItems={cartItems} />
      <motion.div
        className="home-container"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={portrait} alt="Gabby" />
        <div className="text-column">
          <h1>Gabby's Salsas</h1>
          <p>
            Gabby is the brains and talent behind this operation. Born and
            raised in Las Vegas, Gabby grew up cooking authentic Mexican meals
            by helping her mom in the kitchen. She learned the ins-and-outs of
            traditional Mexican cooking and over the years has developed her own
            personal flair. She likes to keep things simple so that you get that
            fresh, home-made taste from every serving of salsa.
          </p>
          <p>
            Salsa Verde has always been a part of Gabby's family's meals and
            Gabby has taken that traditional taste and added her own unique spin
            on it to make it what it is today! Still one of the musts in Gabby's
            household, she is so thrilled to share it so that everyone can bring
            it to their own family gatherings.
          </p>
          <p>
            Gabby's Spicy Red Salsa is the newest addition to Gabby's
            must-haves. Savory and delicious, all of Gabby's Salsas are
            authentic, unique, and made to order. Guaranteed to have the
            freshest ingredients in every batch with big flavor!
          </p>
        </div>
      </motion.div>
      <Reviews />
    </div>
  );
}
