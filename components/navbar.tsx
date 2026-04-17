import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 xl:px-0">
        <Link href="/" className="flex items-center gap-1">
          <div className="relative h-16 w-16">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-3xl font-semibold tracking-tight">
            BoostTutor<span className="text-blue-500">AI</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <Link 
              href="#maths" 
              className="text-[17px] text-[#2c2c2c] transition-colors duration-200 hover:text-gray-500 font-[family-name:var(--font-inter)]"
            >
              Maths
            </Link>
            <Link 
              href="#physics" 
              className="text-[17px] text-[#2c2c2c] transition-colors duration-200 hover:text-gray-500 font-[family-name:var(--font-inter)]"
            >
              Physics
            </Link>
            <Link 
              href="#biology" 
              className="text-[17px] text-[#2c2c2c] transition-colors duration-200 hover:text-gray-500 font-[family-name:var(--font-inter)]"
            >
              Biology
            </Link>
            <Link 
              href="#chemistry" 
              className="text-[17px] text-[#2c2c2c] transition-colors duration-200 hover:text-gray-500 font-[family-name:var(--font-inter)]"
            >
              Chemistry
            </Link>
          </nav>
          
          <Link 
            href="/signup" 
            className="rounded-[30px] border border-blue-500 px-6 py-[10px] text-[17px] text-[#2c2c2c] transition-all duration-200 hover:bg-blue-500 hover:text-white font-[family-name:var(--font-inter)]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}