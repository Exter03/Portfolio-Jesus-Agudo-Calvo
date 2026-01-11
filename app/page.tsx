"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0f0"; // Verde matrix
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden">
      {/* Canvas de letras tipo hacker */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          Jesús Agudo Calvo
        </motion.h1>

        {/* Mini título con neon blanco */}
        <motion.h2 className="text-xl md:text-2xl text-white mb-10 drop-shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff]">
          System, Network & Security Administrator
        </motion.h2>

        {/* Botones idiomas con contorno neon */}
        <div className="flex space-x-6 mb-10">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00b0ff, 0 0 50px #00b0ff" }}
            className="px-8 py-3 bg-[#0055A4] rounded-2xl font-semibold text-white border-2 border-[#00b0ff] shadow-[0_0_10px_#00b0ff] transition-all duration-300"
            onClick={() => router.push("/fr")}
          >
            🇫🇷 Français
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff5050, 0 0 50px #ff5050" }}
            className="px-8 py-3 bg-[#C60B1E] rounded-2xl font-semibold text-white border-2 border-[#ff5050] shadow-[0_0_10px_#ff5050] transition-all duration-300"
            onClick={() => router.push("/es")}
          >
            🇪🇸 Español
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #0099ff, 0 0 50px #0099ff" }}
            className="px-8 py-3 bg-[#012169] rounded-2xl font-semibold text-white border-2 border-[#0099ff] shadow-[0_0_10px_#0099ff] transition-all duration-300"
            onClick={() => router.push("/en")}
          >
            🇬🇧 English
          </motion.button>
        </div>

        {/* Sección Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-white mb-3 text-lg font-semibold drop-shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff]">
            Want to work with me?
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff00ff, 0 0 50px #ff00ff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="px-10 py-3 bg-purple-600 rounded-2xl font-semibold text-white border-2 border-[#ff00ff] shadow-[0_0_10px_#ff00ff] transition-all duration-300"
          >
            📩 Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer className="relative mt-16 text-sm text-gray-300 z-10 drop-shadow-[0_0_10px_#0ff] animate-flicker-footer">
        © 2025 Jesús Agudo Calvo — Portfolio
      </motion.footer>

      {/* Estilos globales */}
      <style global jsx>{`
        @keyframes flicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; }
          20%,22%,24%,55% { opacity:0.4; }
        }
        .animate-flicker { animation: flicker 5s infinite; }

        @keyframes flicker-footer {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; }
          20%,22%,24%,55% { opacity:0.5; }
        }
        .animate-flicker-footer { animation: flicker-footer 8s infinite; }
      `}</style>
    </div>
  );
}
