function func(obj) {
    console.log(typeof obj.keyA);
    console.log(typeof obj.keyB);
    console.log(typeof obj.keyC);
}
var obj = { keyA: 'string', keyB: true, keyC: 123 };
func(obj);
