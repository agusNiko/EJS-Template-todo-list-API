console.log(module);

module.exports = "hello World";

function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let day = today.toLocaleDateString("en-US", options);

  return day;
}
