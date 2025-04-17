import Image from 'next/image'
import { BR } from 'country-flag-icons/react/3x2'

export default function Page() {
  return (
    <section className="p-3">
      <div className="flex gap-6 items-center mb-6">
        <Image
          src="/profile.png"
          width={100}
          height={100}
          alt="Irineu Brito's profile picture"
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Irineu Brito
          </h1>
          <h1>Fullstack Developer</h1>
        </div>
        <a href="/" className="text-sm text-blue-600 underline ml-auto flex items-center gap-1">
          <BR className="w-4 h-4" />
          PT
        </a>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>
          Bilingual Fullstack Developer with solid experience in modern frontend and backend, including Angular, NestJS, React, and Python. I deliver scalable solutions focusing on performance, AI, and cloud computing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        <ul className="list-disc ml-5">
          <li className='mb-5'>
            <strong>SIDIA - Institute of Science and Technology</strong> (02/2025 - Present) – Python, NLP, LLMs, AI (Internship)<br/>
            Part-time - Manaus-AM (On-site)<br/>
            Working on developing internal Python tools focused on process automation and workflows. Built data pipelines to feed language models (LLMs), applying NLP techniques and data analysis with Pandas. Participated in the conception of an integrated AI platform, as well as fine-tuning models for contextual responses.
          </li>
          <li className='mb-5'>
            <strong>Vizo.dev</strong> (01/2025 - 04/2025) – Fullstack (NestJS, Angular, GCP, i18n)<br/>
            (Freelance) Jerusalem, Israel (Remote)<br/>
            Developed fullstack applications using Angular, NestJS, and Typescript. Integrated messaging services (Sendinblue), managed GCP resources, and implemented internationalization (i18n) features to support multiple languages. Collaborated with international teams in an agile and remote environment.
          </li>
          <li className='mb-5'>
            <strong>StringSX</strong> (01/2023 - 01/2025) – Node.js, React, AWS, LLM<br/>
            (Contract) Manaus-AM (Remote)<br/>
            Participated in various projects developing fullstack solutions with React, Angular, Node.js, NestJS, and Python. Worked with e-commerce integration via WooCommerce, LLMs for image data processing (Gemini), and AWS infrastructure deployment (EC2, S3, CloudFront). Automated environments with Docker and managed PostgreSQL databases.
          </li>
          <li>
            <strong>Fatsus</strong> (06/2022 - 12/2022) – Angular, Python, SUS<br/>
            (Contract) Manaus-AM (Remote)<br/>
            Developed and maintained healthcare sector applications using Angular in the frontend and Node.js/Python in the backend. Worked on billing system integrations for SUS (Brazilian Universal Healthcare System) and continuous improvements for clinics and laboratories.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <ul className="list-disc ml-5">
          <li>Frontend: HTML, CSS, JavaScript, Angular, React, Redux, Styled Components, SASS, RXJS, Material</li>
          <li>Backend: Node.js, NestJS, Python, FastAPI, TypeORM, Sequelize, Prisma, SQLAlchemy</li>
          <li>Databases: PostgreSQL, MongoDB, Firebase</li>
          <li>DevOps & Infrastructure: AWS (EC2, S3), GCP, Docker, VPS, Git, GitHub, Elastic</li>
          <li>Messaging: Sendinblue/Brevo</li>
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
        <p>Bachelor's Degree in Software Engineering – Anhanguera University (2023 - 2026)</p>
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