import fetch from "node-fetch"

async function request(method, params = {}) {
  const res = await fetch(process.env.LASTSTATE_URL, {
    method,
    mode: "cors",
    headers: {
      authorization: `Bearer ${process.env.LASTSTATE_TOKEN}`,
      "content-type": "application/json"
    },
    ...params
  })
  if (!res.ok) throw new Error(await res.text())
  return await res.json()
}

export async function put(data) {
  return await request("POST", { body: JSON.stringify(data) })
}

export async function get(data) {
  return await request("GET")
}
