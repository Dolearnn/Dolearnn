"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. sociosqu ad litora torquent per",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Sarah Johnson",

  },
  {
    id: 2,
     text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. sociosqu ad litora torquent per",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => {
      const nextIndex =
        prev + newDirection < 0
          ? testimonials.length - 1
          : (prev + newDirection) % testimonials.length;
      return [nextIndex, newDirection];
    });
  };

  const current = testimonials[index];

 const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    rotate: direction > 0 ? -8 : 8, // 🔥 flipped
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 3, // 🔥 flipped center rotation
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    rotate: direction > 0 ? 8 : -8, // 🔥 flipped
  }),
};


  return (
    <div className="relative flex items-center justify-center py-24 ">

      {/* LEFT BUTTON (outside) */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-[-65px] top-[40px] rounded-full border border-[#044272] -translate-y-1/2 z-30 bg-white p-3 hover:scale-105 transition"
      >
        <ChevronLeft size={16} color="#044272"/>
      </button>

      {/* CARD STACK WRAPPER */}
      <div className="relative w-[320px] -mt-[100px] h-[300px] sm:w-[420px] md:w-[500px]">

        {/* Layer 2 */}
        <motion.div
          className="absolute inset-0 bg-teal-200 rounded-2xl"
          initial={{ rotate: 6, x: 20, y: 20 }}
          animate={{ rotate: 6, x: 20, y: 20 }}
          transition={{ duration: 0.5 }}
        />

        {/* Layer 1 */}
        <motion.div
          className="absolute inset-0 bg-teal-300 rounded-2xl"
          initial={{ rotate: -3, x: 10, y: 10 }}
          animate={{ rotate: -3, x: 10, y: 10 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated Card */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative bg-[#1F4F75] h-[300px]  text-white rounded-2xl p-8 shadow-2xl"
          >
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              {current.text}
            </p>

            <div className="border-t border-white/30 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium">
                  {current.name}
                </span>
              </div>

              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT BUTTON (outside) */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-[-75px] top-[40px] rounded-full  bg-[#044272] -translate-y-1/2 z-30 p-3 hover:scale-105 transition"

      >
        <ChevronRight size={20} color="white" />
      </button>
    </div>
  );
}
