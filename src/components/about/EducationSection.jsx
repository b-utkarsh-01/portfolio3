import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeInUp } from "./aboutAnimations";
import SectionHeader from "./SectionHeader";

const EducationSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeInUp}
    className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 sm:p-7"
  >
    <SectionHeader icon={GraduationCap} title="Education" subtitle="Expected Graduation: June 2026" />
    <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950/50 p-4">
      <h3 className="text-base sm:text-lg text-slate-100 font-semibold">
        Shri Vaishnav Vidhyapeeth Vishawvidhyalya, Indore
      </h3>
      <p className="text-slate-400 text-sm sm:text-base mt-1">
        Bachelor of Technology, Computer Science & Engineering
      </p>
    </div>
  </motion.section>
);

export default EducationSection;
