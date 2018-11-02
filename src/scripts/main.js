import jsonPost from "./jsonPost.js"

$("#forum_button").click(() => {
  let formName = $("#forum_name").val()
  let formNumber = $("#forum_number").val()
  let formAddress = $("#forum_address").val()

  let formObj = {
    name: formName,
    number: formNumber,
    address: formAddress
  }
    jsonPost(formObj);
})
