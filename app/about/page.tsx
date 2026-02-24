
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className='hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer'>
            <BsArrowLeft className='ml-2'/>
          </Button>
        </Link>
        <div className='space-y-6'>
          <h1 className='text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500'>About Me</h1>
          {/* <div className='space-y-4 text-neutral-200 text-pretty tracking-tight'>
            <p>I am an aspiring AI and Data Science professional with a strong focus on building applied, production-ready machine learning systems. I recently completed my M.S. in Statistics – Data Science at Rutgers University, where my work spanned NLP, multimodal learning, large language models and data pipelines.</p>
          </div> */}
          <div className='space-y-4'>
            <h2 className='text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500'>Education</h2>
            <div className='space-y-2'>
              <p className='font-medium'>Masters of Science in Statistics - Data Science</p>
              <p className="text-neutral-500">Rutgers University, 2023-2025</p>
              <p className='text-sm italic text-neutral-400'>Statistical Modeling, Stat Learning, Neural Networks, Machine Learning, Data Structures and Algorithms(Python), Database Management, Data Wrangling (R), NLP, Data Mining.</p>
            </div>
            <div className='space-y-2'>
              <p className='font-medium'>B.Tech in Computer Science</p>
              <p className="text-neutral-500">Indian Institute of Technology Jodhpur, 2018-2022</p>
              <p className='text-sm italic text-neutral-400'>Data Structures and Algorithms, Object-Oriented Programming, Embedded Systems, Machine Learning.</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500'>Professional Experience</h2>
            <div className='space-y-4'>
              <div>
                <p className='font-bold text-lg'>IT/AI development Intern</p>
                <p className="text-neutral-500 mb-3">MIRA safety, Jan 2026-present</p>
                <ul className="list-disc list-inside space-y-2 mb-5 text-gray-400 text-sm italic">
                  <li>
                    Developing an AI-powered consultant chatbot using a stack including LangChain, LangGraph, RAG pipelines, LLM APIs, Express.js (backend), Supabase (database), and React Native (frontend) to deliver context-aware recommendations and structured retrieval workflows.
                  </li>
                  <li>
                    Write and maintain automated tests using Jest for the application and perform regular QA testing on the company website ensuring functionality, performance stability.
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-bold text-lg'>App Dev & AI/ML Engineer Intern | <a href="https://www.linkedin.com/in/amrutha-karuturi-017096245/overlay/Position/2714144815/treasury/?profileId=ACoAADyz0ZMBSdRAMiQwrkU8gi64p7QKAgNof10"><span className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 italic'>View Recommendation</span></a></p>
                <p className="text-neutral-500 mb-3">Uplifty AI, Aug 2025-present</p>
                <ul className="list-disc list-inside space-y-2 mb-5 text-gray-400 text-sm italic">
                  <li>
                    Contributed to full-stack development using  <span className="font-bold text-gray-300">React, JavaScript, Flask,
                    Supabase, and API integrations </span>to deliver a seamless user experience.
                  </li>
                  <li>
                    Built and fine-tuned machine learning pipelines—including <span className="font-bold text-gray-300">data ingestion,
                    preprocessing, and model training</span>—to personalize the app’s content
                    feed based on user activity.
                  </li>
                  <li>
                    Collaborated closely with product and UI/UX teams and worked in <span className="font-bold text-gray-300">agile sprints</span>, iterating on app features based on tester and product feedback.
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-bold text-lg'>Data Science Research Assistant | <a href="https://www.linkedin.com/in/amrutha-karuturi-017096245/details/recommendations/"><span className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 italic'>View Recommendation</span></a></p>
                <p className="text-neutral-500 mb-3">Bristol Myers Squibb & Rutgers University, Oct 2024-Dec 2024</p>
                <ul  className="list-disc list-inside space-y-2 text-gray-400 text-sm italic mb-5">
                  <li>Built an <span className="font-bold text-gray-300">data pipeline</span> to standardize and clean historical medical data, making it consistent and easier to use for analysis.</li>
                  <li>Designed a hierarchical ensemble combining <span className="font-bold text-gray-300">BioBERT, FastText embeddings, and neural networks</span>. Expanded training data from 32 to 45K+ samples through <span className="font-bold text-gray-300">data augmentation</span>.</li>
                  <li>Achieved: 42.2% classification accuracy. Prediction sets for 47.6% of records. Automated identification of 10.2% junk data. <span className="font-bold text-gray-300">Reduced manual review effort</span> and improved downstream data reliability</li>
                  <li><span className="font-bold text-gray-300">Collaborated with stakeholders</span> to gather business requirements, extract and analyze data, perform rigorous data cleaning, define key metrics, and deliver insightful reports.</li>
                </ul>
              </div>
              <div>
                <p className='font-bold text-lg'>Recitation Instructor</p>
                <p className="text-neutral-500 mb-3"> Data101 course, Rutgers University, Sep 2024-May 2025</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm italic mb-5">
                  <li><span className="font-bold text-gray-300">Explained data science concepts</span> in a clear and accessible way for students with <span className="font-bold text-gray-300">varying technical backgrounds</span>.</li>
                  <li>Developed practical instructional materials in <span className="font-bold text-gray-300">R programming</span>, guiding students through hands-on exercises.</li>
                  <li>Provided real-time support and supervision for a class of 50 students, helping them solve problems and understand key concepts.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page