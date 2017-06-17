# Angular2 入门
> AngularJS2 是一款开源的JavaScript MV*（MVC、MVW、MVVM）框架，目前由Google维护。AngularJS弥补了HTML在构建应用方面的不足，其通过使用标识符（directives）结构，来扩展Web应用中的HTML词汇，使开发者可以使用HTML来声明动态内容，从而使得Web开发和测试工作变得更加容易

![](http://upload-images.jianshu.io/upload_images/6278284-6ddf01d6af4b6ca2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 1. Angular 简介
    - 1.1 AngularJs 历史
    - 1.2 AngularJS 1.x 的困境
    - 1.3 AngularJS 2.x 的涅磐重生
- 2. Angular 核心
    - 2.1 模块 (Modules)
    - 2.2 组件 (Components)
    - 2.3 模板 (Templates)
    - 2.4 元数据 (Metadata)
    - 2.5 数据绑定 (Data Binding)
    - 2.6 指令 (Directives)
    - 2.7 服务 (Services)
    - 2.8 依赖注入 (Dependency Injection)
- 3. Angular 2 环境搭建
    - 3.1 环境准备
    - 3.2 使用 Angular-cli 快速搭建工程
    - 3.3 使用 angular-cli 添加新的构建
    - 3.4 单元测试
    - 3.5 End-to-end(e2e) 端到端测试
    - 3.6 编译打包项目
    - 3.7 环境 Environments
    - 3.8 总结

## 1. Angular 简介

### 1.1 AngularJs 历史

- 2009年，Misko Hevery 和Adam Aborns 在业余时间创造了 GetAngular。
- 2010年，当时 Misko Hevery 正参与 Google Feedback 的开发。比较郁闷的是，开发速度和项目的进展比较缓慢。  
Misko Hevery 意识到，使用 GetAngular 也许可以让这个产品的构建过程快一些。随后，将17K大小的基于GWT的应用程序使用 JavaScript 进行了重写，代码只有 1500 行，前后也只用了三周时间。  
这引起了很多人的重视，公司也开始资助，并组建团队全职开发,并且正式命名为 AngularJS。
- 2012年6月，AngularJS 1.0.0 正式版推出。亮点功能基本齐备，如双向绑定，依赖注入，指令等。
- 2013年12月，AngularJS 1.3 放弃支持IE8浏览器，推出单次绑定语法。
- 2014年9月，Angular2 在NG-Europe大会上正式亮相。
- 2016年2月，AngularJS 1.5 增加类似组件式的书写体验，实际上该版本主要是为过渡到AngularJS2做铺垫。
- 2016年9月，AngularJS 2 发布，它是基于ES6来开发的。
- 2017年3月，Angular4 发布，虽然版本号一下子跳到了4，但其实 Angular4 只是 Angular2 的一个后续版本，Angular4 打包文件将更小，运行速度也更快。

  回过头来看 Angular 的发展历程，Angular 一路高歌猛进，不断发展。虽然Angular 提出了很多全新的概念，也给前端开发带来了很多新的开发模式。但是这种颠覆性的改变，往往会给我们带来学习上的成本。所以 Angular 的学习曲线的确是比较曲折

### 1.2 AngularJS 1.x 的困境

  随着前端领域的快速发展。前端体系变得越来越复杂，AngularJS 好像有点更不上时代的步伐，毕竟是09年的框架。也暴露出越来越多的不足:

- 饱受诟病的性能问题。 我们知道 Angular 1.x 使用臧检测来实现页面的数据更新，当页面上的数据对象越来越多，脏检查的效率也会越来越低，页面的卡顿也会越来越明显
- 开发理念相对落后。 如组件式开发等。这里要需要注意的是 Angular 1.5 版本并不是真正意义上的组件式开发。
- 对手机端的支持不好。 Angular 是从09年诞生的，那时候手机应用并没有像现在那么火爆，Angular 设计的时候并没有考虑到手机方面的兼容。表现在几个方面：首先还是性能问题，手机不管从硬件还是网络等远远比不上pc平台，所以性能问题在手机端就表现的非常突出。
- 学习曲线陡峭。这个也是我本身没有使用 Angular 1.x 最大问题。可怕的 $scope,混乱的调用等。要推动开发团队去使用 Angular 1.x 的成本实在是太大了。但是作为个人研究来说，我觉得是一个不错的框架。

### 1.3 AngularJS 2.x 的涅磐重生

  虽然 Angular 1.x 每一次更新都再不断进步，但是毕竟一直都是在09年下的框架下做调整，背负这 Angular 的历史包袱，很难做到颠覆性的改变。每一个框架都有它自己的生命周期，AngularJs 1.x 显然已经跟不上前端发展的步伐。好在早在2014年3月，官方微博就有提及新 Angular 的开发计划。终于在2016年9月中旬正式对外发布。Angular 2 完全抛掉了历史包袱，以一个全新的框架出现在我们面前。但是 Angular 2 并不兼容 Angular 1.x,虽然官方推出迁移方案及工具。对于 Angular 1.x的迁移工作，可能会让很多人望而生畏。Angular 2到底我还该不该学，会不会又进入一个深坑？很高兴的告诉大家，抛弃了 Angular 1.x的历史包袱，全新规划的 Angular 2 很好的解决了 Angular 1.x 留下的历史问题。让我们一起来看看涅磐重生后的 Angular 2 有那些新特性：
- 组件式开发，从整体上看，Angular2 变得更加简洁，因为它的核心概念只有一个，那就是追求彻底的“组件化（Component）”。移除了 Controller 加 $scope 这种复杂的设计，大大降低了学习成本，组件式开发更容易理解也更加容易上手。
- 性能更好，渲染速度更快，变化检测效率更高
- 充分考虑了移动应用开发。（Angular Mobile Toolkit）
- 依赖注入机制演进。Angular2 中的依赖注入写法与 Java 中的注解（Annotation）非常类似，如果你熟悉 Spring 注解的用法，那么使用 Angular2 的依赖注入几乎没有学习成本。当然，概念上是有区别的，Angular2 中叫 Decorator（装饰器），更加贴近 Python 里面的 Decorator 的概念。
- 更加贴合未来标准。（如ES6/7，WebComponent）。框架整体上基于 TypeScript 开发。这是最大的一个变更，有很多人担忧这样是否会带来比较大的学习成本，实际的情况并非如此。因为 TypeScript 的语法与 Java 或者 C# 非常类似，因此对于从后端转过来的开发者来说，学习这门语言几乎是没有难度的。

## 2. Angular 核心

  Angular 2 应用程序应用主要由以下 8 个部分组成：
1、模块 (Modules)
2、组件 (Components)
3、模板 (Templates)
4、元数据 (Metadata)
5、数据绑定 (Data Binding)
6、指令 (Directives)
7、服务 (Services)
8、依赖注入 (Dependency Injection)。
下图展示了每个部分是如何相互工作的：
![overvie](http://upload-images.jianshu.io/upload_images/6278284-2d87331aa3bf0cee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  图中的模板 (Templates)是由 Angular 扩展的 HTML 语法组成，组件 (Components)类用来管理这些模板，应用逻辑部分通过服务 (Services)来完成，然后在模块中打包服务与组件，最后通过引导根模块来启动应用。
与用户直接交互的是模版，模版接收来自用户的操作，通过数据绑定与对应的组件类交互，组件类完成处理后，更新模版试图来反馈给用户。组件处于angular2中比较核心的地位，而指令及服务，都是作为组件的扩展
当然一上来就看到这么多核心，可能有些同学会害怕。不用着急，我们只需要记住 Angular 2的核心是“组件 (Components)”，其他的所有核心都是为组件提供服务而衍生的。
接下来我们会对以上 8 个部分分开解析：

### 2.1 模块 (Modules)

  Angular 应用程序是模块化的。每个 Angular 应用程序拥有至少一个 模块 ，即根模块，用来引导并运行应用。 你可以为它取任何名字。常规名字是 AppModule 。每个模块都是一个内聚的代码块专注于某个应用领域、工作流或紧密相关的功能。

- **模块有两层含义：**
    1. **框架代码以模块的形式组织（文件模块)：**  

        AngularJs包含了很多自带的文件模块: @angular/core (核心模块包含：变化检测，依赖注入，渲染等核心功能)，@angular/common (通用模块包含：常用的内置指令等)，@angular/forms (表单模块)，@angular/http（网络模块）等。

    2. **功能单元以模块的形式组织 （应用模块)：**

        文件模块关注的是代码层面，而应用模块关注的则是功能层面，一个大型的应用有大量的组件，指令，服务等构成。这些构建有些是没有交集的。而有些是需要协同工作来完成特定的功能。我们希望把这些有关联的构件包装到一块。形成一个比较独立的单元，这样的单元实际意义上就成为应用模块。简单的来说，应用模块就是对应用中零散的组件，指令，服务等按功能进行归类和包装。除此以为，应用模块可以很好的保护内部组件等。把希望对外暴露的构建通过export暴露出来。当其他模块引用该模块时。只能使用其对外暴露的构建。 
    
- **根模块：** 每个 Angular 应用都有一个根模块类。 按照约定，它的类名叫做 AppModule，被放在 app.module.ts文件中

    ```javascript
    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent }  from './app.component';

    @NgModule({
        imports:      [ BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap:    [ AppComponent ]
    })
    export class AppModule { }
    ```

- **@NgModule装饰器:**

    1. declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。上面例子列出了该应用程序中唯一的组件 AppComponent（根组件），它是应用的光秃秃的组件树的根
    2. exports - declarations 的子集，可用于其它模块的组件模板。
    3. imports - 本模块声明的组件模板需要的类所在的其它模块。  
    4. providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    5. bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。 

> 装饰器是TypeScript语法，用来修饰 JavaScript 类的函数。 Angular 有很多装饰器，它们负责把元数据附加到类上，以了解那些类的设计意图以及它们应如何工作。

- **在 main.ts 中引导:**

    在main.ts文件中，我们通过引导 AppModule 来启动应用。针对不同的平台，Angular 提供了很多引导选项。
    1. 通过即时 (JiT) 编译器动态引导 
    2. 使用预编译器 (AoT - Ahead-Of-Time) 进行静态引导
  

- **模块划分：**

    1. **根模块：** Angular2 要想能成功的运行，至少的有一个根模块，作为应用启动的入口。
    2. **特性模块：** 当我们的应用不断的添加新功能。对新增加的功能，我们可以封装到一个模块里，然后导入到跟模块中。  
这些新增加的模块，在 Angular2 里面我们称之为特性模块。有了特性模块，根模块承载的功能逻辑也可以抽离出来，保持根模块的简洁。  
Angular 2 支持把一个模块延后加载，这个特性使得即使我们的应用变得非常庞大，初始加载的模块依然可以控制在一定范围内，大大加快应用的加载时间。
    3. **共享模块：** 当我们的特性模块越来越多后，他们之间有很多相似的功能组件，这些公共的部分也可以封装到一个模块中，我们称之为共享模块。
    4. **核心模块：** 我们知道一个应用终有一些全局的组件或者服务，他们只需要在应用启动的时候初始化一次即可，例如维护登录信息的服务，公共的头部和尾部组件等。  
虽然我们可以把他们放到根模块里，但更好的做法是把他们抽离出来放到一个独立的模块，这个模块即为核心模块。核心模块要求只导入到跟模块中，而尽量不到导入到特性模块或者共享模块里面。


### 2.2 组件 (Components) 

- **什么是组件：**

    组件是构成 Angular 2的基础和核心。那具体什么是组件？组件是构成 Angular 2 的基础单元，而且这些组件层层嵌套，自上而下的形成一棵组件树。

- **组件的组成元素**

    1. html 页面结构
    2. css 样式
    3. javascript 逻辑代码
    
    ```javascript
    import { Component } from '@angular/core';

    @Component({
        selector: 'my-app',
        template: '<h1>{{title}}</h1>',
    })
    export class AppComponent {
        title = 'Minimal NgModule';
    }
    ```

   @NgModule.bootstrap 属性把这个 AppComponent 标记为引导 (bootstrap) 组件。 当 Angular 引导应用时，它会在 DOM 中渲染 AppComponent

- **组件通讯**
    
    每个组件都包含完整的页面及逻辑代码，能独立的完成各自功能。但是组件以树的形式来组织，意味着组件不会是孤立的存在。他们之间有一套完善的通讯机制，每一个组件可以定义自己的输入及输出属性，这些属性形成了组件对外接口，负责与上下游的组件进行交互
    
- **组件的生命周期**

    每个组件都有完整的生命周期钩子，这些钩子让我们清楚的了解组件的状态变化。几个比较重要的钩子：
    1. Constructor 构造器初始化
    2. OnChanges 第一次触发数据变化的钩子
    3. OnInit 组件初始化
    4. OnChanges 运行期间触发数据变化钩子
    5. OnDestroy 组件销毁前



### 2.3 模板 (Templates)

- **模版**

    模板就是 AngularJs 组件的视图。通常就是HTML语言编写。用来告诉 Angular 如何显示组件。

- **模版分类**

    1. 内联模版：细心的同学应该会发现，组件的元数据里有一个叫 template 的属性，这个属性就是来定义组件来的模版。而将模版直接写在组件的元数据里。这种方式我们变称之为内联模版。
    
        ```javascript
        @Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1>',
        })
        ...
        ```

    2. 外联模版：如果需要定一个外联的模版，可以使用 templateUrl 属性，需要注意的是,在一个组件里同时只能存在一种模版。

        ```javascript
        @Component({
            selector: 'my-app',
            templateUrl: 'path/to/foo.html',
        })
        ...
        ```

### 2.4 元数据 (Metadata)

  元数据告诉 Angular 如何处理一个类。考虑以下情况我们有一个组件叫作 Component ，它是一个类，直到我们告诉 Angular 这是一个组件为止。你可以把元数据附加到这个类上来告诉 Angular Component 是一个组件。在 TypeScript 中，我们用 装饰器 (decorator) 来附加元数据。

- **组件中的元数据：** 在App组件中，selector 和 template 就是用来描述组件 App 的元数据。selector 是一个 css3 选择器，程序运行的时候他能匹配到 HTML 中的 my-app 标签。并把组件视图输出到该标签中。而 template 元数据是用来告诉 Angular 组件该如何渲染的 HTML 结构

    ```javascript
    @Component({
        selector: 'my-app',
        template: '<h1>{{title}}</h1>',
    })
    export class AppComponent {
        title = 'Minimal NgModule';
    }
    ```

### 2.5 数据绑定 (Data Binding)

  数据绑定在模板与对应组件的交互中扮演了重要的角色,如果没有数据绑定，我们得自己把数据推送到 HTML 中。手工编写这些代码枯燥无味，并且容易出错。相信写过 JQuery 的程序员都深有体会。
而数据绑定的出现，很好的解决了这个问题

![databinding](http://upload-images.jianshu.io/upload_images/6278284-6d85a98ab6639eea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  数据属性值通过属性绑定从组件流到输入框。用户的修改通过事件绑定流回组件，把属性值设置为最新的值。
 
  数据绑定为应用程序提供了一种简单而一致的方法来显示数据以及数据交互，它是管理应用程序里面数值的一种机制。通过这种机制，可以从 HTML 里面取值和赋值，使得数据的读写，数据的持久化操作变得更加简单快捷。如图所示，数据绑定的语法有四种形式。每种形式都有一个方向——从 DOM 来、到 DOM 去、双向，就像图中的箭头所示意的。

![databinding2](http://upload-images.jianshu.io/upload_images/6278284-27d522f227e88c28.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

1. **插值 : 在 HTML 标签中显示组件值。**

    ```javascript
    <h3>{{title}}</h3>
    ```

2. **属性绑定: 把元素的属性设置为组件中属性的值。**

    ```javascript
    <img [src]="userImageUrl">
    ```

3. **事件绑定: 在组件方法名被点击时触发。**

    ```javascript
    <button (click)="onSave()">保存</button>
    ```
    
4. **双向绑: 使用 Angular 里的 NgModel 指令可以更便捷的进行双向绑定。**

    ```javascript
    <input [value]="currentUser.firstName"
        (input)="currentUser.firstName=$event.target.value" >
    ```

  另外数据绑定在父子组件通讯也非常重要：

![parent-child-binding](http://upload-images.jianshu.io/upload_images/6278284-93e946a4a0a3caa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.6 指令 (Directives)

  Angular模板是动态的。当 Angular 渲染它们时，它会根据指令对 DOM 进行修改。

![directive](http://upload-images.jianshu.io/upload_images/6278284-8b97c1a34230f5b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **指令类型：**
    1. 属性指令：以元素的属性形式来使用的指令。
    2. 结构指令：用来改变 DOM 树的结构
    3. 组件：作为指令的一个重要子类，组件本质上可以看作是一个带有模板的指令。
- **属性指令：** ngModel 指令就是属性型指令的一个例子，它实现了双向数据绑定。 ngModel 修改现有元素（一般是<input>）的行为：设置其显示属性值，并响应 change 事件。

    ```javascript
    <input [(ngModel)]="hero.name">
    ```

- **结构指令：** 结构型指令通过在 DOM 中添加、移除和替换元素来修改布局

    ```javascript
    <li *ngFor="let site of sites"></li>
    <site-detail *ngIf="selectedSite"></site-detail>
    ```  

- **组件：** 组件是一个带模板的指令；@Component 装饰器实际上就是一个 @Directive 装饰器，只是扩展了一些面向模板的特性。
虽然严格来说组件就是一个指令，但是组件非常独特，并在 Angular 中位于中心地位，所以在架构概览中，我们把组件从指令中独立了出来。

### 2.7 服务 (Services)

  服务是一个广义范畴，包括：值、函数，或应用所需的特性。几乎任何东西都可以是一个服务。 典型的服务是一个类，具有专注的、明确的用途。它应该做一件特定的事情，并把它做好。

![service](http://upload-images.jianshu.io/upload_images/6278284-0939787753ba5830.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **例如：**
    1. 日志服务
    2. 数据服务
    3. 消息总线
    4. 税款计算器
    5. 应用程序配置

- **日志服务：** 

    ```javascript
    export class Logger {
        log(msg: any)   { console.log(msg); }
        error(msg: any) { console.error(msg); }
        warn(msg: any)  { console.warn(msg); }
    }
    ```

### 2.8 依赖注入 (Dependency Injection)
  在传统的开发模式中，调用者负责管理所有对象的依赖，循环依赖一直是梦魇，而在依赖注入模式中，这个管理权交给了注入器(Injector)，它在软件运行时负责依赖对象的替换，而不是在编译时。
Angular 能通过查看构造函数的参数类型，来得知组件需要哪些服务。 

![injector-injects](http://upload-images.jianshu.io/upload_images/6278284-37985491edcb6dfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当 Angular 创建组件时，会首先为组件所需的服务请求一个注入器 (injector)。注入器维护了一个服务实例的容器，存放着以前创建的实例。 如果所请求的服务实例不在容器中，注入器就会创建一个服务实例，并且添加到容器中，然后把这个服务返回给 Angular。 当所有请求的服务都被解析完并返回时，Angular 会以这些服务为参数去调用组件的构造函数。 这就是依赖注入 

- **例如:** AppComponent 组件的构造函数需要一个 LoggerService;我们看到元数据里多了一个providers属性，这是依赖注入的关键步骤。依赖注入机制会根据 providers 的属性，实例化一个
LoggerService，并缓存到注入器中。而组件构造函数里，也有一个 LoggerService 类型的参数，这种指定类型的参数是 TypeScript 提供的。接下来，依赖注入机制会根据参数需求，从注入器中查找 LoggerService 类型的实例。找到以后传入到组件的构造函数里。最终组件便获得了 LoggerService 的实例引用。

    ```javascript
    @Component({
        selector: 'my-app',
        template: '<h1>{{title}}</h1>',
        providers：[LoggerService]
    })
    export class AppComponent {
        title = 'Minimal NgModule';
        constructor(private logger: LoggerService) { }
    }
    ```

- **分层注入（hierarchical dependency injection）:**

  我们知道每个 Angular 应用对应这一棵组件树，要了解分层注入，首先要了解一下组件树与依赖注入的关系。回到前面的例子，大家会不会有个疑问，是否每个组件都需要注入 LoggerService 才能使用这个服务呢。答案是否定的。当我们在某个组件里注入服务后，它以及他的所有子组件都能复用到这个服务。而且是保持单例的形态。例如根组件的日志级别是 warn 的，则所有的子组件也会是 warn 级别。LoggerService 只需要实例化并只配置一次。但是当项目越来越庞大的时候。可能某个子组件需要打印出更详细的日志信息。大家思考一个问题，如果修改子组件的日志级别可以吗？很显然，由于注入的 LoggerService 是单例的，当你修改子组件的日志级别以后，注入 LoggerService 的根组件及其子组件的日志级别都会跟着变化。这个时候便需要使用分层注入。分层注入允许我们在组件里重新创建一个新的实例，只需要在对应的组件里重新注入 LoggerService 即可。分层注入源于组件树里的不同层级。

## 3. Angular 2 环境搭建

### 3.1 环境准备

- **[git](https://git-scm.com/downloads) 代码管理**

    git类似于svn。用于与代码仓库交互，下载代码等。在 windows 上安装 git 非常简单，直接进入官网，下载对应的二进制安装包。一路下一步。完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。

- **[node.js](https://nodejs.org/en/download/) 运行环境** 

     node.js 是一个 javascript 的运行环境，我们的 AngularJS 应用就是要运行在该环境上。
     进入 node.js 官网。如果是OS X或者windows系统，安装 node.js 最好的方法就是下载 Node.js 的二进制文件，直接安装。笔者是 windows，具体安装步骤就不展示了，一路next安装。
     安装完成后打开 cmd 命令行。键入 node -v验证是否安装成功。新版本的 nodejs 内置 npm，不需要独立安装了。

- **[Visual Studio Code](https://code.visualstudio.com/Download) IDE开发工具** 
   
   Visual Studio Code（以下简称vscode）是一个轻量且强大的代码编辑器，支持 Windows，OS X和Linux。内置JavaScript、TypeScript 和 Node.js 支持，而且拥有丰富的插件生态系统，可通过安装插件来支持C++、C#、Python、PHP 等其他语言。

>请先在终端/控制台窗口中运行命令  node -v 和 npm -v， 来验证一下你正在运行 node 6.9.x 和 npm 3.x.x 以上的版本。 更老的版本可能会出现错误，更新的版本则没问题。

### 3.2 使用 Angular-cli 快速搭建工程

  Angular-cli 是用来快速搭建 Angular 项目的工具，在开发过程中，一个良好的前端框架非常重要，对于后续的开发，维护,团队协作等都有重要的意义。他本质也是使用了webpack 来编译，打包，压缩等构建的事情，类似于 java 中的 maven，约定大于配置。

- **安装Angular CLI** 
    
    新版的 angular-cli 已改名成 @angular/cli，更符合 angular 官方的命名规则 
    
     `>npm install -g @angular/cli`
     
     等待安装完成后，若没有报错信息，在 cmd 中输入以下命令进行验证

     `>ng -v`

  ```
       _                      _                 ____ _     ___
       / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
      / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
     / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
    /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                   |___/
     @angular/cli: 1.1.0
     node: 6.10.3
     os: win32 x64
  ```
    出现以上结果，证明 angular cli 安装成功。

- **创建第一个工程** 
    
    使用 angular-cli 创建第一个工程。ng new 工程名

     `>ng new helloworld`
     
     请耐心等待。 创建新项目需要花费很多时间，大多数时候都是在安装那些 npm 包。

  ```javascript
Successfully initialized git.
Installing packages for tooling via npm.
Installed packages for tooling via npm.
You can `ng set --global packageManager=cnpm
Project 'helloworld' successfully created.
```

安装成功后会看到以上的信息。进入文件目录看一下项目结构,先有个印象

![files](http://upload-images.jianshu.io/upload_images/6278284-185247ad0b129591.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **运行起来看看吧** 

    进入项目目录，并启动服务器。

    `>cd helloworld`
    
    `>ng serve`

    浏览器输入 http://localhost:4200/ 就可以看到

![injector-injects](http://upload-images.jianshu.io/upload_images/6278284-8be3eb14f5c240c7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **目录结构说明** 
    
  Angular 为我们生成了项目结构。大部分情况下，我们只在 src 下的工作，所有的 Angular 组件、模板、样式、图片以及你的应用所需的任何东西都在那里。这个文件夹之外的文件都是为构建应用提供支持用的，一般情况下不需要修改。

```javascript
+---e2e                              // 在e2e/下是端到端（End-to-End）测试。
|       
+---node_modules                     // package.json中列举的所有第三方模块都放在其中
|
 \---src                             // 代码源文件
|    |   favicon.ico                 // 图标 
|    |   index.html                  // 网站首页
|    |   main.ts                     // 这是应用的主要入口点  
|    |   polyfills.ts                // 标准化   
|    |   styles.css                  // 样式文件
|    |   test.ts                     // 测试入口
|    |   tsconfig.app.json           // TypeScript编译器对应用的配置文件
|    |   tsconfig.spec.json          // TypeScript编译器对测试的配置文件
|    |   typings.d.ts                // TypeScript用于标记对象类型文件
|    |   
|    +---app                         // app模块文件夹，类似与java的包
|    |       app.component.css       // app模块的样式文件
|    |       app.component.html      // app模块的HTML模版
|    |       app.component.spec.ts   // app模块的测试文件
|    |       app.component.ts        // app模块逻辑处理
|    |       app.module.ts           // app模块入口
|    |       
|    +---assets                      // 资源文件夹
|    |       .gitkeep                // 没什么卵用，git用的
|    |       
|    \---environments                // 环境配置
|            environment.prod.ts     
|            environment.ts          
|
|   .angular-cli.json                // Angular CLI的配置文件
|   .editorconfig                    // 编辑器看的一个简单配置文件 
|   .gitignore                       // git用的，与svn的ignore一个意思
|   karma.conf.js                    // Karma的单元测试配置
|   package.json                     // npm配置文件，其中列出了项目使用到的第三方依赖包
|   protractor.conf.js               // 给Protractor使用的端到端测试配置文件
|   README.md                        // 项目说明文件
|   tsconfig.json                    // TypeScript编译器的配置
|   tslint.json                      // 代码风格 
```

### 3.3 使用 angular-cli 添加新的构建

- **angular cli 可以使用 ng generate 命令来添加新的构建到我们创建的Angular应用中：**

    ```
    +-----------------------------------------+-------------------------+---------------------------------------
    | 命令                                    | 简写                    | 说明     
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate class my-new-class:         | ng g cl my-new-class    | 创建类   
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate component my-new-component: | ng g c my-new-component | 创建组件 
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate directive my-new-directive: | ng g d my-new-directive | 创建指令 
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate enum my-new-enum:           | ng g e my-new-enum      | 创建枚举 
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate module my-new-module:       | ng g m my-new-module    | 创建模块 
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate pipe my-new-pipe:           | ng g p my-new-pipe      | 创建管道 
    +-----------------------------------------+-------------------------+---------------------------------------
    | ng generate service my-new-service:     | ng g s my-new-service   | 创建服务 
    +-----------------------------------------+-------------------------+---------------------------------------
    ```
    
- **创建一个新的组件：** 我们只演示一个最常用的构建，其他构建基本类似，就不再演示了

    ```javascript
    PS C:\Users\admin\Desktop\ng\helloworld> ng g c side-header
    installing component
        create src\app\side-header\side-header.component.css
        create src\app\side-header\side-header.component.html
        create src\app\side-header\side-header.component.spec.ts
        create src\app\side-header\side-header.component.ts
        update src\app\app.module.ts
    ```

    Angular Cli会自动调整构建的命名规则。文件夹及文件名使用 "-" 划分。类名则跟java一样遵循大驼峰风格。所以以下的命令所创建的组件是一样的。

    ```javascript
    # All three commands are equivalent
    > ng generate component site-header
    > ng generate component siteHeader
    > ng generate component SiteHeader
    ```

- **当我们输入以上命令后，Angular Cli会干些什么：**
    1. 创建文件夹 src/app/site-header
    2. 文件夹里面有四个文件会被创建
        - 组件的css样式文件
        - 组件的html模版文件
        - 一个TypeScript文件，组件类名 SiteHeaderComponent，元数据 selector app-site-header
        - spec文件，用于测试
    3. SiteHeaderComponent 被引入到模块组件 AppModule 中，并被加入到 @NgModule 的 decorator 中


- **可选用的参数：**

    - --flat: boolean, 默认 false, 文件生成在 src/app 而不是 src/app/site-header
    - --inline-template: boolean, 默认 false, 使用内联模版
    - --inline-style: boolean, 默认 false, 使用内联样式
    - --prefix: boolean, 默认 true, 使用定义在 .angular-cli.json 的前缀来命名组件元数据 selector 的值
    - --spec: boolean, 默认 true, 是否生成测试文件
    - --view-encapsulation: string, specifies the view encapsulation strategy
    - --change-detection: string, specifies the change detection strategy

    **使用 ng generate --help 来查看所有 Angular CLI 可用的参数帮助，以上可选参数一般很少使用，一般使用默认的配置就够了。**

### 3.4 单元测试

  如果你的应用是使用 angular cli 创建的，那么 angular cli 会自动为你的项目配置好Karma test runner。当添加新的构建的时候，你可以使用 --spec 来指定是否为构建同时创建一个测试文件。如果是，angular cli 会为你的构建创建一个同名的.spec.ts文件。 并放在相同的目录下，这样你可以很方便的查找定位到各个构建的测试文件。

- **使用命令来启动单元测试：**

    `> ng test`

- **控制台会输出如下信息：**

    ```javascript  
    PS C:\Users\admin\Desktop\ng\helloworld> ng test
    10% building modules 1/1 modules 0 active07 06 2017 17:16:27.034:WARN [karma]: No captured browser, open http://localhost:9876/
    07 06 2017 17:16:27.049:INFO [karma]: Karma v1.7.0 server started at http://0.0.0.0:9876/
    07 06 2017 17:16:27.051:INFO [launcher]: Launching browser Chrome with unlimited concurrency
    07 06 2017 17:16:27.057:INFO [launcher]: Starting browser Chrome
    94% asset optimization07 06 2017 17:16:35.001:ERROR [launcher]: Cannot start Chrome
    07 06 2017 17:16:35.002:ERROR [launcher]: Chrome stdout:
    07 06 2017 17:16:35.003:ERROR [launcher]: Chrome stderr:
    07 06 2017 17:16:35.201:WARN [karma]: No captured browser, open http://localhost:9876/
    07 06 2017 17:16:35.222:INFO [launcher]: Trying to start Chrome again (1/2).
    07 06 2017 17:16:37.155:INFO [Chrome 58.0.3029 (Windows 7 0.0.0)]: Connected on socket RKcuZfjrbi3bfyW1AAAA with id 7846195
    Chrome 58.0.3029 (Windows 7 0.0.0): Executed 4 of 4 SUCCESS (0.165 secs / 0.27 secs)
    ```

- **浏览器会被自动打开：**

   ![test](http://upload-images.jianshu.io/upload_images/6278284-b8a135c951312cc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- **ng test 执行顺序：**
    
    1. Angular CLI 加载 .angular-cli.json. 
    2. Angular CLI 运行配置在 .angular-cli.json. 中test的配置信息。默认会加载 .karma.conf.js 配置。
    3. karma 加载配置文件，打开默认的浏览器Chrome。
    4. karma 发送命令让浏览器使用测试框架(默认为 Jasmine framework) 运行src/test.ts 。src/test.ts 是Angular CLI自动创建的。默认情况下会测试src下所有以.spec.ts结尾的文件
    5. karma 会将测试结果输出到控制台及页面上
    6. karma 会监控src下的文件。如果文件发送变化，则重复步骤4，5。  

### 3.5 End-to-end(e2e) 端到端测试 

  Angular CLI 默认会使用 Protractor 框架来进行端到端的测试。


- **使用命令还启动端到端测试：**

    `>ng e2e`

- **控制台会输出如下信息：** 该过程会连接google服务器。需要科学上网，你懂得 ^.^
  
    ```javascript
    ** NG Live Development Server is running on http://localhost:49152 **
    Hash: e570d23ac26086496e1d
    Time: 6087ms
    chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 158 kB {4} [initial] [rendered]
    chunk    {1} main.bundle.js, main.bundle.js.map (main) 3.62 kB {3} [initial] [rendered]
    chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 9.77 kB {4} [initial] [rendered]
    chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.37 MB [initial] [rendered]
    chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]
    webpack: Compiled successfully.
    I/file_manager - creating folder /Users/jvandemo/Projects/test/my-app/node_modules/protractor/node_modules/webdriver-manager/selenium
    I/downloader - curl -o /Users/jvandemo/Projects/test/my-app/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.29.zip https://chromedriver.storage.googleapis.com/2.29/chromedriver_mac64.zip
    I/update - chromedriver: unzipping chromedriver_2.29.zip
    I/update - chromedriver: setting permissions to 0755 for /Users/jvandemo/Projects/test/my-app/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.29
    I/launcher - Running 1 instances of WebDriver
    I/direct - Using ChromeDriver directly... 
        Spec started
        helloworld App
            ✓ should display message saying app works
    Executed 1 of 1 spec SUCCESS in 0.523 sec.
    I/launcher - 0 instance(s) of WebDriver still running
    I/launcher - chrome #01 passed
    ```

- **ng e2e 执行顺序：**

    1. Angular CLI 加载 .angular-cli.json.
    2. Angular CLI 运行配置在 .angular-cli.json 中e2e的配置信息。默认会加载 protractor.conf.js 配置
    3. protractor 加载配置文件，打开默认的浏览器Chrome。
    4. protractor 发送命令给浏览器来测试所有在e2e文件夹下并且以.e2e-spec.ts结尾的文件
    5. protractor 输出报告到控制台


### 3.6 编译打包项目

  开发时我们使用ng serve来编译和打包你的应用到虚拟的文件系统中。但是当我们想把应用部署到生产服务上时。我们就需要真实的文件让我们可以部署到指定的服务器或者云上。

- **使用以下命令来编译和打包：**

    `>ng build`

- **控制台会输出如下信息：** 

    ```javascript
    PS C:\Users\admin\Desktop\ng\helloworld> ng build
    Hash: 36fd3eb7f23ff8da61e2
    Time: 8807ms
    chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 158 kB {4} [initial] [rendered]
    chunk    {1} main.bundle.js, main.bundle.js.map (main) 7.12 kB {3} [initial] [rendered]
    chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 10.5 kB {4} [initial] [rendered]
    chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 1.81 MB [initial] [rendered]
    chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]
    ```

- **ng build 执行顺序：**

    1. angular cli 加载 angular-cli.json。
    2. angular cli 根据 angular-cli.json 配置信息运行 Webpack 编译打包所有的 JavaScript 和 CSS 代码。
    3. 编译和打包好的文件默认会保存在 dist 目录下。

- **可选用的参数：**

    1. --aot: 静态编译
    2. --base-href: string, 配置index文件中的base-href
    3. --environment: string, 默认 dev, 设置环境
    4. --output-path: string, 输出目录
    5. --target: string, 默认 development, 编译打包的模式，默认是开发模式，可选 production 生产模式（即代码会压缩）。
    6. --watch: boolean, 默认 false, ture时会检测文件变化，自动编译 

### 3.7 环境 Environments

  angular cli 允许我们在angular-cli.json中定义环境信息。：

- **默认的环境配置**

    1. source: 使用 environments/environment.ts
    2. dev: 使用 environments/environment.ts
    3. prod: 使用 environments/environment.prod.ts

- **environments/environment.ts：**

    ```javascript
    export const environment = {
        production: false
    };
    ```

- **environments/environment.prod.ts：**

    ```javascript
    export const environment = {
        production: true
    };
    ```

- **编译指定环境：**

    使用 environments/environment.ts

    `ng build`

    使用 uses environments/environment.ts

    `ng build --environment=dev`

    使用 uses environments/environment.prod.ts

    `ng build --environment=prod`

- **src/main.ts :** 应用的入口程序会根据不同的环境来决定是否启动生产模式

    ```javascript
    import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app/app.module';
    import { environment } from './environments/environment';
    if (environment.production) {
        enableProdMode();
    }
    platformBrowserDynamic().bootstrapModule(AppModule);
    ```

### 3.8 总结

看完本章内容，你应该懂得如何使用Angular CLI做到以下几点：

- 使用Angular CLI 创建一个新的项目
- 使用Angular CLI 启动一个热加载的开发服务
- 使用Angular CLI 添加新的构建
- 使用Angular CLI 进行单元测试
- 使用Angular CLI 进行端到端测试
- 使用Angular CLI 根据不同环境编译打包项目

虽然 Anhular CLI 对于 Angualr 并不是必须，你也可以手动创建 Angular 应用，定制项目的结构，自己编写webpack 配置文件等。但是毫无疑问的是 Angular CLI 不仅可以为我们构建项目节约大量的时间，也提供了高质量的代码结构等。