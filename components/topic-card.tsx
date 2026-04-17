import { ArrowRight, FileText } from "lucide-react"; // Common icons
import Image from "next/image";
import type { ReactNode } from "react";

interface TopicCardProps {
  logoSrc: string;
  logoAlt?: string; 
  topicName: string; 
}

export default function TopicCard({
  logoSrc,
  topicName,
}: TopicCardProps) {
  return (
    <div className="group relative w-full rounded-[2rem] bg-blue-600/95 p-6 shadow-[inset_0_2px_12px_rgba(255,255,255,0.1)] transition-all hover:bg-blue-600">
      <div className="rounded-[1.75rem] border border-white/50 bg-white p-5 shadow-inner transition-transform group-hover:scale-[1.01]">
        <div className="flex flex-col items-start gap-4">
<div className="flex aspect-[1.5] w-24 items-center justify-center rounded-xl bg-slate-50 p-2 border border-slate-100/70">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={96} 
              height={64}
              className="object-contain" 
              priority={true} />
          </div>
          <h3 className="text-4xl font-extrabold tracking-tighter text-slate-950 sm:text-5xl">
            {topicName}
          </h3>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-700/80 px-4 py-1.5 text-blue-100 opacity-0 transition-opacity group-hover:opacity-100">
        <FileText className="size-4" />
        <span className="text-sm font-medium">View PDF</span>
        <ArrowRight className="size-4 -rotate-45" />
      </div>
    </div>
  );
}