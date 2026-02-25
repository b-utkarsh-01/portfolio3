import ShinyText from "../../ShinyText";
import { badgeName } from "../../about/aboutData";

const BrandLink = () => {
  return (
    <a
      href="#top"
      className="flex h-10 min-w-12 max-w-[44vw] items-center justify-center truncate rounded-xl border border-zinc-600/80 bg-zinc-800 px-3 text-xl font-bold tracking-wide sm:h-12 sm:max-w-[280px] sm:min-w-14 sm:px-4 sm:text-3xl md:max-w-none"
    >
      <ShinyText text={badgeName.name} />
    </a>
  );
};

export default BrandLink;
