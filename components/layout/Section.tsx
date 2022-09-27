export interface SectionProps {
  // The usual React Child nodes
  children: string | React.ReactNode;
  // Extra section classes
  ExtraClasses?: string;
}

export default function Section({ children, ExtraClasses = "" }: SectionProps) {
  return (
    <section className={`w-full max-w-full py-10 lg:py-20 ${ExtraClasses}`}>
      {children}
    </section>
  );
}