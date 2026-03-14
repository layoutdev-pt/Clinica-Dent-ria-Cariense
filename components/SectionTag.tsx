interface Props {
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
}

export default function SectionTag({ children, light, centered }: Props) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] mb-3 ${light ? "text-[#1C9FD6]" : "text-[#1C9FD6]"} ${centered ? "mx-auto" : ""}`}>
      <span className="w-5 h-0.5 bg-[#1C9FD6] rounded-full" />
      {children}
    </div>
  );
}
