import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gixfund';
  message = '相对于人类行为和状态的诸多不确定性，指数基金表现的“稳定性”似乎更有规律可循.';

  share(){
    console.log('share test');
  }
}

/*

Angular 模板语法的五个常用特性：

*ngFor
*ngIf
插值 {{}}
属性绑定 []
事件绑定 ()

模板 = 领域组件集 + 领域服务集

当 Angular 创建组件类的新实例时，它会通过查看该组件类的构造函数，来决定该组件依赖哪些服务或其它依赖项。
当 Angular 发现某个组件依赖某个服务时，它会首先检查是否该注入器中已经有了那个服务的任何现有实例。
如果所请求的服务尚不存在，注入器就会使用以前注册的服务提供者来制作一个，并把它加入注入器中，然后把该服务返回给 Angular。

当所有请求的服务已解析并返回时，Angular 可以用这些服务实例为参数，调用该组件的构造函数。


*/
