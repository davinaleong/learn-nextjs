import "./styles/app.scss"
import { connection } from "./lib/connection"

export interface HomeProps {
  posts: Array<any>
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const data = response.json()

  return {
    props: { data },
  }
}

export default function Home(props: any) {
  console.log(`props`, props)
  return (
    <main className="wrapper wrapper-aligned-center | flow">
      <h1 className="fz-900">Learning NextJS</h1>
    </main>
  )
}
