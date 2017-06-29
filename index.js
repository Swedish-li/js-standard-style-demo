/* global $ */

// JavaScript standard Style

const os = require('os')

// 1、注释 ：Expected space or tab after '//' in comment.
// 在单行注释的符号和注释之间需要有空格或tab间隔
/* 多行注释的首尾要留空格 */

// 2、缩进：Expected indentation of 2 spaces but found 0.
// 使用两个空格作为缩进
var showMsg = function (msg) {
  console.log(msg)
}

// 3、不允许存在未使用的变量：'showMsg' is assigned a value but never used.
showMsg('Welcome JavaScript standard Style!')

// 4、字符串统一使用单引号，避免双引号转义的情况除外
showMsg("<div>'Hello' World!</div>")

const sp = ' '
// 5、空格的使用
//    5.1、以两个空格作为代码的缩进
//    5.2、关键字后面要加空格：Expected space(s) after "if".
if (sp) {
  showMsg('关键字后边需要加上空格！')
}
//    5.3、函数声明时括号和函数名之间需要添加空格：Missing space before function parentheses.
function showInfo (msg) {
  console.info(msg)
}
//    5.4、字符串拼接操作符（+），之间要留有空格:Infix operators must be spaced.
var message = 'Hello ' + 'JavaScript'

showInfo(message)

showMsg(os.homedir())

//   5.5、单行代码块两边加空格:Requires a space after '{'.
function foo () { return true }

//   5.6、函数调用时，标示符与括号间不留空格: Unexpected space between function name and paren.
console.log('Hello World!')
//   5.7、键值对当中冒号与值之间要留空白: Missing space before value for key 'key'.
var obj = {
  key: 'value'
}

//   5.8、遇到分号时要后留前不留: Missing whitespace after semicolon.
var items = [1, 3]

for (let i = 0; i < items.length; i++) { console.log(i) }

//  5.9、圆括号间不加空格
if (foo()) {
  console.log('Hello World!')
  console.log(obj)
}

//  5.10、一元运算符后边不加空格
var type = typeof !items
console.log(type)

//  5.11、注释首尾留空格。
//  5.12、模板字符串中变量前后不加空格
const temp = `Hello ${message}`

console.log(temp)

// 6、关于分号
//  6.1 不要使用分号结束一段代码
//  6.2 不要使用 (, [, or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。

;(function () {
  console.log('ok')
}())

;[1, 2, 3].forEach(function (e) { console.log(e) })

;`hello`.indexOf('o')

// 7、变量声明

// 7.1、一个var关键字只声明一个变量
// 7.2、变量和函数统一使用驼峰命名法
// 7、3、构造函数使用大写字母开头
// 7.4、避免修改使用const声明的变量
// 7.5、不要使用八进制字面量

$(function () {
  console.log('全局变量')
})

// 对一行禁用所有规则
file = 'I know what I am doing' // eslint-disable-line 

// 只禁用某条规则
var newFile = 'not used File' // eslint-disable-line no-unused-vars
