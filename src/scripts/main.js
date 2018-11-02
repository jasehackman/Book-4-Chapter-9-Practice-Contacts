import jsonPost from "./jsonPost.js"
import jsonGet from "./jsonGet.js"
import build from "./componentBuilder.js"

$("#forum_button").click(() => {
  let formName = $("#forum_name").val()
  let formNumber = $("#forum_number").val()
  let formAddress = $("#forum_address").val()

  let formObj = {
    name: formName,
    number: formNumber,
    address: formAddress
  }
  jsonPost(formObj).then(() => {
  jsonGet().then(data => {
    console.log(data);
    $("#section_postToDom").html(null);
    $("#section_postToDom").html(build(data))
  })})
})

jsonGet().then(data => {
  $("#section_postToDom").html(null);
  $("#section_postToDom").html(build(data))
})

