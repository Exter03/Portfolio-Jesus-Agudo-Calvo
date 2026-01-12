"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function FrenchHome() {
  const router = useRouter();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white overflow-hidden p-8">

      {/* Fond dégradé animé */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#0b0c10] via-[#0f1923] to-[#09121a]"></div>
      </div>

      {/* Particules */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 90, density: { enable: true, value_area: 800 } },
            color: { value: ["#00f0ff", "#0ff", "#0fffb0"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
            links: { enable: true, distance: 140, color: "#00f0ff", opacity: 0.2, width: 1 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 150, duration: 0.4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center p-8 w-full max-w-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Titre */}
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          Jesús Agudo Calvo
        </motion.h1>

        {/* Bouton À propos */}
        <motion.button
          onClick={() => router.push("/fr/about")}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px #a0f, 0 0 60px #a0f" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-8 py-3 mb-10 mt-10 bg-purple-600 rounded-3xl font-semibold text-white drop-shadow-[0_0_25px_#a0f] border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 animate-pulse"
        >
          À propos
        </motion.button>

        {/* Sous-titre projets */}
        <motion.h2 className="relative text-xl md:text-2xl text-gray-300 mb-4 z-10 drop-shadow-[0_0_15px_#0ff]">
          Mes projets
        </motion.h2>

        {/* Mini description */}
        <motion.p className="relative text-gray-400 text-center max-w-2xl mb-6 z-10 drop-shadow-[0_0_10px_#0ff]">
          Ici, vous trouverez mes compétences et expériences professionnelles.
        </motion.p>

        {/* Sous-titre Hôpital */}
        <motion.h3 className="relative text-xl md:text-2xl text-gray-300 mb-6 z-10 drop-shadow-[0_0_15px_#0ff]">
          Hôpital Georges Daumezon
        </motion.h3>

        {/* Cartes projets */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 w-full max-w-6xl">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/fr/projets/ad-securite")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Projet AD Sécurité</h3>
            <p className="text-gray-300 text-sm">Amélioration d'Active Directory pour la sécurité et les permissions.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/fr/projets/audit-reseau")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Audit Réseau</h3>
            <p className="text-gray-300 text-sm">Audit du réseau interne pour détecter les vulnérabilités.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/fr/projets/surveillance")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Surveillance Cybersécurité</h3>
            <p className="text-gray-300 text-sm">Mise en place de systèmes de surveillance et alertes en temps réel.</p>
          </motion.div>
        </div>

        {/* Bouton retour accueil */}
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.05 }}
          className="relative z-10 px-6 py-2 mt-12 bg-cyan-500 rounded-2xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300"
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.footer className="relative mt-16 text-sm text-gray-300 z-10 drop-shadow-[0_0_10px_#0ff] animate-flicker-footer">
        © 2025 Jesús Agudo Calvo — Portfolio
      </motion.footer>

      <style global jsx>{`
        @keyframes gradient {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
        .animate-gradient { background-size: 200% 200%; animation: gradient 30s ease infinite; }
        @keyframes flicker {0%,19%,21%,23%,25%,54%,56%,100%{opacity:1;}20%,22%,24%,55%{opacity:0.4;}}
        .animate-flicker { animation: flicker 5s infinite; }
        .animate-flicker-footer { animation: flicker 8s infinite; }
        @keyframes pulse {0%,100%{transform: scale(1);}50%{transform: scale(1.02);} }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}
