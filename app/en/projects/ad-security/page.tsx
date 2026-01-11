"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ADSecurity() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white p-8 overflow-hidden">

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#0b0c10] via-[#0f1923] to-[#09121a]"></div>
      </div>

      {/* Main container */}
      <motion.div 
        className="relative z-10 max-w-5xl w-full flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_25px_#0ff] animate-flicker">
          AD Security Project
        </motion.h1>

        {/* Mini description */}
        <motion.p className="text-gray-400 text-center max-w-2xl mb-6 drop-shadow-[0_0_10px_#0ff]">
          Improvement and hardening of the Active Directory infrastructure at Georges Daumezon Hospital, ensuring user roles and permissions are properly secured.
        </motion.p>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          <motion.div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Error Fixing</h3>
            <p className="text-gray-300 text-sm">Resolved misconfigurations and incorrect permissions within Active Directory.</p>
          </motion.div>

          <motion.div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Security Level 2</h3>
            <p className="text-gray-300 text-sm">Achieved security level 2 with properly defined roles and access control.</p>
          </motion.div>

          <motion.div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Documentation</h3>
            <p className="text-gray-300 text-sm">Documented all changes to ensure traceability and compliance for future audits.</p>
          </motion.div>

          <motion.div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_#0ff] hover:shadow-[0_0_40px_#0ff] transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Collaboration</h3>
            <p className="text-gray-300 text-sm">Worked closely with the IT team and external provider for higher security levels.</p>
          </motion.div>
        </div>

        {/* Back button */}
        <motion.button
          onClick={() => router.push("/en")}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 mt-4 bg-cyan-500 rounded-3xl font-semibold drop-shadow-[0_0_15px_#0ff] transition-all duration-300"
        >
          Back to Projects
        </motion.button>
      </motion.div>
	
	{/* Footer */}
	<motion.footer className="relative mt-16 text-sm text-gray-300 z-10 drop-shadow-[0_0_10px_#0ff] animate-flicker-footer">
        © 2025 Jesús Agudo Calvo — Portfolio
      </motion.footer>


      {/* Global styles */}
      <style global jsx>{`
        @keyframes gradient {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
        .animate-gradient { background-size: 200% 200%; animation: gradient 30s ease infinite; }
        @keyframes flicker {0%,19%,21%,23%,25%,54%,56%,100%{opacity:1;}20%,22%,24%,55%{opacity:0.4;}}
        .animate-flicker { animation: flicker 5s infinite; }
      `}</style>
    </div>
  );
}
