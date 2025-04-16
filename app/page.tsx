import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Irineu Brito - Desenvolvedor Fullstack
      </h1>
      <p className="mb-4">
        Desenvolvedor fullstack bilíngue com sólida experiência em frontend e backend modernos, incluindo Angular, NestJS, React e Python. Atuei em projetos internacionais e nacionais, entregando soluções escaláveis com foco em performance, IA e cloud computing (AWS, GCP).
      </p>
      <p className="mb-4">
        Experiência com tecnologias como Node.js, Typescript, PostgreSQL, Docker, Firebase, GCP, AWS, entre outras. Atualmente atuo com Inteligência Artificial no SIDIA, contribuindo com automações em Python, NLP e integração de LLMs.
      </p>
      <p className="mb-4">
        Sou adaptável, resiliente sob pressão e focado em entregar resultados com agilidade e qualidade. Tenho certificação Scrum e proficiência em inglês (C2).
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}