import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Irineu Brito
        </h1>
        <a href="/en" className="text-sm text-blue-600 underline">
          EN
        </a>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sobre Mim</h2>
        <p>
          Desenvolvedor Fullstack bilíngue com sólida experiência em frontend e backend modernos, incluindo Angular, NestJS, React e Python. Entrego soluções escaláveis com foco em performance, IA e cloud computing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Experiência Profissional</h2>
        <ul className="list-disc ml-5">
          <li><strong>SIDIA</strong> (02/2025 - Atual) – Python, NLP, LLMs, IA <br/> Manaus-AM (Presencial)</li>
          <li><strong>Vizo.dev</strong> (01/2025 - 04/2025) – Fullstack (NestJS, Angular, GCP, i18n)<br/> Jerusalém,Israel (Remoto)</li>
          <li><strong>StringSX</strong> (01/2023 - 01/2025) – Node.js, React, AWS, LLM <br/> Manaus-AM (Remoto)</li>
          <li><strong>Fatsus</strong> (06/2022 - 12/2022) – Angular, Python, SUS <br/> Manaus-AM (Remoto)</li>
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
          <li>
            <a
              className="text-blue-600 underline"
              href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1061807"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrum Fundamentals Certified
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="https://cert.efset.org/tApNGj"
              target="_blank"
              rel="noopener noreferrer"
            >
              EF SET – C2 Proficient
            </a>
          </li>
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
          <li>
            <a
              className="text-blue-600 underline"
              href="mailto:irineutech2025@gmail.com"
            >
              irineutech2025@gmail.com
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="https://www.linkedin.com/in/irineu-brito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="https://github.com/irineub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Últimos Posts</h2>
        <BlogPosts />
      </section>
    </section>
  )
}