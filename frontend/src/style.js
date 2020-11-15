const dirname = (url) => /(.*\/)[^/]*$/.exec(url)?.[1]

export const importStyle = (path) => {
  const dir = dirname(import.meta.url)
  const link = document.createElement("link")
  link.href = dir + path
  link.rel = "stylesheet"
  document.head.appendChild(link)
}
