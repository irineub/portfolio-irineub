'use client'

import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { GB } from 'country-flag-icons/react/3x2'
import { MdEmail, MdContentCopy } from 'react-icons/md'
import { FaMedium, FaLinkedin, FaGithub, FaFilePdf  } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/compat/router'

export default function Page() {
  const [copied, setCopied] = useState(false);
  const router = useRouter()

  const copyToClipboard = () => {
    navigator.clipboard.writeText('irineutech2025@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const language = navigator.language || 'pt-BR'
    if (router && !router.isReady) {
      if (!language.includes('pt')) {
        router.push('en')
      }
    }
  }, [router])

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
                alt="Foto de perfil de Irineu Brito"
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold tracking-tight">
                  Irineu Brito
                </h1>
                <h1>Desenvolvedor Fullstack & IA</h1>
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
                <FaFilePdf  className="w-4 h-4" />
                <a href='https://raw.githubusercontent.com/irineub/irineub/refs/heads/main/Curriculo%20Irineu%20Brito%20-%20IA.pdf' className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    Baixar Curriculo em PDF
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
                  {copied && <span className="absolute -right-16 text-green-500 text-xs whitespace-nowrap">Copiado!</span>}
                </button>
              </div>
            </div>

            <div className="absolute top-3 right-3 md:relative md:top-0 md:right-0">
              <a href="/en" className="text-sm text-blue-600 underline flex items-center gap-1">
                <GB className="w-4 h-4" />
                EN
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sobre Mim</h2>
        <p>
          Engenheiro de Inteligência Artificial e Backend com mais de 3 anos de experiência
          desenvolvendo aplicações web escaláveis para empresas nacionais e internacionais.
          Experiente em Python, Node.js, NestJS e tecnologias de IA como CrewAI, LangGraph
          e sistemas Multiagentes, com forte atuação em projetos envolvendo NLP, RAG e
          LLMs. Experiência sólida com bancos de dados SQL e NoSQL, infraestrutura em
          nuvem (AWS e GCP), Docker e práticas modernas de DevOps. Fluente em inglês
          (nível C2) e adaptável a ambientes remotos, colaborativos e multiculturais.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Experiência Profissional</h2>
        <ul className="list-disc ml-5">
          <li className='mb-5'>
            <strong>SIDIA - Instituto de Ciência e Tecnologia</strong> (Fev 2025 - Atual)<br />
            <em>Python Development AI – Estágio</em><br />
            Desenvolvimento de ferramentas internas para otimizar fluxos e processos com IA;
            construção de sistemas multiagentes com CrewAI e LangGraph, aplicação de NLP com Pandas,
            soluções RAG e colaboração com engenheiros em projetos com grandes volumes de dados.
          </li>
          <li className='mb-5'>
            <strong>VIZO</strong> (Jan 2025 - Abr 2025)<br />
            <em>Fullstack Developer (Freelancer)</em><br />
            Desenvolvimento com Angular, NestJS, integração com Firebase e GCP, envio de e-mails com Sendinblue
            e implementação de suporte multilíngue com i18n para aplicações internacionais.
          </li>
          <li className='mb-5'>
            <strong>StringSX</strong> (Jan 2023 - Jan 2025)<br />
            <em>Fullstack Developer</em><br />
            Desenvolvimento de soluções usando React, Angular, Node.js e NestJS; integração com WooCommerce;
            uso de LLMs como Gemini para processamento de imagens; deploy na AWS e automação com Docker.
          </li>
          <li>
            <strong>Fatsus</strong> (Jun 2022 - Dez 2022)<br />
            <em>Fullstack Developer</em><br />
            Desenvolvimento e manutenção de sistemas de saúde com Angular e Node.js; backend em Python;
            integração com sistemas legados e com o SUS; foco em segurança e estabilidade.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Skills Técnicas</h2>
        <ul className="list-disc ml-5">
          <li><strong>Linguagens:</strong> Python, JavaScript, TypeScript</li>
          <li><strong>Frontend:</strong> Angular, React.js</li>
          <li><strong>Backend:</strong> Node.js, NestJS, Express.js, FastAPI</li>
          <li><strong>Bancos de Dados:</strong> PostgreSQL (Sequelize, TypeORM), MongoDB (Mongoose), MySQL, Firebase</li>
          <li><strong>Testes:</strong> Jest, Pytest</li>
          <li><strong>APIs:</strong> RESTful, WebSockets, Swagger/OpenAPI</li>
          <li><strong>DevOps & Infra:</strong> AWS, GCP, Docker, VPS, Git, GitHub</li>
          <li><strong>IA & Dados:</strong> CrewAI, LangGraph, LLMs, NLP, RAG, Prompt Engineering, Pandas</li>
          <li><strong>Boas Práticas:</strong> Clean Code, SOLID, Scrum, Jira</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Certificações</h2>
        <ul className="list-disc ml-5">
          <li><a className="text-blue-600 underline" href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1061807" target="_blank" rel="noopener noreferrer">Scrum Fundamentals Certified (SFC)</a></li>
          <li><a className="text-blue-600 underline" href="https://cert.efset.org/tApNGj" target="_blank" rel="noopener noreferrer">EF SET English Certificate – Score: 81/100 (C2 Proficient)</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Educação</h2>
        <p>Bacharelado em Engenharia de Software – Universidade Anhanguera (Jan 2023 - Jun 2026)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Idiomas</h2>
        <ul className="list-disc ml-5">
          <li>Português (Nativo)</li>
          <li>Inglês (Fluente – C2 Proficiente)</li>
          <li>Espanhol (Básico)</li>
        </ul>
      </section>
    </section>
  )
}
