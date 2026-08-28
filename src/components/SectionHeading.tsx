interface SectionHeadingProps {
  num: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({ num, title, align = "left" }: SectionHeadingProps) {
  if (align === "center") {
    return (
      <div className="flex flex-col items-center gap-2 mb-14 text-center">
        <span className="font-mono text-accent text-sm">{num}</span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text">{title}</h2>
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-cyan mt-1" />
      </div>
    );
  }

  return (
    <div className="section-heading">
      <span className="num">{num}</span>
      <h2>{title}</h2>
      <div className="line" aria-hidden="true" />
    </div>
  );
}
