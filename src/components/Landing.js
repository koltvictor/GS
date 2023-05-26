import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/GSLogo.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3.5 }}
      className="landing"
    >
      <img src={logo} alt="logo" />
    </motion.div>
  );
}
