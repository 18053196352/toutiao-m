function fun (obj) {
  // obj.name = 'function.obj'
  // console.log(obj)
  const funObj = { name: '123' }
  funObj.name = 'function.obj'
  console.log(funObj)
}

const obj = {
  name: 'global obj'
}

fun(obj)
console.log(obj)
