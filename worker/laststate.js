import fetch from "node-fetch"

export async function put(data) {
  const res = await fetch(process.env.LASTSTATE_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      authorization: `Bearer ${process.env.LASTSTATE_TOKEN}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error(await res.text())
}
