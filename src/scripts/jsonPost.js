

let fetching = (data) => {
  return fetch(`http://localhost:8088/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

export default fetching