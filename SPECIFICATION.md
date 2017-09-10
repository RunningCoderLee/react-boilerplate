# 项目规范

## Table Of Contents
- [文件命名](#文件命名)
- [JS](#js)
  - [命名](#命名)
    - [函数：](#函数：)
    - [变量：](#变量：)
    - [类名：](#类名：)
    - [枚举：](#枚举：)
    - [方法：](#方法：)
    - [常量：](#常量：)
    - [属性和方法](#属性和方法)
    - [方法和函数参数](#方法和函数参数)
    - [Getters 和 Setters](#getters-和-setters)
    - [命名空间](#命名空间)
    - [为全局代码使用命名空间](#为全局代码使用命名空间)
    - [明确命名空间所有权](#明确命名空间所有权)
    - [外部代码和内部代码使用不同的命名空间](#外部代码和内部代码使用不同的命名空间)
    - [重命名那些名字很长的变量, 提高可读性](#重命名那些名字很长的变量-提高可读性)
- [CSS](#css)
- [注释](#注释)
  - [顶层/文件注释](#顶层文件注释)
  - [类注释](#类注释)
  - [方法与函数的注释](#方法与函数的注释)
  - [属性注释](#属性注释)
  - [类型转换的注释](#类型转换的注释)
  - [JSDoc 缩进](#jsdoc-缩进)
  - [枚举](#枚举)
  - [Typedefs](#typedefs)
- [附录](#附录)
  - [JavaScript Types](#javascript-types)
  - [JSDoc Tag Reference](#jsdoc-tag-reference)

## 文件命名

文件名应该使用 `小写字符` , 以避免在有些系统平台上不识别大小写的命名方式. 文件名以 `.js` 结尾, react组件用 `.jsx` 结尾 不要包含除 `-` 和 `_` 外的标点符号(使用 `-` 优于 `_`).

## JS

本项目部分采用ES6语法进行编写，要求尽量采用ES6规范与准则来编写代码 <br>
本项目使用 [![eslint-config-airbnb](https://img.shields.io/badge/eslint--config--airbnb-v15.1.0-red.svg)](https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v15.1.0) 作为 code style linter <br>

### 命名

#### 函数：
`functionNamesLikeThis`

- 函数命名要注意减少复杂度

  e.g. `setTopic(topic)`而不是`setTopic(value)`，`getLength(line)`而不是`getLineLength(line)`，
- 如果遇到同类型命名则通过具体描述来区分函数

  e.g. `getLineLength(line)`和`getInputLength(inputValue)`而不是`getLength(line)`和`getLength(inputValue)`；
- 如果函数返回值为布尔型，最好把is作为前缀

  e.g. `isSet()`、`isVisible()`或`isOpen()`而不是`isFlag()`或`whetherOpen()`。

  也可用`has`，`can`，`should`代替`is`；但不要用逻辑关系词`not`，

  e.g. `isNotOpen()`；
- 如果函数需要一定时间遍历或者计算某个变量的值，最好使用find作为前缀

  e.g. `findNearestVertex(vertex)`或`findMinElement(matrix)`

  当不需要计算即可直接获得的可以使用get作为前缀，

  e.g. `getDictionary(Dictionary)`或`getValue(value)`；
- 如果函数用于初始化，则使用`initialize`作为前缀

  e.g. `initializeFontSet(printer)`而不是`initFontSet(printer)`；
- 如果某两个函数有相关性，尽量使用对称的动词作为前缀，减少命名复杂度

  e.g. `getName(name)` vs `setName(name)`，`addStudent(student)` vs `removeStudent(student)`，或`create/destroy`，`start/stop`，`begin/end`或`next/previous`；
- 函数命名不要使用缩写，不要用`cmd`代替`command`，或用`cp`代替`copy`等，

  e.g. `computeAverage()`而不是`compAvg()`；

#### 变量：
`variableNamesLikeThis`

- 名词或名词组合
- 尽量少用缩写，e.g. `fileName`而不是`flNm`，但某些约定俗成的词最好还是保留缩写，除首字母大写外，其余都用小写，`Html`而不是`HTML`，也不是`HyperTextMarkupLanguage`；
- 临时变量要尽量短，让读者明确该变量仅在某几行代码内有效，e.g. `i`或`ii`而不是`iterationNumber`
- 变量命名要有可读性，e.g. `okButton`、`mainWindow`或`leftScrollbar`而不是`Flag`或`variable`
- 变量命名时要突出某些变量的类型，如矩阵、列表，e.g. 如果`supplier`代表供应商列表的某一个元素，需要使用`supplierList`代表供应商列表，而不是使用`suppliers`表示；
- 变量如果表示物体或者实体数量时，尽量使用`nXXXX`表示，e.g. `nPoints`和`nLines`代表点和线的数量，而不是`points`
- 变量如果表示实体的编号时，尽量使用`xxxNo`表示，e.g. `tableNo`或`employeeNo`

#### 类名：
`ClassNamesLikeThis`

#### 枚举：
`EnumNamesLikeThis`

枚举值里的key用大写表示 e.g.
~~~js
const Palette = {
  RED: '#ff0000'
  BLUE: '#0000ff'
}
~~~

#### 方法：
`methodNamesLikeThis`

#### 常量：
`SYMBOLIC_CONSTANTS_LIKE_THIS`


#### 属性和方法
* 文件或类中的`私有`属性，变量和方法名应该以下划线`_`开头。
* `保护`属性，变量和方法名不需要下划线开头，和公共变量名一样。

#### 方法和函数参数
* 可选参数以`opt_`开头。
* 函数的参数个数不固定时， 应该添加最后一个参数 var_args 为参数的个数。 你也可以不设置 var_args而取代使用 arguments。
* 可选和可变参数应该在`@param`标记中说明清楚。虽然这两个规定对编译器没有任何影响，但还是请尽量遵守

#### Getters 和 Setters
`Getters`和`Setters`并不是必要的。但只要使用它们了, 就请将`getters`命名成`getFoo()`形式, 将`setters`命名成`setFoo(value)`形式。 (对于布尔类型的`getters`, 使用`isFoo()`也可。)

#### 命名空间
JavaScript 不支持包和命名空间.

不容易发现和调试全局命名的冲突, 多个系统集成时还可能因为命名冲突导致很严重的问题. 为了提高 JavaScript 代码复用率, 我们遵循下面的约定以避免冲突。

#### 为全局代码使用命名空间
在全局作用域上, 使用一个唯一的, 与工程/库相关的名字作为前缀标识. 比如, 你的工程是`Project Alliance`, 那么命名空间前缀可取为`alliance.*`。

~~~js
var alliance = {};

alliance.sleep = function() {
  ...
};
~~~


许多 JavaScript 库, 包括[the Closure Library](https://developers.google.com/closure/library/?csw=1)和[Dojo toolkit](https://dojotoolkit.org/)为你提供了声明你自己的命名空间的函数. 比如:


~~~js
goog.provide('alliance');

alliance.sleep = function() {
  ...
};
~~~

#### 明确命名空间所有权
当选择了一个子命名空间, 请确保父命名空间的负责人知道你在用哪个子命名空间, 比如说, 你为工程`alliances`创建一个`hats`子命名空间, 那确保`Alliance`团队人员知道你在使用 `alliance.hats`。

#### 外部代码和内部代码使用不同的命名空间
`外部代码`是指来自于你代码体系的外部, 可以独立编译. 内外部命名应该严格保持独立. 如果你使用了外部库, 他的所有对象都在 `foo.hats.*` 下, 那么你自己的代码不能在 `foo.hats.*`下命名, 因为很有可能其他团队也在其中命名。


~~~js
foo.require('foo.hats');

/**
 * WRONG -- Do NOT do this.
 * @constructor
 * @extend {foo.hats.RoundHat}
 */
foo.hats.BowlerHat = function() {
};

~~~


如果你需要在外部命名空间中定义新的 API, 那么你应该直接导出一份外部库, 然后在这份代码中修改. 在你的内部代码中, 应该通过他们的内部名字来调用内部 API , 这样保持一致性可让编译器更好的优化你的代码.

~~~js
foo.provide('googleyhats.BowlerHat');

foo.require('foo.hats');

/**
 * @constructor
 * @extend {foo.hats.RoundHat}
 */
googleyhats.BowlerHat = function() {
  ...
};

goog.exportSymbol('foo.hats.BowlerHat', googleyhats.BowlerHat);

~~~


#### 重命名那些名字很长的变量, 提高可读性

主要是为了提高可读性. 局部空间中的变量别名只需要取原名字的最后部分.

~~~js
/**
 * @constructor
 */
some.long.namespace.MyClass = function() {
};

/**
 * @param {some.long.namespace.MyClass} a
 */
some.long.namespace.MyClass.staticHelper = function(a) {
  ...
};

myapp.main = function() {
  var MyClass = some.long.namespace.MyClass;
  var staticHelper = some.long.namespace.MyClass.staticHelper;
  staticHelper(new MyClass());
};
~~~


不要对命名空间创建别名。

~~~js
myapp.main = function() {
  var namespace = some.long.namespace;
  namespace.MyClass.staticHelper(new namespace.MyClass());
};
~~~


除非是枚举类型, 不然不要访问别名变量的属性.

~~~js
/** @enum {string} */
some.long.namespace.Fruit = {
  APPLE: 'a',
  BANANA: 'b'
};

myapp.main = function() {
  var Fruit = some.long.namespace.Fruit;
  switch (fruit) {
    case Fruit.APPLE:
      ...
    case Fruit.BANANA:
      ...
  }
};
~~~


~~~js
myapp.main = function() {
  var MyClass = some.long.namespace.MyClass;
  MyClass.staticHelper(null);
};
~~~


不要在全局范围内创建别名, 而仅在函数块作用域中使用.



## CSS

* 本项目采用sass语法进行样式表编写，所有样式表文件扩展名采用`.scss`



## 注释

使用 JSDoc

遵循 [C++](https://google.github.io/styleguide/cppguide.html#Comments)代码注释风格

应使用适当的[tag]()和[type]()的`JSDoc`注释记录所有`文件`，`类`，`方法`和`属性`。除非可以从`属性`，`方法`或`参数名称`中直接看出，否则应包含`属性`，`方法`，`方法参数`和`方法返回值`的文本描述。

行内注释使用 `// ` 的形式

推荐使用完整的句子，但不强制。 完整的句子应该使用适当的标点符号。

css编写时在容易混淆的地方也需要添加注释做解释说明

通过在注释中添加`FIXME`， `TODO`, `CHANGED`, `XXX`, `IDEA`, `HACK`, `NOTE`, `REVIEW`关键字来对代码进行标记，以便于后期返工处理之前遗留的代码问题或者帮助新同事在阅读代码时减少误解
~~~js
// TODO: blahblah

// FIXME: xxxx

// IDEA: should refactoring
~~~

### 顶层/文件注释
顶层注释用于告诉不熟悉这段代码的读者这个文件中包含哪些东西. 应该提供文件的大体内容, 它的作者, 依赖关系和兼容性信息. 如下:

~~~js
// Copyright 2009 Google Inc. All Rights Reserved.

/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @author user@google.com (Firstname Lastname)
 */
~~~

### 类注释
每个类的定义都要附带一份注释, 描述类的功能和用法. 也需要说明构造器参数. 如果该类继承自其它类, 应该使用`@extends`标记. 如果该类是对接口的实现, 应该使用`@implements`标记.
~~~js
/**
 * Class making something fun and easy.
 * @param {string} arg1 An argument that makes this more interesting.
 * @param {Array.<number>} arg2 List of numbers to be processed.
 * @constructor
 * @extends {goog.Disposable}
 */
project.MyClass = function(arg1, arg2) {
  // ...
};
goog.inherits(project.MyClass, goog.Disposable);
~~~

### 方法与函数的注释

提供参数的说明. 使用完整的句子, 并用第三人称来书写方法说明.

~~~js
/**
 * Converts text to some completely different text.
 * @param {string} arg1 An argument that makes this more interesting.
 * @return {string} Some return value.
 */
project.MyClass.prototype.someMethod = function(arg1) {
  // ...
};

/**
 * Operates on an instance of MyClass and returns something.
 * @param {project.MyClass} obj Instance of MyClass which leads to a long
 *     comment that needs to be wrapped to two lines.
 * @return {boolean} Whether something occured.
 */
function PR_someMethod(obj) {
  // ...
}
~~~

对于一些简单的, 不带参数的 getters, 说明可以忽略.

~~~js
/**
 * @return {Element} The element for the component.
 */
goog.ui.Component.prototype.getElement = function() {
  return this.element_;
};
~~~

### 属性注释

也需要对属性进行注释.

~~~js
/**
 * Maximum number of things per pane.
 * @type {number}
 */
project.MyClass.prototype.someProperty = 4;
~~~

### 类型转换的注释

有时, 类型检查不能很准确地推断出表达式的类型, 所以应该给它添加类型标记注释来明确之, 并且必须在表达式和类型标签外面包裹括号.

~~~js
/** @type {number} */ (x)
(/** @type {number} */ x)
~~~

### JSDoc 缩进

如果你在 @param, @return, @supported, @this 或 @deprecated 中断行, 需要像在代码中一样, 使用4个空格作为一个缩进层次.

~~~js
/**
 * Illustrates line wrapping for long param/return descriptions.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */
project.MyClass.prototype.method = function(foo) {
  return 5;
};
~~~

不要在`@fileoverview`标记中进行缩进.

虽然不建议, 但也可对说明文字进行适当的排版对齐. 不过, 这样带来一些负面影响, 就是当你每次修改变量名时, 都得重新排版说明文字以保持和变量名对齐.

~~~js
/**
 * This is NOT the preferred indentation method.
 * @param {string} foo This is a param with a description too long to fit in
 *                     one line.
 * @return {number} This returns something that has a description too long to
 *                  fit in one line.
 */
project.MyClass.prototype.method = function(foo) {
  return 5;
};
~~~

### 枚举

~~~js
/**
 * Enum for tri-state values.
 * @enum {number}
 */
project.TriState = {
  TRUE: 1,
  FALSE: -1,
  MAYBE: 0
};
~~~

注意一下, 枚举也具有有效类型, 所以可以当成参数类型来用.

~~~js
/**
 * Sets project state.
 * @param {project.TriState} state New project state.
 */
project.setState = function(state) {
  // ...
};
~~~

### Typedefs

有时类型会很复杂. 比如下面的函数, 接收 Element 参数:

~~~js
/**
 * @param {string} tagName
 * @param {(string|Element|Text|Array.<Element>|Array.<Text>)} contents
 * @return {Element}
 */
goog.createElement = function(tagName, contents) {
  ...
};
~~~

你可以使用 @typedef 标记来定义个常用的类型表达式.

~~~js
/** @typedef {(string|Element|Text|Array.<Element>|Array.<Text>)} */
goog.ElementContent;

/**
* @param {string} tagName
* @param {goog.ElementContent} contents
* @return {Element}
*/
goog.createElement = function(tagName, contents) {
...
};
~~~




## 附录

### JavaScript Types
JS2 提议中包含了一种描述 JavaScript 类型的规范语法, 这里我们在 JSDoc 中采用其来描述函数参数和返回值的类型.

JSDoc 的类型语言, 按照 JS2 规范, 也进行了适当改变, 但编译器仍然支持旧语法.

| 名称 |	语法 | 描述 | 废弃语法 |
| --- | --- | --- | --- |
| 基本类型 | 在JavaScript中有6种基本类型：`{null}`, `{undefined}`, `{boolean}`, `{number}`, `{string}`和`{symbol}`。| 简单的类型名称描述。|
| 实例类型 |	`{Object}` <br>一个`Object`的实例或null。<br><br>`{Function}` <br>一个`Function`实例或`null`。<br><br>`{EventTarget}`<br>一个实现`EventTarget`接口的构造函数的实例，或者`null`。|	构造函数或接口函数的实例。 <br><br>构造函数是使用`@constructor`JSDoc标签定义的函数。 接口函数是用`@interface`JSDoc标签定义的函数。<br><br>默认情况下，实例类型将接受null。 这是唯一的可以使类型为空的语法。 此表中的其他类型语法将不接受`null`。 |
| 枚举类型 |	`{goog.events.EventType}`<br>`goog.events.EventType`对象字面量初始化后的属性之一。	| 枚举必须通过对象字面量初始化，或者作为另一个枚举的别名，用`@enum` JSDoc标记注释。 这个字面量的属性是枚举的实例。 枚举的语法定义[如下]()。 |
| 应用类型 |	`{Array.<string>}`<br>一个只包含字符串的数组。<br><br>`{Object.<string, number>}`<br>一个键为字符串，值为数字的对象类型 | 通过对该类型应用一组参数类型来对类型进行参数化。 这个想法类似于Java中的泛型。|
| 混合类型 |	<code>{(number &#124; boolean)}</code><br>数字或者布尔值。| 表明值可能是类型A或者类型B 。<br><br>在顶级表达式中可以省略括号，但括号应包含在子表达式中以避免歧义。<br><code>{number &#124; boolean}</code><br><code>{function(): (number &#124; boolean)}</code> |	<code>{(number,boolean)}</code>,<br><code>{(number &#124;&#124; boolean)}</code>
| 可为空类型 | `{?number}`<br>数字或null。 | 任何类型和null类型组成的混合类型的简写，只是语法糖。	| `{number?}`
| 不可为空类型 | `{!Object}`<br>一个对象，但是值不能是null。 | 从可为空类型中过滤掉null值，常用于默认情况下为空的实例类型。 | `{Object!}`
| 记录类型 | 	`{{myNum: number, myObject}}`<br>具有给定成员类型的匿名类型。| 表示该值具有指定类型的指定成员。在这种情况下，`myNum`是数字类型，`myObject`是包含任何类型的`myObject`实例<br>请注意，大括号是类型语法的一部分。例如：要表示一个具有`length`属性的对象的数组，可以写成`Array.<{length}>`<br>记录类型不能为空。
| 函数类型 |	`{function(string, boolean)}`<br>一个包含2个参数（一个类型为字符串，另一个为布尔值）并且有未定义类型返回值的函数。| 指定一个函数<br><br>还要注意`function()`和`Function`之间的区别。后者是一个实例类型，并且在默认情况下可以为空。应该使用`function(...)`而不是`Function`，因为它提供了有关其参数和返回值的更多类型信息。 |
| 函数返回类型 | `{function(): number}`<br>一个不包含参数并且返回值为数字类型的函数。| 说明一个函数的返回值类型。|
| 函数中`this`类型 | `{function(this:goog.ui.Menu, string)}`<br>一个包含一个字符串类型参数的函数，并在`goog.ui.Menu`的上下文中执行。| 说明函数中的上下文类型 |
| 函数中`new`类型 | `{function(new:goog.ui.Menu, string)}`<br>一个构造函数，它使用一个参数（字符串），并在使用`new`关键字调用时创建一个新的`goog.ui.Menu`实例。| 说明构造函数的构造类型。
| 可变参数 |	`{function(string, ...[number]): number}`<br>一个函数，接收一个字符串类型的参数，并且参数的个数可变，但是参数类型必须为`number` | 说明函数的可变长参数。<br>`参数是否可以为空由...之后的类型注释确定` |
| 可变长的参数（使用`@param`标记) | `@param {...number} var_args`<br>函数参数个数可变。 | 使用标记, 说明函数具有不定长参数。<br>`参数是否可以为空由...之后的类型注释确定`
| 函数的缺省参数 | `{function(?string=, number=)}`<br>函数带一个可空且可选的字符串型参数, 一个可选整型参数. `=` 语法只针对 `function` 类型有效。 | 说明函数的可选参数。
| 函数的缺省参数使用`@param`标记) | `@param {number=} opt_argument`<br>数字类型的可选参数	。 | 指定注释函数接受可选参数。
| 所有类型 |	`{*}` | 表示变量可以是任何类型。
| 未知类型 |	`{?}` | 表示变量可以采用任何类型。


### JSDoc Tag Reference

参照[这里](https://google.github.io/styleguide/javascriptguide.xml#JSDoc_Tag_Reference)