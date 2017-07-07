# JavaScript Standard 代码规范学习

## 文档

* [官方说明文档][1]
* [官方文档中文版][3]
* [简体中文文档][2]

## 主要特性

 1. 零配置，安装即可使用
 2. 提供命令行工具`standard`可直接检查当前目录下的javascript文件
 3. 提供`standard --fix`命令自动代码格式化

## 常见问题

### 第三方插件暴露的全局变量提示未定义

``` javascript
    /* global $ */

    $(function () {
      console.log('全局变量')
    })

```

### 隐藏警告

使用命令查看规则名称

``` shell
$ standard --verbose

```

在代码中添加注释

``` javascript
    var newFile = 'not used File' // eslint-disable-line no-unused-vars
```

禁用当前行代码的所有规则

```javascript
    file = 'I know what I am doing' // eslint-disable-line 
```


## 徽章

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)][3]

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)][1]


[1]:https://standardjs.com/
[2]:https://github.com/feross/standard/blob/master/docs/RULES-zhcn.md
[3]:https://standardjs.com/readme-zhcn.html
[4]:https://github.com/feross/standard

