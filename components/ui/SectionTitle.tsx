type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl font-bold mb-12 tracking-tight">{children}</h2>;
}
