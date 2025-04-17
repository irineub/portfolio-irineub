import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { GB } from 'country-flag-icons/react/3x2'

export default function Page() {
  return (
    <section className="p-3">
      <div className="flex gap-6 items-center mb-6">
        <Image
          src="/profile.png"
          width={100}
          height={100}
          alt="Foto de perfil de Irineu Brito"
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Irineu Brito
          </h1>
          <h1>Desenvolvedor Fullstack</h1>
        </div>
        <a href="/en" className="text-sm text-blue-600 underline ml-auto flex items-center gap-1">
          <GB className="w-4 h-4" />
          EN
        </a>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Contatos</h2>
        <div className="flex flex-col space-y-2">
          <a href='mailto:irineutech2025@gmail.com' className="text-blue-600 hover:underline">
            E-mail: irineutech2025@gmail.com
          </a>
          <a href='https://medium.com/@irineutech2025' className="text-blue-600 hover:underline">
            Medium
          </a>
          <a href='https://www.linkedin.com/in/irineu-brito/' className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sobre Mim</h2>
        <p>
          Desenvolvedor Fullstack bilíngue com sólida experiência de mais de 3 anos em frontend e backend modernos, incluindo Angular, NestJS, React e Python. Entrego soluções escaláveis com foco em performance, IA e cloud computing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Experiência Profissional</h2>
        <ul className="list-disc ml-5">
          <li className='mb-5'>
            <strong>SIDIA - Instituto de Ciencia e Tecnologia</strong> (02/2025 - Atual ) – Python, NLP, LLMs, IA (Estágio) <br/> Meio-Periodo -
            Manaus-AM (Presencial)<br/>
            Atuo no desenvolvimento de ferramentas internas em Python voltadas à automação de processos e fluxos de trabalho. Construí pipelines de dados para alimentar modelos de linguagem (LLMs), aplicando técnicas de NLP e análise de dados com Pandas. Participei da concepção de uma plataforma integrada de IA, além de realizar ajustes finos em modelos para respostas contextuais.
          </li>
          <li className='mb-5'>
            <strong>Vizo.dev</strong> (01/2025 - 04/2025 [4 meses]) – Fullstack (NestJS, Angular, GCP, i18n)<br/>
          <strong>(Free-lance PJ) </strong>       Jerusalém, Israel (Remoto)<br/>
            Desenvolvi aplicações fullstack utilizando Angular, NestJS e Typescript. Integrei serviços de mensageria (Sendinblue), gerenciei recursos no GCP e implementei funcionalidades de internacionalização (i18n) para suportar múltiplos idiomas. Colaborei com equipes internacionais em ambiente ágil e remoto.
          </li>
          <li className='mb-5'>
            <strong>StringSX</strong> (01/2023 - 01/2025 [2 anos]) – Node.js, React, AWS, LLM<br/>
           (Contrato PJ) Manaus-AM (Remoto)<br/>
            Participei de diversos projetos desenvolvendo soluções fullstack com React, Angular, Node.js, NestJS e Python. Trabalhei com integração de e-commerce via WooCommerce, LLMs para processamento de dados com imagens (Gemini) e deploy de infraestrutura em AWS (EC2, S3, CloudFront). Automatizei ambientes com Docker e gerenciei banco de dados PostgreSQL.
          </li>
          <li>
            <strong>Fatsus</strong> (06/2022 - 12/2022 [6 meses]) – Angular, Python, SUS<br/>
            (Contrato PJ) Manaus-AM (Remoto)<br/>
            Desenvolvi e mantive aplicações voltadas ao setor da saúde, utilizando Angular no frontend e Node.js/Python no backend. Atuei na integração com sistemas de faturamento para o (SUS) e em melhorias contínuas para clínicas e laboratórios.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Skills Técnicas</h2>
        <ul className="list-disc ml-5">
          <li>Frontend: HTML, CSS, JavaScript, Angular, React, Redux, Styled Components, SASS, RXJS, Material</li>
          <li>Backend: Node.js, NestJS, Python, FastAPI, TypeORM, Sequelize, Prisma, SQLAlchemy</li>
          <li>Bancos de Dados: PostgreSQL, MongoDB, Firebase</li>
          <li>DevOps & Infraestrutura: AWS (EC2, S3), GCP, Docker, VPS, Git, GitHub, Elastic</li>
          <li>Mensageria: Sendinblue/Brevo</li>
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
        <p>Bacharelado em Engenharia de Software – Universidade Anhanguera (2023 - 2026)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Idiomas</h2>
        <ul className="list-disc ml-5">
          <li>Português (Nativo)</li>
          <li>Inglês (C2 – Proficiente)</li>
          <li>Espanhol (Básico)</li>
        </ul>
      </section>

     
    </section>
  )
}
