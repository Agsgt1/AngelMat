function dataload(x) {
  datav = x
}

function dataunload() {
  datav = 0
}

function data() {
  return datav
}

function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function multi(x, y) {
  return x * y
}

function div(x, y) {
  return x / y
}

function exp(x, y) {
  return x ** y
}

function js() {
  dataload(exp(30, 8))
  d = data()
  dataunload()
  alert(add(multi(d, 7), div(d, exp(5, d))))
}
