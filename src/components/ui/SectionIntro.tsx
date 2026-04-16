type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({ eyebrow, title, description, className = "" }: SectionIntroProps) {
  return (
    <div className={`max-w-3xl space-y-4 ${className}`}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-blue-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-zinc-600 dark:text-zinc-300">{description}</p> : null}
    </div>
  );
}
