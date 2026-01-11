"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white p-8 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#0b0c10] via-[#0f1923] to-[#09121a]"></div>
      </div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-3xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título */}
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          Contact Me
        </motion.h1>

        <motion.p className="text-gray-400 text-center max-w-xl mb-10 drop-shadow-[0_0_10px_#0ff]">
          Feel free to reach out to me through any of the following methods.
        </motion.p>

        {/* Botones de contacto */}
        <div className="flex flex-col space-y-6 w-full max-w-md">

          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #0ff" }}
            className="flex items-center justify-center space-x-3 bg-gray-900 px-6 py-3 rounded-2xl font-semibold transition cursor-default"
          >
            <Mail className="w-6 h-6 text-cyan-400" />
            <span>jes.agucalvo@gmail.com</span>
          </motion.div>

          {/* LINKEDIN */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #0ff" }}
            className="flex items-center justify-center space-x-3 bg-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-500 transition"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jesús-agudo-calvo-11bb40274",
                "_blank"
              )
            }
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </motion.button>

          {/* TELÉFONO */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #0ff" }}
            className="flex items-center justify-center space-x-3 bg-gray-900 px-6 py-3 rounded-2xl font-semibold transition cursor-default"
          >
            <Phone className="w-6 h-6 text-cyan-400" />
            <span>+33 7 68 16 28 97</span>
          </motion.div>
        </div>

        {/* Botón volver */}
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 mt-10 bg-cyan-500 rounded-3xl font-semibold drop-shadow-[0_0_10px_#0ff] hover:bg-cyan-400 transition-all duration-300"
        >
          Back to Home
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.footer className="relative mt-16 text-sm text-gray-300 z-10 drop-shadow-[0_0_10px_#0ff] animate-flicker-footer">
        © 2025 Jesús Agudo Calvo — Portfolio
      </motion.footer>

      {/* Estilos globales */}
      <style global jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 30s ease infinite;
        }
        @keyframes flicker {
          0%,19%,21%,23%,25%,54%,56%,100%{opacity:1;}
          20%,22%,24%,55%{opacity:0.4;}
        }
        .animate-flicker { animation: flicker 5s infinite; }
        .animate-flicker-footer { animation: flicker 8s infinite; }
      `}</style>
    </div>
  );
}
