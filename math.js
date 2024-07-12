function dataload(x) {
  var datav = x
}

function dataunload() {
  var datav = 0
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

function equal(x, y) {
  return x == y
}

function pi() {
  return 3.14159
}

function sac(x, sac) {
  return x / sac ** (x*0.1)
}

function js() {
  dataload(exp(30, 8))
  d = data()
  dataunload()
  alert(add(multi(d, 7), div(d, exp(5, d))))
}
