# Angular2 实例（一）：TODO MVC 
> 本文使用 Angular 2 搭建一个 TODO MVC 的例子。如果你不知道什么是 TODO MVC 的话，引用官方的一句话是：“ToDoMVC Helping you select an MV* framework”。如果你没听说过什么是 TODO MVC，下图是本文完成后的大概样子。

![todo-demo](http://upload-images.jianshu.io/upload_images/6278284-1594477110513482.gif?imageMogr2/auto-orient/strip)

**本文需要做到：**

- 使用 Angular Cli 初始化一个 TODO MVC 项目。
- 创建一个 Todo 类。用来描述 todo 的信息。
- 创建一个 TodoService，用来对 todo 信息的增删改查。
- 使用 AppComponent 来向用户展示。

## 1. 使用 Angular CLI 来初始化你的 Todo Application

使用 Angular CLI 是一个最简单高效的方法来创建你的 Angular 项目。如果你对 Angular 还不熟悉的话，可以看看我之前写的一篇文章，对 Angular 的历史,核心及项目结构有一个了解。

- **安装 Angular CLI** 
    
    新版的angular-cli已改名成@angular/cli，更符合angular官方的命名规则 
    
     `>npm install -g @angular/cli`
     
    等待安装完成后，若没有报错信息，在cmd中输入一下命令进行验证

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
    出现以上结果，证明 angular cli 安装成功
- **初始化你的项目** 
    
    使用 angular-cli 创建第一个工程。ng new 工程名

     `>ng new todo-app`
     
    请耐心等待。 创建新项目需要花费很多时间，安装npm包需要比较长的时间。

- **启动服务** 

    `>cd todo-app`

    `>ng serve`

    正常情况下，启动成功后浏览器会自动打开。或者你可以使用 http://localhost:4200/. 来访问。

## 2. 创建 Todo Class

- **使用 Angular CLI 创建 Todo 对象** 

     `ng g cl Todo` 

    该命令会创建一个 TypeScript 类:

     `src/app/todo.ts` 
    
    文件 todo.ts 内容很简单，如下(当然你也可以手动创建）:

    ```
    export class Todo {
    }
    ```

- **修改 todo 对象** 

    ```
    export class Todo {
        id: number;
        title: string = '';
        complete: boolean = false;

        constructor(values: Object = {}) {
            Object.assign(this, values);
        }
    }
    ```
    
    在这个类里面我们定义了三个属性和一个构造函数：

    - id: number类型, todo 的 id
    
    - title: string类型, todo 的标题

    - complete: boolean类型, 用来表示 todo 是否已经完成

    - constructor：构造函数，方便我们 **new** 一个 todo 对象：

## 2. 创建 TodoService

TodoService 用来管理 Todo 实例的增删改查功能。这里我们会把数据直接保存在内存里。在实际的生产中一般会访问远程接口的 API 等，但这不是本文的重点。

- **创建 TodoService 对象** 

     `ng g s Todo`

    该命令会创建一个两个文件:

     `src\app\todo.service.spec.ts` 
     
     `src\app\todo.service.ts` 

    todo.service.ts :

    ```
    import { Injectable } from '@angular/core';

    @Injectable()
    export class TodoService {

    constructor() { }

    }
    ```
    todo.service.spec.ts (测试):

    ```
    import { TestBed, inject } from '@angular/core/testing';
    import { TodoService } from './todo.service';

    describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [TodoService]
        });
    });

    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));
    });
    ```

- **修改 todo.service.ts 增加逻辑代码** 

    ```
    import { Todo } from './todo';
    import { Injectable } from '@angular/core';

    @Injectable()
    export class TodoService {

        // 增加 todo 时模拟自增id
        id: number = 0;

        // 用于在内存里保存 todo 信息
        todos: Todo[] = [];

        constructor() { }

        add(todo: Todo): Todo {
            if (!todo.id) {
            todo.id = ++this.id;
            }
            this.todos.push(todo);
            return todo;
        }
        deleteById(id: number): void {
            this.todos = this.todos
            .filter(todo => todo.id !== id);
        }
        update(todo: Todo): Todo {
            let t = this.findById(todo.id);
            if (!t) {
            return null;
            }
            Object.assign(t, todo);
            return t;
        }
        findById(id: number): Todo {
            return this.todos
            .filter(todo => todo.id === id)
            .pop();
        }
        findAll(): Todo[] {
            return this.todos;
        }
        toggleTodoComplete(todo: Todo){
            todo.complete = !todo.complete;
            let u = this.update(todo);
            return u;
        }
    }
    ```

- **修改 todo.service.spec.ts 增加测试代码** 

    编写完 todo.service.ts 逻辑代码后，你需要确认你的服务接口是不是正常。这时候需要在todo.service.spec.ts编写 TodoService 的测试代码

    ```
    import { TestBed, inject } from '@angular/core/testing';

    import { TodoService } from './todo.service';
    import { Todo } from './todo';

    describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [TodoService]
        });
    });

    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));

    it('get all todos', inject([TodoService], (service: TodoService) => {
        expect(service.findAll()).toEqual([]);
    }));

    it('add todo ', inject([TodoService], (service: TodoService) => {
        let todo1 = new Todo({ title: 'test', complete: false });
        service.add(todo1);
        expect(service.findById(1)).toEqual(todo1);
    }));

    it('toggle todo complete', inject([TodoService], (service: TodoService) => {
        let todo = new Todo({title: 'test', complete: false});
        service.add(todo);
        let updatedTodo = service.toggleTodoComplete(todo);
        expect(updatedTodo.complete).toEqual(true);
        service.toggleTodoComplete(todo);
        expect(updatedTodo.complete).toEqual(false);
        }));

    });
    ```

    这里只写了部分测试代码，使用一下命令测试：

    `ng test`

    运行后浏览器会自动打开

    ![todo-test](https://static.oschina.net/uploads/img/201706/16150552_MeSU.png )

- **看看 todo.service.spec.ts 的结构** 

    >ng test 使用 jasmine 来进行测试，关于更多的内容你可以查看 [jasmine 官方文档](https://jasmine.github.io/2.4/introduction.html)

    ![jasmine](http://upload-images.jianshu.io/upload_images/6278284-5fbf503ee8de633c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)    

    测试代码会调用全局的 jasmine 函数 describe 。describe 函数包含两个参数，一个描述，另外一个便是测试方法。

    ```
   beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService]
        });
    });
    ```

    TestBed 是 @angular/core/testing 提供的用来配置和创建 Angular Test 模块。我们使用 TestBed.configureTestingModule()方法配置相关信息。
    providers 属性告诉测试模块，当我们运行测试用例时需要什么东西。

    ```
    it('get all todos', inject([TodoService], (service: TodoService) => {
        expect(service.findAll()).toEqual([]);
    }));
    ```

    it 类似于 java 里的测试单元，该方法的第一个参数是一个名称，第二个参数是真正的测试方法。TestBad 注册器会为我们注入TodoService，以便我们在我们的测试方法里面访问到这个service。

## 3. 编写 AppComponent 组件

当我们初始化完这个项目的时候，Angular CLI 已经自动为我们创建了一个主组件 AppComponent ，包含了一下4个文件：

```
src/app/app.component.css       // css 样式文件
src/app/app.component.html      // html 结构文件
src/app/app.component.spec.ts   // 测试文件
src/app/app.component.ts        //逻辑代码
```
到这里整个

- **修改 app.component.html**

    1. 我们先看一下app.component.html原来的样子：

        ```xml
        <h1>
         {{ title }}
        </h1>
        ```

    2. 我们需要修改成我们的需要的结构：

        ```xml
        <section class="todoapp">
        <header class="header">
            <h1>Todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()">
        </header>
        <section class="main" *ngIf="todos.length > 0">
            <ul class="todo-list">
            <li *ngFor="let todo of todos" [class.completed]="todo.complete">
                <div class="view">
                <input class="toggle" type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">
                <label>{{todo.title}}</label>
                <button class="destroy" (click)="removeTodo(todo)"></button>
                </div>
            </li>
            </ul>
        </section>
        <footer class="footer" *ngIf="todos.length > 0">
            <span class="todo-count"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>
        </footer>
        </section>
        ```

    3. 如果你对上面的模版语法还不熟悉，没关系，这里对 Angular 2 的模版语法做一个简单的介绍：

        - [property]="expression": 属性绑定，会将表达式的值设置给 property 属性。
        - [style.color]="expression": 属性绑定，会将表达式的值设置给样式属性 color。
        - [class.special]="expression": 属性绑定，如果表达式为真，则为 class 属性添加 special 样式。
        - (event)="statement": 事件绑定，当发生 event 事件时执行 statement。
        - [(property)]="expression": 双向数据绑定，表达式的值变化会影响 property。property 的值变化也会影响表达式的值

- **app.component.html 各个部分解析**

    1. 首先在最上面是一个 input ，用来创建新的todo对象：

        ```
        <input [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()" 其他属性 >
        ```

        - `[(ngModel)]="newTodo.title"` : 

            双向数据绑定，在这里会绑定 newTodo.title 和这个 input 的 value 值。

        - `(keyup.enter)="addTodo()"` : 

            事件绑定，当回车键发送 keyup 事件时，执行 addTodo() 这个方法。

    这里我们还没有在 AppComponent 里定义 newTodo 和 addTodo。 很快我们就会讲到，这里先试着了解 Angular 模版的语法。

    2. 接下来是一个 section 里面用于定义 todo 列表的展示方式：

        ```
        <section class="main" *ngIf="todos.length > 0">
        ```

        - `*ngIf="todos.length > 0"` : 
        
            angular 内置指令，当 todos.length > 0 时才显示 section 和 section 的子元素。 
    
    3.  接下来是 ul 里套着一个li：

        ```
        <li *ngFor="let todo of todos" [class.completed]="todo.complete">
        ```

        - `*ngFor="let todo of todos"` : 
            
            angular 内置指令，循环 todos 对象，生成 n 条 li 标签，n = todos.length。并为每条 li 赋值一个 todo 对象。

        - `[class.completed]="todo.complete"` : 
        
            当 todo.complete 等于 true 时，为该标签的 class 添加 completed 。

    4. 最后是是一个 view 用于展示每个 todo 的详细信息
        
        ```xml
        <div class="view">
            <input  type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">
            <label>{{todo.title}}</label>
            <button (click)="removeTodo(todo)"></button>
        </div>
         ```

        - `(click)="toggleTodoComplete(todo)" ` :

            当发生点击事件时，会执行 toggleTodoComplete 方法 todo 对象作为参数传入。

        - `[checked]="todo.complete"` : 

            绑定 todo.complete 的值到 checked 属性。

        - `(click)="removeTodo(todo)"` :

            当点击 button 按钮时，执行 removeTodo 方法，并将 todo 对象作为参数传入。

到这里整个 app.component.html 的所有部门都介绍完毕。当然你可能会一头雾水，里面的 todos ，newTodo 还是 addTodo() 等，都是些什么东西。他们要定义在哪里? 又是如何访问的。别着急，下面我们马上就会讲到。

- **编写 app.component.ts**
    
    1. 我们在先看一下 Angular CLI 默认为我们创建的这个文件里都有什么：

        ```
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            title = 'app works!';
        }
        ```

        这个文件很简单。首先是一个 @Component 的**装饰器**，装饰器作用在类上用来告诉 Angular 这个类的一些附加属性。而这些附加的属性就是称之为**元数据**。

        - `selector: 'app-root'`:

            css3 选择器，当 Angular 在模版里发现了 `<app-root>` 这个标签后，便会用本组件去渲染。

        - `templateUrl: './app.component.html` :

            模版Url，这里就是我们上面一小节讲到的 app.component.html。用于告诉 Angular 本组件该如何渲染。
        
        - `styleUrls: ['./app.component.css']` :

            css Url，样式文件的路径。一个完美的 css 能让我们的组件看起来更赏心悦目。

    2. 接下来，我们要为 app.component.ts 注入 TodoService 服务。

        ```
        import {TodoService} from './todo.service';

        @Component({
            // ...
            providers: [TodoService]
        })
        export class AppComponent {
            // ...
            constructor(private todoService: TodoService) {
            }
        }
        ```

        - `providers: [TodoService]` ：

            我们在元数据里添加了一个 providers 属性。Angular 会根据 providers 的值会到注入器中查找是否已经有 TodoService 实例，如果没有，会自动帮我们实例化一个 TodoService 对象。并存放在注入器中。

        - `constructor(private todoService: TodoService) {}` :

            这句话便是真正的注入， Angular 注入器会为这个组件注入 TodoService 的实例，并赋值给 todoService 属性。其实这里等价于：

            ```
            // ...
            export class AppComponent {
                private todoService:TodoService;
                // ...
                constructor(todoService: TodoService) {
                    this.todoService = todoService;
                }
            }
            ```
    3. 增加我们的逻辑代码：

        ```
        import { Component } from '@angular/core';
        import { TodoService } from './todo.service';
        import { Todo } from './todo';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [TodoService]
        })
        export class AppComponent {

            newTodo: Todo = new Todo();
            constructor(private todoService:TodoService){}

            addTodo() {
                this.todoService.add(this.newTodo);
                this.newTodo = new Todo();
            }

            toggleTodoComplete(todo) {
                this.todoService.toggleTodoComplete(todo);
            }

            removeTodo(todo) {
                this.todoService.deleteById(todo.id);
            }

            get todos() {
                return this.todoService.findAll();
            }
        }
        ```

        你可能不信，增加完上面的代码，我们的应用已经能正常运行了，不过我们还是来看看这个文件的内容：

        - `newTodo: Todo = new Todo();` :

            newTodo 属性用于新增 todo 对象时绑定属性。还记得我们页面的第一个 input 标签吗？ `<input  [(ngModel)]="newTodo.title" (keyup.enter)="addTodo()"> ` 这里对 input 值和 newTodo.title 的值做了双向绑定，只要这两个值中的一个变化，另外一个都会跟着变化。
        
        - `addTodo()` :

            ```  
            addTodo() {
                this.todoService.add(this.newTodo);
                this.newTodo = new Todo();
            }
            ``` 

            可能你已经猜到了，当你在页面上按下回车时，那个`(keyup.enter)="addTodo()"` 调用方法的实现，就是在这里。addTodo会调用注入的 todoService 的 add 方法。把 newTodo 进行保存。并将 this.newTodo 赋值一个新的 Todo 对象。

        - ` toggleTodoComplete(todo)` :

            ```
            toggleTodoComplete(todo) {
                this.todoService.toggleTodoComplete(todo);
            }
            ```

            页面`<input type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">`,当你点击这个 checkbox 时，变会调用 toggleTodoComplete 方法并将 todo 对象传入，toggleTodoComplete 使用 todoService 服务的来转变 todo 的 complete 属性。当todo.complete 的值发生变化时，`[checked]` 的值也会跟着变化。

        - `removeTodo(todo)` :

            ```
            removeTodo(todo) {
                this.todoService.deleteById(todo.id);
            }
            ```    

            页面`<button (click)="removeTodo(todo)"></button>`,当你点击删除按钮是，便会调用 removeTodo 方法，并传入 todo 对象作为方法的参数。而removeTodo 会根据传入的参数调用 todoService 服务的 deleteById 来删除这个 todo 对象。

        -  `get todos()` ：

            ```
            get todos() {
                return this.todoService.findAll();
            }
            ```

            如果你对 java bean 的定义熟悉的话你应该能猜个大概。这个方法是一个属性方法。相当于定义了一个 todos 属性。 并为这个 todos 属性添加了 get 方法。所以当页面 `<li *ngFor="let todo of todos" >` 这个标签获取 todos 的数据时，便会调用 `get todos()` 方法。而 `get todos()` 会调用 todoService 服务的 findAll 方法，并返回所有的 todos。

    4. 编写我们的样式文件

        样式文件并不是本文的重点，这里贴出样式的代码，省的小伙伴自己编写。

        - `./src/style.css` : 这个文件用于设置全局css属性：

            ```javascript
            html,
            body {
                margin: 0;
                padding: 0;
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: none;
                font-size: 100%;
                vertical-align: baseline;
                font-family: inherit;
                font-weight: inherit;
                color: inherit;
                -webkit-appearance: none;
                appearance: none;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }

            body {
                font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
                line-height: 1.4em;
                background: #f5f5f5;
                color: #4d4d4d;
                min-width: 230px;
                max-width: 550px;
                margin: 0 auto;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: antialiased;
                font-smoothing: antialiased;
                font-weight: 300;
            }

            button,
            input[type="checkbox"] {
                outline: none;
            }

            .hidden {
                display: none;
            }
            ```

        - `/src/app/app.component.css` : 编写我们组件的样式

            ```javascript
            .todoapp {
                background: #fff;
                margin: 130px 0 40px 0;
                position: relative;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                            0 25px 50px 0 rgba(0, 0, 0, 0.1);
            }

            .todoapp input::-webkit-input-placeholder {
                font-style: italic;
                font-weight: 300;
                color: #e6e6e6;
            }

            .todoapp input::-moz-placeholder {
                font-style: italic;
                font-weight: 300;
                color: #e6e6e6;
            }

            .todoapp input::input-placeholder {
                font-style: italic;
                font-weight: 300;
                color: #e6e6e6;
            }

            .todoapp h1 {
                position: absolute;
                top: -155px;
                width: 100%;
                font-size: 100px;
                font-weight: 100;
                text-align: center;
                color: rgba(175, 47, 47, 0.15);
                -webkit-text-rendering: optimizeLegibility;
                -moz-text-rendering: optimizeLegibility;
                text-rendering: optimizeLegibility;
            }

            .new-todo,
            .edit {
                position: relative;
                margin: 0;
                width: 100%;
                font-size: 24px;
                font-family: inherit;
                font-weight: inherit;
                line-height: 1.4em;
                border: 0;
                outline: none;
                color: inherit;
                padding: 6px;
                border: 1px solid #999;
                box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }

            .new-todo {
                padding: 16px 16px 16px 60px;
                border: none;
                background: rgba(0, 0, 0, 0.003);
                box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
            }

            .main {
                position: relative;
                z-index: 2;
                border-top: 1px solid #e6e6e6;
            }

            label[for='toggle-all'] {
                display: none;
            }

            .toggle-all {
                position: absolute;
                top: -55px;
                left: -12px;
                width: 60px;
                height: 34px;
                text-align: center;
                border: none; /* Mobile Safari */
            }

            .toggle-all:before {
                content: '❯';
                font-size: 22px;
                color: #e6e6e6;
                padding: 10px 27px 10px 27px;
            }

            .toggle-all:checked:before {
                color: #737373;
            }

            .todo-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .todo-list li {
                position: relative;
                font-size: 24px;
                border-bottom: 1px solid #ededed;
            }

            .todo-list li:last-child {
                border-bottom: none;
            }

            .todo-list li.editing {
                border-bottom: none;
                padding: 0;
            }

            .todo-list li.editing .edit {
                display: block;
                width: 506px;
                padding: 13px 17px 12px 17px;
                margin: 0 0 0 43px;
            }

            .todo-list li.editing .view {
                display: none;
            }

            .todo-list li .toggle {
                text-align: center;
                width: 40px;
                /* auto, since non-WebKit browsers doesn't support input styling */
                height: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                border: none; /* Mobile Safari */
                -webkit-appearance: none;
                appearance: none;
            }

            .todo-list li .toggle:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
            }

            .todo-list li .toggle:checked:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
            }

            .todo-list li label {
                white-space: pre-line;
                word-break: break-all;
                padding: 15px 60px 15px 15px;
                margin-left: 45px;
                display: block;
                line-height: 1.2;
                transition: color 0.4s;
            }

            .todo-list li.completed label {
                color: #d9d9d9;
                text-decoration: line-through;
            }

            .todo-list li .destroy {
                display: none;
                position: absolute;
                top: 0;
                right: 10px;
                bottom: 0;
                width: 40px;
                height: 40px;
                margin: auto 0;
                font-size: 30px;
                color: #cc9a9a;
                margin-bottom: 11px;
                transition: color 0.2s ease-out;
            }

            .todo-list li .destroy:hover {
                color: #af5b5e;
            }

            .todo-list li .destroy:after {
                content: '×';
            }

            .todo-list li:hover .destroy {
                display: block;
            }

            .todo-list li .edit {
                display: none;
            }

            .todo-list li.editing:last-child {
                margin-bottom: -1px;
            }

            .footer {
                color: #777;
                padding: 10px 15px;
                height: 20px;
                text-align: center;
                border-top: 1px solid #e6e6e6;
            }

            .footer:before {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                height: 50px;
                overflow: hidden;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                            0 8px 0 -3px #f6f6f6,
                            0 9px 1px -3px rgba(0, 0, 0, 0.2),
                            0 16px 0 -6px #f6f6f6,
                            0 17px 2px -6px rgba(0, 0, 0, 0.2);
            }

            .todo-count {
                float: left;
                text-align: left;
            }

            .todo-count strong {
                font-weight: 300;
            }

            .filters {
                margin: 0;
                padding: 0;
                list-style: none;
                position: absolute;
                right: 0;
                left: 0;
            }

            .filters li {
                display: inline;
            }

            .filters li a {
                color: inherit;
                margin: 3px;
                padding: 3px 7px;
                text-decoration: none;
                border: 1px solid transparent;
                border-radius: 3px;
            }

            .filters li a.selected,
            .filters li a:hover {
                border-color: rgba(175, 47, 47, 0.1);
            }

            .filters li a.selected {
                border-color: rgba(175, 47, 47, 0.2);
            }

            .clear-completed,
            html .clear-completed:active {
                float: right;
                position: relative;
                line-height: 20px;
                text-decoration: none;
                cursor: pointer;
            }

            .clear-completed:hover {
                text-decoration: underline;
            }

            .info {
                margin: 65px auto 0;
                color: #bfbfbf;
                font-size: 10px;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
                text-align: center;
            }

            .info p {
                line-height: 1;
            }

            .info a {
                color: inherit;
                text-decoration: none;
                font-weight: 400;
            }

            .info a:hover {
                text-decoration: underline;
            }

            /*
                Hack to remove background from Mobile Safari.
                Can't use it globally since it destroys checkboxes in Firefox
            */
            @media screen and (-webkit-min-device-pixel-ratio:0) {
                .toggle-all,
                .todo-list li .toggle {
                    background: none;
                }

                .todo-list li .toggle {
                    height: 40px;
                }

                .toggle-all {
                    -webkit-transform: rotate(90deg);
                    transform: rotate(90deg);
                    -webkit-appearance: none;
                    appearance: none;
                }
            }

            @media (max-width: 430px) {
                .footer {
                    height: 50px;
                }

                .filters {
                    bottom: 10px;
                }
            }
            ```

## 4. 总结 

到这里我们就使用 Angular 2 创建了一个 TODO MVC 项目。让我们一起回顾下，本文我们都学习到了什么：

- 使用 Angular CLI 创建并初始化一个 Angular 项目。
- 使用 Angular CLI 创建 Todo 对象，TodoService 并实现里面的逻辑代码。
- 使用 `ng test` 测试我们 TodoService 的逻辑代码
- 对 Angular 模版语法有了一定的了解，属性绑定，事件绑定，双向绑定等。
- 对 Angular 组件有一定的了解，组件装饰器里的元数据与模版和样式文件关联，组件与模版的通过绑定进行交互，组件通过元数据和构造函数注入服务。