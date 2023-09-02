import "./styles/app.scss"
import { connection } from "./lib/connection"

export async function getData() {
  return connection.getData(connection.contentTypes.posts)
}

export default async function Home() {
  const posts = await getData()

  return (
    <main className="wrapper wrapper-aligned-center | flow">
      <h1 className="fz-900">Learning NextJS</h1>

      <h2 className="fz-700">Posts</h2>

      {posts.map(({ title, body }, index: any) => {
        return (
          <div className="flow" key={index}>
            <h3 className="fz-500 fw-bold tt-capitalize">{title}</h3>
            <p>{body}</p>
            <hr />
          </div>
        )
      })}
    </main>
  )
}
