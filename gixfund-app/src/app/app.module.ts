import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { GixfooterComponent } from './gixfooter/gixfooter.component';

@NgModule({
  // 属于本 NgModule 的组件、指令、管道
  declarations: [
    AppComponent,
    GixfooterComponent
  ],
  // 本模块中的组件模板所需的类的其它模块 (Modules)
  // 这样把 javascript 的模块与 angular 的模块关联起来
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  // 本模块向全局服务中贡献的那些服务的创建器。
  // 这些服务能被本应用中的任何部分使用。
  providers: [],
  // 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。
  // 只有根模块 ( Module ) 才应该设置这个 bootstrap 属性。
  bootstrap: [AppComponent]
})
export class AppModule { }
