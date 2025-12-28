import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BiLogoGithub } from "react-icons/bi"
import { CgExternal } from "react-icons/cg"
import { BsArrowLeft } from "react-icons/bs"
import projectsData from '../data/projects.json'


const page = () => {
  const {projects} = projectsData
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-6xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <div className="relative flex justify-center">
          <Link href="/">
            <Button 
              variant="ghost"
              className="hover:bg-black absolute left-0 hover:text-white rounded-full duration-300 mb-5 cursor-pointer"
            >
              <BsArrowLeft className="ml-2"/>
            </Button>
          </Link>
          <h1 className='text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500'>My Work</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project)=>(
            <div key={project.id} className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70  bg-slate-900/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={project.image} alt={project.title}
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-110">
                </Image>
              </div>
              <div className="p-6 flex flex-col justify-between text-gray-100">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <hr className="h-1 border-0 bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500" />
                  <p className="text-grau-300 mg-4 mt-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-4">
                    {project.tags.map((tag,index)=>(
                      <span key={index} className="px-2 py-1 text-sm rounded-full bg-slate-800/50 text-gray-300 border border-neutral-800/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className=" flex-1 text-white bg-black backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear" asChild>
                    <a href={project.github}>
                      <BiLogoGithub className="h-4 w-4 mr-2"/>
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" className=" flex-1 text-gray-300 backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear" asChild>
                    <a href={project.details}>
                      <CgExternal className="mr-2 h-4 w-4"/>
                      Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}

export default page