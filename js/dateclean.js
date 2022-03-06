function isValidDate(date) {
  let cc = date.substring(6, 8);
  let yy = date.substring(8, 10);
  let mm = date.substring(3, 5);
  let dd = date.substring(0, 2);
  if ((parseInt(mm) < 1 || parseInt(mm) > 12) && (parseInt(dd) < 1 || parseInt(dd) > 31)) {
    return "invalid month and date"
  } else if (parseInt(mm) < 1 || parseInt(mm) > 12) {
    return "invalid month";
  } else if (parseInt(dd) < 1 || parseInt(dd) > 31) {
    return "invalid day";
  } else {
    return cc + yy + "-" + mm + "-" + dd;
  }
}

function cleanDate(date) {
  var d
  if (date.includes("-") && date.length == 10) {
    d = isValidDate(date);
    console.log("has - " + d);
    return d
  } else if (date.includes("/") && date.length == 10) {
    date = date.replace("/", "-");
    d = isValidDate(date);
    console.log("has / " + d);
    return d
  } else if (!(date.includes("/") || date.includes("-")) && date.length == 8) {
    date = date.split("");
    date.splice(2, 0, "-");
    date.splice(5, 0, "-");
    date = date.join("");
    d = isValidDate(date);
    console.log("is not seperated " + d);
    return d
  } else if (date.includes("-") && date.length == 8) {
    date = date.split("");
    date.splice(0, 0, "0");
    date.splice(3, 0, "0");
    date = date.join("");
    d = isValidDate(date);
    console.log("has - and short " + d);
    return d
  } else if (date.includes("/") && date.length == 8) {
    date = date.split("");
    date.splice(0, 0, "0");
    date.splice(3, 0, "0");
    date = date.join("");
    d = isValidDate(date);
    console.log("has / and short " + d);
    return d
  } else if (!(date.includes("/") || date.includes("-")) && date.length == 6) {
    date = date.split("");
    date.splice(0, 0, "0");
    date.splice(2, 0, "0");
    date.splice(2, 0, "-");
    date.splice(5, 0, "-");
    date = date.join("");
    d = isValidDate(date);
    console.log("is not seperated and short " + d);
    return d
  } else {
    d = "Enter correct date value"
    console.log(d);
    return d
  }
}

export { isValidDate, cleanDate }
