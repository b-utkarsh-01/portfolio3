const Pill = ({
  text,
  icon: Icon,
  textClassName = "text-slate-200",
  iconClassName = "text-slate-300",
  hoverClassName = "hover:border-slate-500 hover:bg-slate-800/80",
}) => (
  <span
    className={[
      "group inline-flex items-center gap-1.5 rounded-full border border-slate-600",
      "bg-slate-900/80 px-3 py-1 text-xs sm:text-sm transition-all duration-200",
      "hover:scale-105",
      hoverClassName,
    ].join(" ")}
  >
    {Icon ? (
      <Icon
        className={[
          "h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-125",
          iconClassName,
        ].join(" ")}
      />
    ) : null}
    <span className={textClassName}>{text}</span>
  </span>
);

export default Pill;
