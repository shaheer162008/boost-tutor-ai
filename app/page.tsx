import { Button } from "@/components/ui/button";
import { BookOpen, ChevronsUpDown, PanelLeft } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 flex justify-center items-center">
      <section className="w-full max-w-5xl">
        <div className="flex flex-col rounded-xl bg-blue-500 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 px-1">
            <button className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm transition-colors hover:bg-slate-50">
               <Image src="/logo.png" alt="Logo" className="h-[18px] w-auto object-contain" width={100} height={100} />
               <span className="text-[15px] font-bold text-[#2c2c2c] tracking-tight">Forces and Matter</span>
               <PanelLeft className="h-5 w-5 text-[#2c2c2c] ml-1" strokeWidth={1.5} />
            </button>            
            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm transition-colors hover:bg-slate-50">
              <BookOpen className="h-[18px] w-[18px] text-blue-500" strokeWidth={2} />
              <span className="text-[15px] font-bold text-[#2c2c2c]">Past Papers</span>
              <ChevronsUpDown className="h-4 w-4 text-[#2c2c2c] ml-1" strokeWidth={2.5} />
            </button>
          </div>
          <div className="relative mx-auto w-full aspect-[1/1.41] overflow-hidden rounded-2xl bg-white border-[8px] border-white shadow-2xl">
            <iframe
              src="/q13-dragged-1.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="absolute -top-2 -left-2 h-[calc(100%+16px)] w-[calc(100%+16px)] border-none bg-white outline-none"
              style={{ overflow: 'hidden' }}
              scrolling="no"
            />
          </div>
          <div className="h-8" />
        </div>
      </section>
    </main>
  );
}