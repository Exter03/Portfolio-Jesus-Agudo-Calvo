"use client"; 
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function SpanishHome() {
  const router = useRouter();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white overflow-hidden p-8">

      {/* Fondo degradado animado */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#0b0c10] via-[#0f1923] to-[#09121a]"></div>
      </div>

      {/* Partículas */}
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

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center p-8 w-full max-w-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título */}
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          Jesús Agudo Calvo
        </motion.h1>

        {/* Botón Sobre mí */}
        <motion.button
          onClick={() => router.push("/es/about")}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px #a0f, 0 0 60px #a0f" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-8 py-3 mb-10 mt-10 bg-purple-600 rounded-3xl font-semibold text-white drop-shadow-[0_0_25px_#a0f] border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 animate-pulse"
        >
          Sobre mí
        </motion.button>

        {/* Subtítulo proyectos */}
        <motion.h2 className="relative text-xl md:text-2xl text-gray-300 mb-4 z-10 drop-shadow-[0_0_15px_#0ff]">
          Mis proyectos
        </motion.h2>

        {/* Mini descripción */}
        <motion.p className="relative text-gray-400 text-center max-w-2xl mb-6 z-10 drop-shadow-[0_0_10px_#0ff]">
          Aquí encontrarás competencias y experiencias profesionales.
        </motion.p>

        {/* Subtítulo Hospital */}
        <motion.h3 className="relative text-xl md:text-2xl text-gray-300 mb-6 z-10 drop-shadow-[0_0_15px_#0ff]">
         Hospital Georges Daumezon
        </motion.h3>

        {/* Tarjetas de proyectos */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 w-full max-w-6xl">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/es/proyectos/ad-seguridad")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Proyecto AD Seguridad</h3>
            <p className="text-gray-300 text-sm">Mejoras en Active Directory para seguridad y permisos.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/es/proyectos/auditoria-redes")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Auditoría de Redes</h3>
            <p className="text-gray-300 text-sm">Auditoría de red interna para detectar vulnerabilidades.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900 p-6 rounded-3xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] cursor-pointer transition-all duration-300"
            onClick={() => router.push("/es/proyectos/monitoreo")}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Monitoreo Ciberseguridad</h3>
            <p className="text-gray-300 text-sm">Implementación de sistemas de monitorización y alertas en tiempo real.</p>
          </motion.div>
        </div>

        {/* Botón volver a página principal */}
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.05 }}
          className="relative z-10 px-6 py-2 mt-12 bg-cyan-500 rounded-2xl shadow-[0_0_15px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300"
        >
          Volver a inicio
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

