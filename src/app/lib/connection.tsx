export interface ConnectionInterface {
  contentTypes: ContentTypesInterface
  getData(contentType: String): Promise<any>
}

export interface ContentTypesInterface {
  posts: String
  comments: String
  albums: String
  photos: String
  todos: String
  users: String
}

export const contentTypes: ContentTypesInterface = {
  posts: "posts",
  comments: "comments",
  albums: "albums",
  photos: "photos",
  todos: "todos",
  users: "users",
}

export async function getData(contentType: String): Promise<any> {
  const response = await fetch(`${process.env.API_URL}${contentType}`)
  const data = await response.json()
  return data
}

export const connection: ConnectionInterface = {
  contentTypes,
  getData,
}
