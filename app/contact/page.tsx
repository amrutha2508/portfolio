import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BsArrowLeft } from "react-icons/bs"
import skillsData from '../data/awards.json'
import {  BiChevronRight } from "react-icons/bi";


const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
       <main className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
          <Link href="/">
            <Button variant="ghost" className='hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer'>
              <BsArrowLeft className='ml-2'/>
            </Button>
          </Link>
          <div className="space-y-6">
            <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to -blue-500">
              Awards & Certifications
            </h1>
            <div className="space-y-8">
              {skillsData.categories.map((category)=>(
                <div key={category.name} className="space-y-4">
                  <h2 className="text-2xl">{category.name}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {category.details.map((skill) => (
                      <div key={skill.name}  className="p-4 hover:bg-zinc-800/40 rounded-lg border border-gray-700/50 bg-black/40">
                        <Link href={skill.link} className="w-full h-full flex group items-center justify-between cursor-pointer transition-colors duration-200 ease-linear rounded-lg">
                          <span>{skill.name}</span>
                          <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
                          </BiChevronRight>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
       </main>
    </div>
  )
}

export default page