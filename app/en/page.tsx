'use client'

import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { BR } from 'country-flag-icons/react/3x2'
import { MdEmail, MdContentCopy } from 'react-icons/md'
import { FaMedium, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { useState } from 'react'

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('irineutech2025@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="p-3">
      <div className="flex gap-6 items-start mb-6">
        <div className="flex-1 align-center">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/profile.png"
                width={100}
                height={100}
                alt="Irineu Brito profile picture"
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold tracking-tight">
                  Irineu Brito
                </h1>
                <h1>AI & Fullstack Developer</h1>
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full md:w-auto">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                <FaGithub className="w-4 h-4" />
                <a href='https://github.com/irineub' className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  irineub
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                <FaLinkedin className="w-4 h-4" />
                <a href='https://www.linkedin.com/in/irineu-brito/' className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  irineu-brito
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                <FaMedium className="w-4 h-4" />
                <a href='https://medium.com/@irineutech2025' className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  @irineutech2025
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                <MdEmail className="w-4 h-4" />
                <button 
                  onClick={copyToClipboard}
                  className="text-blue-600 hover:underline text-sm flex items-center gap-2 relative"
                >
                  irineutech2025@gmail.com
                  <MdContentCopy className="w-4 h-4" />
                  {copied && <span className="absolute -right-16 text-green-500 text-xs whitespace-nowrap">Copied!</span>}
                </button>
              </div>
            </div>

            <div className="absolute top-3 right-3 md:relative md:top-0 md:right-0">
              <a href="/" className="text-sm text-blue-600 underline flex items-center gap-1">
                <BR className="w-4 h-4" />
                PT
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>
          AI and Backend Engineer with 3+ years of experience building scalable web applications for national and international companies. Proficient in Python, Node.js, NestJS, and modern AI technologies such as CrewAI, LangGraph, and Multi-Agent Systems. Strong background in NLP, RAG, and LLM-based solutions. Skilled with SQL/NoSQL databases, cloud infrastructure (AWS, GCP), Docker, and DevOps practices. Fluent in English (C2) and experienced in remote, agile, and multicultural teams.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        <ul className="list-disc ml-5">
          <li className='mb-5'>
            <strong>SIDIA – Institute of Science and Technology</strong> (Feb 2025 – Present)<br />
            <em>Python Developer – AI Internship</em><br />
            Built internal tools to automate workflows using AI; developed advanced multi-agent systems with CrewAI and LangGraph; implemented NLP pipelines with Pandas and contributed to RAG-based solutions for enterprise use.
          </li>
          <li className='mb-5'>
            <strong>VIZO</strong> (Jan 2025 – Apr 2025)<br />
            <em>Fullstack Developer – Freelancer</em><br />
            Developed fullstack applications using Angular and NestJS; implemented Sendinblue messaging and GCP services; supported internationalization (i18n) for multilingual platforms; worked remotely with global teams.
          </li>
          <li className='mb-5'>
            <strong>StringSX</strong> (Jan 2023 – Jan 2025)<br />
            <em>Fullstack Developer</em><br />
            Delivered fullstack solutions using React, Angular, Node.js, NestJS; integrated WooCommerce; developed AI solutions with Gemini for image data processing; deployed to AWS and automated environments with Docker.
          </li>
          <li>
            <strong>Fatsus</strong> (Jun 2022 – Dec 2022)<br />
            <em>Fullstack Developer</em><br />
            Built and maintained healthcare systems using Angular and Python; integrated SUS billing systems; enhanced legacy systems and ensured data security and stability.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <ul className="list-disc ml-5">
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript</li>
          <li><strong>Frontend:</strong> Angular, React</li>
          <li><strong>Backend:</strong> Node.js, NestJS, Express.js, FastAPI</li>
          <li><strong>Databases:</strong> PostgreSQL (Sequelize, TypeORM), MongoDB (Mongoose), MySQL, Firebase</li>
          <li><strong>Testing:</strong> Jest, Pytest</li>
          <li><strong>APIs:</strong> REST, WebSockets, OpenAPI/Swagger</li>
          <li><strong>Infrastructure:</strong> AWS, GCP, Docker, VPS, Git, GitHub</li>
          <li><strong>AI & Data:</strong> CrewAI, LangGraph, NLP, RAG, LLMs, Prompt Engineering, Pandas</li>
          <li><strong>Best Practices:</strong> Clean Code, SOLID, Agile (Scrum, Jira)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <ul className="list-disc ml-5">
          <li><a className="text-blue-600 underline" href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1061807" target="_blank" rel="noopener noreferrer">Scrum Fundamentals Certified (SFC)</a></li>
          <li><a className="text-blue-600 underline" href="https://cert.efset.org/tApNGj" target="_blank" rel="noopener noreferrer">EF SET English Certificate – Score: 81/100 (C2 Proficient)</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>Bachelor's Degree in Software Engineering – Anhanguera University (2023 – 2026)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Courses</h2>
        <p>CS50 – Computer Science, Harvard University (May 2025 – Dec 2025)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Languages</h2>
        <ul className="list-disc ml-5">
          <li>Portuguese (Native)</li>
          <li>English (C2 – Proficient)</li>
          <li>Spanish (Basic)</li>
        </ul>
      </section>
    </section>
  )
}
