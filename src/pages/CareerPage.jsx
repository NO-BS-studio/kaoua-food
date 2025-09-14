import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import { FlagButton } from "../components/Navbar";
import MobileNav from "../components/MobileNav";
const jobs = [
  {
    title: "Expert Comptable",
    location: "On site - Boumerdes",
    type: "CDI / Temlps plein",
    isNew: true,
    missions: [
      "Prise en charge et supervision d’un portefeuille clients (comptabilité, fiscalité, juridique)",
      "Encadrement et supervision d’une équipe de collaborateurs comptables",
      "Conseil stratégique auprès des clients (optimisation fiscale, gestion, investissement, etc.)",
      "Revue et validation des bilans et liasses fiscales",
      "Veille réglementaire et participation au développement du cabinet",
    ],
    profile: [
      "Diplôme d’Expertise Comptable (DEC) obligatoire",
      "Expérience confirmée en cabinet (minimum 5 ans)",
      "Maîtrise des outils comptables (Quadra, Cegid, etc.)",
      "Sens du service client, rigueur, leadership et esprit d’équipe",
      "Bonnes capacités d’analyse et de synthèse",
    ],
  },
  {
    title: "Designer Graphique",
    location: "Hybride - Boumerdes",
    type: "CDD / Temlps partiel",
    isNew: true,
    missions: [
      "Création de supports graphiques pour print et digital",
      "Participation aux campagnes marketing",
    ],
    profile: [
      "Maîtrise de Photoshop/Illustrator",
      "Créativité et sens du détail",
    ],
  },
  {
    title: "Adjoint Secretaire",
    location: "On site - Boumerdes",
    type: "CDI / Temlps plein",
    isNew: false,
    missions: ["Gestion de l'agenda", "Accueil et communication"],
    profile: ["Bonne communication", "Organisation"],
  },

];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [showDetailsMobile, setShowDetailsMobile] = useState(false);

  return (
    <div className="flex flex-col md:h-screen  w-full h-[100vh] bg-[#faf7f0] ">
        <MobileNav/>
      <div className="flex ">
        {/* LEFT SIDE: JOB LIST */}
        <div className="md:w-[60vw] h-screen w-full  md:overflow-y-auto overflow-y-scroll flex flex-col gap-[2vw] p-[3vw] md:p-[2vw]">
          <div className="md:mb-[2vw] mb-[5vw] flex w-full md:justify-start justify-center items-center">
            <img src="/logos/kaoua_logo.png" alt="Logo" className="" />
          </div>

          <h1 className="text-[6vw] md:text-[3vw] font-bold">Carrière</h1>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setSelectedJob(job);
                if (window.innerWidth < 768) setShowDetailsMobile(true);
              }}
              className={`relative cursor-pointer p-[4vw] md:p-[1.5vw] rounded-2xl shadow-md transition-all duration-300 ${
                selectedJob.title === job.title
                  ? "bg-white border-2 border-black"
                  : "bg-white/70"
              }`}
            >
              <h2 className="text-[4vw] md:text-[1.2vw] font-semibold">
                {job.title}
              </h2>
              <p className="text-[3vw] md:text-[0.8vw] opacity-70">
                {job.location}
              </p>
              <p className="text-[3vw] md:text-[0.8vw] opacity-70">
                Type de contrat: {job.type}
              </p>
              {job.isNew && (
                <span className="absolute top-[1vw] right-[1vw] bg-orange-500 text-white text-[2.5vw] md:text-[0.7vw] px-[2vw] md:px-[0.5vw] py-[0.5vw] md:py-[0.2vw] rounded-lg">
                  NOUVEAU
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE: JOB DETAILS (Desktop) */}
        <div
          className="hidden md:flex flex-col w-[65vw] p-[3vw] gap-[1vw]"
          style={{ backgroundImage: `url("/backgrounds/transparent_bg.png")` }}
        >
          <div className="flex w-full justify-between mb-[2vw]">
            {" "}
            <nav className="md:flex hidden gap-10 text-black text[2vw] bg-[#5A3726]/10 px-10 py-2 rounded-full">
              <a href="/" className="text-black text-[1vw] text-center">
                ACCUEUIL
              </a>
              <a href="/produits" className="text-black text-[1vw] text-center">
                NOS PRODUITS
              </a>
              <a href="/carriere" className="text-black text-[1vw] text-center">
                CARRIERE
              </a>
              <a href="/contact" className="text-black text-[1vw] text-center">
                CONTACT
              </a>
            </nav>
            <div className="md:flex hidden gap-4">
              <FlagButton code="fr" borderColor="border-black" />
              <FlagButton code="en" borderColor="border-black" />
            </div>
          </div>

          <h2 className="text-[2vw] font-bold">{selectedJob.title}</h2>
          <h3 className="text-[1.5vw] font-semibold">Missions principales :</h3>
          <ul className="list-disc pl-[2vw] text-[1vw]">
            {selectedJob.missions.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
          <h3 className="text-[1.5vw] font-semibold mt-[1vw]">
            Profil recherché :
          </h3>
          <ul className="list-disc pl-[2vw] text-[1vw]">
            {selectedJob.profile.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <button className="mt-[2vw] bg-red-500 text-white text-[1vw] px-[2vw] py-[1vw] rounded-full self-start">
            POSTULER MAINTENANT
          </button>
        </div>

        {/* MOBILE: FULL PAGE DETAILS */}
        <AnimatePresence>
          {showDetailsMobile && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-[#faf7f0] p-[10vw] overflow-y-scroll z-40 "
              style={{
                backgroundImage: `url("/backgrounds/transparent_bg.png")`,
              }}
            >
              <div className=" mb-[10vw] flex w-full md:justify-start justify-center items-center">
                <img src="/logos/kaoua_logo.png" alt="Logo" className="" />
              </div>
              <div className="flex items-center gap-[3vw] mb-[5vw]">
                <BiArrowBack
                  className="w-[6vw] h-[6vw] cursor-pointer"
                  onClick={() => setShowDetailsMobile(false)}
                />
                <h2 className="text-[5vw] font-bold">{selectedJob.title}</h2>
              </div>

              <h3 className="text-[4vw] font-semibold mb-[2vw]">
                Missions principales :
              </h3>
              <ul className="list-disc pl-[5vw] text-[3.5vw]">
                {selectedJob.missions.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>

              <h3 className="text-[4vw] font-semibold mt-[4vw] mb-[2vw]">
                Profil recherché :
              </h3>
              <ul className="list-disc pl-[5vw] text-[3.5vw]">
                {selectedJob.profile.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <button className="mt-[5vw] w-full bg-red-500 text-white text-[4vw] px-[5vw] py-[3vw] rounded-full">
                POSTULER MAINTENANT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
