# Git 工作流 ![](https://img.shields.io/badge/version-0.0.1-green.svg)

## 概述
此流程总体过程如下图所示
![image](http://7xlt2a.com1.z0.glb.clouddn.com/workflow/GitFlow-overview.png)

## Table Of Contents
- [概述](#概述)
- [分支说明](#分支说明)
  - [master](#master)
  - [hot fixes](#hot-fixes)
  - [release branches](#release-branches)
  - [bug fixes](#bug-fixes)
  - [feature branches](#feature-branches)
- [流程说明](#流程说明)
  - [线上bug修复](#线上bug修复)
    - [QA发现bug](#qa发现bug)
    - [修复bug](#修复bug)
    - [Code Review](#code-review)
    - [QA验收](#qa验收)
  - [新功能开发](#新功能开发)
    - [开发前](#开发前)
    - [开发](#开发)
    - [Code Review](#code-review)
    - [QA验收](#qa验收)
  - [新功能验收时的bug修复](#新功能验收时的bug修复)
    - [发现bug](#发现bug)
    - [修复bug](#修复bug)
    - [Code Review](#code-review)
    - [QA验收](#qa验收)


## 分支说明

### master

项目主分支，所有经过QA测试通过的代码才能合入此分支，此分支上严禁进行代码改动操作

`类型`：持续性分支

`用途`：汇总所有符合上线标准的代码

`命名规则`：master

`base分支或Tag`：无

`MR目标分支`：无


### hot fixes

修复线上bug，

`操作权限`：developer

`类型`：临时性分支

`用途`：修复生产上暴露的bug

`命名规则`：%num%-hotfix-%text%

> `%num%`代表对应`issue`的编号，`%text%`为任意描述性内容，可省略
>
> `eg：15-hotfix  | 16-hotfix-errorPrompt`

`base分支或Tag`：暴露此bug的`tag`

`MR目标分支`：master


### release branches

各版本发布分支

`操作权限`：master

`类型`：受保护永久性分支

`用途`：QA部署测试环境对此版本代码进行测试

`命名规则`：release-%version%   

> `%version%`代表对应发布版本的版本号
>
> `eg：release-2.0.0  | release-1.5.0`

`base分支或Tag`：master

`MR目标分支`：master


### bug fixes

各`release`版本未通过QA测试所暴露出的bug

`操作权限`：developer

`类型`：临时性分支

`用途`：修复QA对未发布版本代码测试出的bug

`命名规则`：%num%-bugfix-%text%   

> `%num%`代表对应`issue`的编号，`%text%`为任意描述性内容，可省略
>
> `eg：21-bugfix  | 54-bugfix-displayError`

`base分支或Tag`：`issue`中指明的`tag`号

`MR目标分支`：`tag`所在`release`分支


### feature branches

每个发布版本需求拆分出的各个单元功能

`操作权限`：developer

`类型`：临时性分支

`用途`：开发组成发布版本的单元功能

`命名规则`：%num%-feat-%text%   

> `%num%`代表对应`issue`的编号，`%text%`为任意描述性内容，可省略
>
> `eg：31-feat  | 54-feat-goodsListPage`

`base分支或Tag`：master

`MR目标分支`：此功能对应发布分支


## 流程说明

**注意：** 所有`merge`命令都要加`--no-ff`参数！

### 线上bug修复

![image](http://7xlt2a.com1.z0.glb.clouddn.com/workflow/GitFlow-hotfix.png)

![image](http://7xlt2a.com1.z0.glb.clouddn.com/workflow/GitFlow-hotfix-flowChart.png)

#### QA发现bug

1. 发现bug后找到稳定复现的步骤
2. 在对应仓库创建`issue`并根据模板填写相应内容，对于前后端分离的项目如无法确认此bug属于后端还是前端修复，则将`issue`创建在前端代码仓库
3. assign给该项目前/后端leader或developer，如无法确认该bug是前端导致还是后端导致assign给前端leader或developer
4. 选择`Bug`和`Production`标签以及对应重要紧急程度的`P1 | P2 | P3 | P4`标签

#### 修复bug

1. 确认并实现bug复现
    1. 发现该issue不属于自己所在部门时请及时assign给正确的developer或leader
    2. 如果前后端代码分属不同仓库，则将此`issue`移动（编辑时可选择）到对应的前端/后端代码仓库，并assign给制定leader或developer
2. 根据规则创建`hot fixes分支`和`MR`，`MR`置为`WIP`状态，`assign`指向对应leader，`MR`目标分支选择`master`
3. 修复bug并自行完成相关测试
4. 推送修改代码到远端仓库
5. 在`issue`中写明此bug产生的原因以及解决方案，同时指出本次修改可能造成的副作用以及做了哪些测试来保证不产生副作用，如下：
    ~~~markdown
    ## 原因
    1. 数据请求未处理返回异常的情况
    2. 获取数据流程需求不够完善
    
    ## 解决方案
    1. 添加对返回码400和500时的提示
    2. 完善并更新需求文档
    
    ## 可能造成的副作用
    1. 对异常情况处理的边界情况考虑不充分
     
    ## 通过测试内容
    1. 服务器返回400 
    2. 服务器返回500
    3. 服务器无应答
    4. 网络中断
    5. 请求超时
    ~~~

#### Code Review

1. leader对代码进行审核并作出相应评论，developer重新修改代码后再次提交审核
2. 审核通过后将该分支名称告知QA，供QA同事部署测试环境进行测试验收
    
    **注意：** 此处审核通过也不要点击`Merge`按钮进行代码合并，该操作交由QA通过`Jenkins`执行

#### QA验收

1. 根据developer提供的分支名进行测试环境的部署，同时添加`betaTag`
2. 验收未通过则交由developer继续在源分支上进行更改和重新提交代码
3. 验收通过后通过`Jenkins`将此分支代码merge到master分支


### 新功能开发

![](http://7xlt2a.com1.z0.glb.clouddn.com/workflow/GitFlow-newFeature.png)

![image](http://7xlt2a.com1.z0.glb.clouddn.com/workflow/gitFlow-newFeature.png)

#### 开发前

1. team成员与PDM确认需求，leader将需求卡片拆分成各个功能模块并依次创建对应`Milestone`和`issue`以及各功能`主分支`，分支命名遵从`release branches`
2. `issue`选取对应标签和`Milestone`并assign给指定developer

#### 开发

1. 确认完全理解需求后创建与此`issue`绑定的分支和`MR`, 分支名格式遵从`feature branches`命名规范，`MR`置为`WIP`状态
2. developer在`issue`中编写代码设计方案并交由leader进行审阅
> 例： 商品列表页面
>    1. 组件包含
>       1. 顶部tab切换
>       2. 条件筛选FilterBar组件
>       3. 商品列表GoodsList组件
>    2. 页面功能逻辑函数
>       1. 编辑按钮点击 handleEditGoods(goodsId)
>       2. 类型列表内容切换 handleChangeGoodsType()
>   
>   ...

3. 审阅通过后进行代码编写
4. 代码编写过程中commit提交遵从《commit提交规范》，可不定期将`commit`推送到远端，便于leader进行代码审阅
5. 代码编写完毕后更新`master`分支代码，并将其所有代码合并至当前开发分支
6. 推送所有`commit`到远端同名分支，取消对应`MR`的`WIP`状态，assign指向leader等待code review

#### Code Review

1. leader对代码进行审核并作出相应评论，developer重新修改代码后再次提交审核
2. 审核通过后leader点击`Merge`按钮完成代码合并，并将对应`issue`添加`Code Reviewed`标签
3. 待本次发布功能全部合入对应`release分支`后，交由QA进行测试验收

#### QA验收

1. 根据developer提供的分支名进行测试环境的部署，同时添加`betaTag`
2. 如在测试过程中发现此次开发功能的bug，则进入`新功能验收bug修复`流程
3. 验收通过后通过`Jenkins`将此分支代码merge到master分支


### 新功能验收时的bug修复

#### 发现bug

1. 发现bug后找到稳定复现的步骤
2. 在对应仓库创建`issue`并根据模板填写相应内容，对于前后端分离的项目如无法确认此bug属于后端还是前端修复，则将`issue`创建在前端代码仓库
3. assign给该项目前/后端leader或developer，如无法确认该bug是前端导致还是后端导致assign给前端leader或developer
4. 选择`Bug OnNewFeat`标签以及对应重要紧急程度的`P1 | P2 | P3 | P4`标签

#### 修复bug

1. 确认并实现bug复现
    1. 发现该issue不属于自己所在部门时请及时assign给正确的developer或leader
    2. 如果前后端代码分属不同仓库，则将此`issue`原样复制到对应的前端/后端代码仓库，并assign给制定leader或developer，在源`issue`内容顶端添加新`issue`地址的关联后关闭源`issue`，关联格式如下：
    ~~~markdown
    ## Move to
    http://git.cd.romens.cn/products/alliance/issues/159
    ~~~
2. 根据规则创建`bug fixes分支`和`MR`，`MR`置为`WIP`状态，`MR`的目标分支选择本次功能发布的`release分支`，assign指向对应leader
3. 修复bug并自行完成相关测试
4. 推送修改代码到远端仓库
5. 在`issue`中写明此bug产生的原因以及解决方案，同时指出本次修改可能造成的副作用以及做了哪些测试来保证不产生副作用，如下：
    ~~~markdown
    ## 原因
    1. 数据请求未处理返回异常的情况
    2. 获取数据流程需求不够完善
    
    ## 解决方案
    1. 添加对返回码400和500时的提示
    2. 完善并更新需求文档
    
    ## 可能造成的副作用
    1. 对异常情况处理的边界情况考虑不充分
     
    ## 通过测试内容
    1. 服务器返回400 
    2. 服务器返回500
    3. 服务器无应答
    4. 网络中断
    5. 请求超时
    ~~~

#### Code Review

1. leader对代码进行审核并作出相应评论，developer重新修改代码后再次提交审核
2. 审核通过后将该分支合入本次发布的`release分支`，供QA同事部署测试环境进行测试验收
    

#### QA验收

1. 根据developer提供的最新`release分支`进行测试环境的部署，同时添加`betaTag`
2. 验收未通过则创建issue记录bug，重新进入【新功能验收时的bug修复】流程