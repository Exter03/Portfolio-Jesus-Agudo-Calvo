"use client";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useRouter } from "next/navigation";

export default function AboutMeFr() {
  const router = useRouter();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white overflow-hidden p-8">

      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#0b0c10] via-[#0f1923] to-[#09121a]"></div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 90, density: { enable: true, area: 800 } },
            color: { value: ["#00f0ff", "#0ff", "#0fffb0"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false } },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
            links: { enable: true, distance: 140, color: "#00f0ff", opacity: 0.2, width: 1 },
          },
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 150, duration: 0.4 } } },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <motion.div className="relative z-10 flex flex-col items-center p-8 w-full max-w-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          Jesús Agudo Calvo
        </motion.h1>

        <div className="flex-shrink-0 w-64 h-64 bg-gray-700 rounded-2xl border-4 border-cyan-400 overflow-hidden mb-8">
          <img src="/Jesus.png" alt="Jesús Agudo Calvo" className="w-full h-full object-cover"/>
        </div>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Expériences Professionnelles</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>EPSM Georges Daumezon – Chargé de cybersécurité (alternance)</li>
            <li>Dépanneur électroménager - ENVIE (stage d'été)</li>
          </ul>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Formations</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="text-xl font-semibold text-gray-200 mb-2">Nexa Digital School – Paris</li>
            <li>Bachelor 3 – Admin, Sécurité & Réseaux (2024/2025)</li>
            <li>Master 1 Cybersécurité (2025 – 2026)</li>
          </ul>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Compétences Techniques</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Analyse des risques, sécurisation Active Directory, gestion des accès, incidents et logs, PSSI, sensibilisation des utilisateurs, collaboration IT</li>
            <li>Systèmes & Réseaux : Windows Server 2022, Exchange Server 2019, Ubuntu, Kali Linux, Cisco, VMware</li>
            <li>Cybersécurité : analyse des risques, audit et pentesting, hacking éthique, sécurité cloud</li>
            <li>Bases de données : SGBD et gestion de bases de données</li>
            <li>Outils & Monitoring : Cisco Packet Tracer, Zabbix, Nagios, Microsoft Office</li>
            <li>Méthodologies & Pratiques : DevOps, veille technologique</li>
          </ul>
        </section>

        <motion.button
          onClick={() => router.push("/fr")}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px #0ff, 0 0 60px #0ff" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-8 py-3 mt-8 mb-12 bg-cyan-600 rounded-3xl font-semibold text-white drop-shadow-[0_0_25px_#0ff] border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300"
        >
          Retour aux Projets
        </motion.button>
      </motion.div>

      <motion.footer className="relative mt-4 text-sm text-gray-300 z-10 drop-shadow-[0_0_10px_#0ff] animate-flicker-footer">
        © 2025 Jesús Agudo Calvo — Portfolio
      </motion.footer>

      <style global jsx>{`
        @keyframes gradient {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
        .animate-gradient { background-size: 200% 200%; animation: gradient 30s ease infinite; }
        @keyframes flicker {0%,19%,21%,23%,25%,54%,56%,100%{opacity:1;}20%,22%,24%,55%{opacity:0.4;} }
        .animate-flicker { animation: flicker 5s infinite; }
        .animate-flicker-footer { animation: flicker 8s infinite; }
      `}</style>
    </div>
  );
}
