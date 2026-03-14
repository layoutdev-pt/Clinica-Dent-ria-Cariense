import Image from "next/image";

interface Props {
  name: string;
  role: string;
  img: string;
}

export default function TeamCard({ name, role, img }: Props) {
  return (
    <div className="text-center group">
      <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] mb-4">
        <Image src={img} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
          <div className="flex gap-2">
            {["facebook", "instagram"].map((s) => (
              <a key={s} href="#" aria-label={s} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#1C9FD6] transition-colors duration-200">
                {s === "facebook" ? (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                ) : (
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-[#1C9FD6] font-bold text-sm mb-0.5">{name}</div>
      <div className="text-[#5E7387] text-xs">{role}</div>
    </div>
  );
}
