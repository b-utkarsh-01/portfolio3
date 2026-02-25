import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./aboutAnimations";
import { skills, sectionIcons, skillGroupIcons, skillIcons } from "./aboutData";
import SectionHeader from "./SectionHeader";
import Pill from "./Pill";

const SkillsSection = () => {
  const groups = [
    {
      title: "Programming",
      icon: skillGroupIcons.programming,
      list: skills.programming,
      textClassName: "text-cyan-200 group-hover:text-cyan-100",
      iconClassName: "text-cyan-400 group-hover:text-cyan-300",
      hoverClassName: "hover:border-cyan-400/60 hover:bg-cyan-500/10",
    },
    {
      title: "Frontend",
      icon: skillGroupIcons.frontend,
      list: skills.frontend,
      textClassName: "text-fuchsia-200 group-hover:text-fuchsia-100",
      iconClassName: "text-fuchsia-400 group-hover:text-fuchsia-300",
      hoverClassName: "hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10",
    },
    {
      title: "Backend",
      icon: skillGroupIcons.backend,
      list: skills.backend,
      textClassName: "text-emerald-200 group-hover:text-emerald-100",
      iconClassName: "text-emerald-400 group-hover:text-emerald-300",
      hoverClassName: "hover:border-emerald-400/60 hover:bg-emerald-500/10",
    },
    {
      title: "Databases",
      icon: skillGroupIcons.databases,
      list: skills.databases,
      textClassName: "text-indigo-200 group-hover:text-indigo-100",
      iconClassName: "text-indigo-400 group-hover:text-indigo-300",
      hoverClassName: "hover:border-indigo-400/60 hover:bg-indigo-500/10",
    },
    {
      title: "API",
      icon: skillGroupIcons.api,
      list: skills.api,
      textClassName: "text-amber-200 group-hover:text-amber-100",
      iconClassName: "text-amber-400 group-hover:text-amber-300",
      hoverClassName: "hover:border-amber-400/60 hover:bg-amber-500/10",
    },
    {
      title: "Cloud & Tools",
      icon: skillGroupIcons.cloudTools,
      list: skills.cloud,
      textClassName: "text-orange-200 group-hover:text-orange-100",
      iconClassName: "text-orange-400 group-hover:text-orange-300",
      hoverClassName: "hover:border-orange-400/60 hover:bg-orange-500/10",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="space-y-5"
    >
      <SectionHeader icon={sectionIcons.skills} title="Skills" subtitle="Core stack and tooling" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(
          ({ title, icon: Icon, list, textClassName, iconClassName, hoverClassName }) => (
          <motion.div
            key={title}
            variants={fadeInUp}
            className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
          >
            <h3 className="text-slate-100 font-semibold flex items-center gap-2 mb-3">
              <Icon className="w-4 h-4 text-orange-400" />
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {list.map((item) => (
                <Pill
                  key={item}
                  text={item}
                  icon={skillIcons[item]}
                  textClassName={textClassName}
                  iconClassName={iconClassName}
                  hoverClassName={hoverClassName}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
