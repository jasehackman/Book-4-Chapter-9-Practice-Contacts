
let getfetching = () => {
  return fetch(`http://localhost:8088/contact`)
  .then(data => data.json())
}

export default getfetching