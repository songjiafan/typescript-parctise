function num (num: Number) {
  console.log('a' + num)
}
console.log('1') // ts 是编译 不是执行

num(1) // ts强类型检查 类型不符合会报错

