

let elementBuild = (data) => {
  let build = ``;
  data.forEach(array => {
    build += `
      <div class = "contacts">
        <h3>${array.name}</h3>
        <p>${array.number}</p>
        <p>${array.address}</p>
      </div>`
  })
  return build;
}
export default elementBuild