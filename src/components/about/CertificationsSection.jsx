import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "./aboutAnimations";
import { certifications } from "./aboutData";
import SectionHeader from "./SectionHeader";

const CertificationsSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={staggerContainer}
    className="space-y-5"
  >
    <SectionHeader icon={Award} title="Certifications" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert) => (
        <motion.a
          key={cert.name}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 block"
        >
          <h3 className="text-slate-100 font-semibold">{cert.name}</h3>
          <p className="text-slate-400 text-sm mt-1">{cert.provider}</p>
        </motion.a>
      ))}
    </div>
  </motion.section>
);

export default CertificationsSection;
