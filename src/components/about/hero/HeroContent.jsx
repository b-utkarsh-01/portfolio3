import Pill from "../Pill";
import TextType from '../../../components/TextType';
import DecryptedText from '../../../components/DecryptedText';
import HeroClock from "./HeroClock";
import ProfileName from "./ProfileName";
import { contactIcons } from "../aboutData";

const HeroContent = ({ profile, shortSummary }) => {
  return (
    <div className="space-y-5 text-left">
      <div className="flex w-full items-start justify-between gap-3">
        <ProfileName name={profile.name} />
        <HeroClock className="mt-1 lg:hidden" />
      </div>
      <TextType
        text={profile.title}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
        className="hero-text-animate text-xl sm:text-[2rem] leading-tight text-slate-300 font-semibold"
      />
      <div className="text-slate-400 text-lg leading-relaxed max-w-3xl font-mono">
        <DecryptedText
          text={shortSummary}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
      </div>

      <div className="hero-text-animate flex flex-wrap gap-2">
        {profile.highlights.slice(0, 3).map((highlight) => (
          <Pill key={highlight} text={highlight} />
        ))}
      </div>

      <div className="hero-text-animate flex flex-wrap items-center gap-2 ">
        {profile.contacts?.map((contact) => {
          const Icon = contactIcons[contact.type];
          return (
            <a
              key={contact.href}
              href={contact.href}
              className="inline-flex cursor-none"
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              aria-label={contact.text}
              title={contact.text}
            >
              <Pill icon={Icon} iconOnly />
            </a>
          );
        })}
      </div>

    </div>
  );
};

export default HeroContent;
