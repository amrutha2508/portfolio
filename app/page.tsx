"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BiChevronRight,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMailSend
} from "react-icons/bi";
import { SiTableau } from 'react-icons/si';
import { GitHubCalendar } from 'react-github-calendar';

import { HiArrowDown } from "react-icons/hi";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-2xl m-3 md:m-8 z-50 space-y-8 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-md bg-black/80">
        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
          <h1 className="text-4xl">Amrutha K</h1>
          <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
            <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p>Available for work</p>
          </Button>
        </div>
        <div>
          <h3 className="text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Aspiring AI & Data Scientist with hands-on experience in ML and full-stack AI applications
          </h3>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300">
            I have hands-on experience with AI projects spanning NLP, multimodal models, RAG applications, data pipelines, and full-stack development, and I am eager to apply these skills to solve real-world challenges.
          </p>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300 text-sm italic">
            M.S. Statistics & Data Science · Rutgers University | Projects & internships with Uplifty AI and Bristol Myers Squibb | Skilled in Python, SQL, React, LLMs, RAG models
          </p>
        </div>
        <nav className="space-y-4">
          <h3 className="text-xl font-bold text-emerald-400">Menu</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/about" className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>About Me</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
              </BiChevronRight>
            </Link>

            <Link href="/work" className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>Projects</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
              </BiChevronRight>
            </Link>

            <Link href="/skills" className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>Skills</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
              </BiChevronRight>
            </Link>
            <Link href="/contact" className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>Awards & Certifications</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
              </BiChevronRight>
            </Link>

          </div>
          <div className="flex gap-2 items-center">
            <h3 className="text-xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">
              Check out my socials
            </h3>
            <HiArrowDown className="text-2xl text-sky-400"></HiArrowDown>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/amrutha2508">
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                <BiLogoGithub/> Github
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/amrutha-karuturi-017096245/">
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                <BiLogoLinkedin/> LinkedIn
              </Button>
            </a>
            <a href="https://public.tableau.com/app/profile/amrutha.k2872/vizzes">
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                <SiTableau /> Tableau
              </Button>
            </a>
            <a
              href="mailto:amrutha.k5637@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                <BiMailSend/>Email
              </Button>
            </a>
          </div>
          <div className=" bg-black/30 p-4 border border-gray-700/40 rounded-lg">
            <h1 className="pb-2">Github</h1>
            <hr className="pb-4"/>
            <GitHubCalendar username="amrutha2508" colorScheme="dark"
              theme={{dark: [
              "transparent",  // 0 contributions
              "#0e4429",
              "#006d32",
              "#26a641",
              "#39d353",
            ]}}
            />

          </div>
        </nav>
      </main>
    </div>
  );
}