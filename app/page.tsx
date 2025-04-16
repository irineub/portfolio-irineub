import { useState } from 'react'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt')

  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          {lang === 'pt' ? 'Portfólio de Irineu Brito' : 'Irineu Brito Portfolio'}
        </h1>
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="text-sm text-blue-600 underline"
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>

      {lang === 'pt' ? (
        <>
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Sobre Mim</h2>
            <p>
              Desenvolvedor Fullstack bilíngue com sólida experiência em frontend e backend modernos, incluindo Angular, NestJS, React e Python. Entrego soluções escaláveis com foco em performance, IA e cloud computing.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Experiência Profissional</h2>
            <ul className="list-disc ml-5">
              <li><strong>SIDIA</strong> (02/2025 - Atual) – Python, NLP, LLMs, IA</li>
              <li><strong>Vizo.dev</strong> (01/2025 - 04/2025) – Fullstack (NestJS, Angular, GCP, i18n)</li>
              <li><strong>StringSX</strong> (01/2023 - 01/2025) – Node.js, React, AWS, LLM</li>
              <li><strong>Fatsus</strong> (06/2022 - 12/2022) – Angular, Python, SUS</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Skills Técnicas</h2>
            <ul className="list-disc ml-5">
              <li>Frontend: Angular, React, Styled Components</li>
              <li>Backend: Node.js, NestJS, Python, FastAPI</li>
              <li>DevOps: Docker, AWS, GCP, Firebase, Git</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Certificações</h2>
            <ul className="list-disc ml-5">
              <li><a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1061807" className="text-blue-600 underline">Scrum Fundamentals Certified</a></li>
              <li><a href="https://cert.efset.org/tApNGj" className="text-blue-600 underline">EF SET – C2 Proficient</a></li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Educação</h2>
            <p>Bacharelado em Engenharia de Software – Universidade Anhanguera (2023 - 2026)</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Idiomas</h2>
            <ul className="list-disc ml-5">
              <li>Português (Nativo)</li>
              <li>Inglês (C2)</li>
              <li>Espanhol (Básico)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Contato</h2>
            <ul className="list-disc ml-5">
              <li><a href="mailto:irineutech2025@gmail.com" className="text-blue-600 underline">irineutech2025@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/irineu-brito/" className="text-blue-600 underline">LinkedIn</a></li>
              <li><a href="https://github.com/irineub" className="text-blue-600 underline">GitHub</a></li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Últimos Posts</h2>
            <BlogPosts />
          </section>
        </>
      ) : (
        <p>Versão em inglês em construção...</p>
      )}
    </section>
  )
}