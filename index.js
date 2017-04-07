// JavaScript standard Style

const os = require('os')

// 1、注释 ：Expected space or tab after '//' in comment.
// 在单行注释的符号和注释之间需要有空格或tab间隔

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
