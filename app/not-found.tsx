"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const linkVariants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const waveVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NotFound() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative"
      >
        <motion.h1
          animate={{
            textShadow: [
              "0 0 5px rgba(66, 153, 225, 0.5)",
              "0 0 20px rgba(66, 153, 225, 0.8)",
              "0 0 5px rgba(66, 153, 225, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 md:text-7xl"
        >
          404
        </motion.h1>
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <motion.p
          className="mt-4 text-xl md:text-2xl font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Не найдено
        </motion.p>
        <motion.p className="mt-4 text-sm md:text-lg text-muted-foreground">
          Извините, страница не доступа или её не существует.
        </motion.p>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-gray-200 text-md mt-6 font-medium"
      >
        Но есть пару интересных страниц
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-center max-w-2xl"
      >
        {[
          "Главная",
          "Профиль",
          "Дэшборд",
          "Новый проект",
          "Настройки",
          "Документация",
        ].map((text, i) => (
          <motion.a
            key={text}
            href="/"
            variants={linkVariants}
            whileHover="hover"
            className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
          >
            {text}
          </motion.a>
        ))}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 w-full p-6 text-center text-gray-400 backdrop-blur-sm"
      >
        <motion.p variants={waveVariants} animate="animate" className="text-sm">
          © 2025 CodeFlow Group.
        </motion.p>
      </motion.footer>
    </motion.div>
  );
}
