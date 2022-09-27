export interface ContainerProps {
  // The usual React Child nodes
  children: string | React.ReactNode;
  // Extra section classes
  ExtraClasses?: string;
}

export default function Container({
  children,
  ExtraClasses = "",
}: ContainerProps) {
  return (
    <div className={`container px-8 lg:px-16 mx-auto ${ExtraClasses}`}>
      {children}
    </div>
  );
}
