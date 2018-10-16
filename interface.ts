interface Obj {
  keyA: String,
  keyB: Boolean,
  keyC: Number
}

function func (obj: Obj) { // 这里vscode会报一个实现重复 但是没明白哪里有问题 等问下大佬
  console.log(typeof obj.keyA)
  console.log(typeof obj.keyB)
  console.log(typeof obj.keyC)
}

const OBJ = { keyA: 'string', keyB: true, keyC: 123 }

func(OBJ)

// 接口声明顾名思义 对一个参数对象进行声明 可以参考GO语言中 Struct 逻辑抽象出来

// 这个文件

