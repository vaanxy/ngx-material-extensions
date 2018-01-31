import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  placeholder = '简单数据示例';
  // 原始数据列表, 通常这个列表是从后台获取的
  oriList = [
      {
        id: 1,
        name: '张晓华'
      },
      {
        id: 2,
        name: '张晓二'
      },
      {
        id: 3,
        name: '张晓三'
      }
    ];

  // 这里将列表转换成了一个Observable以模拟从后台获取到的数据
  candidateList$ = of(this.oriList);

  // chips标签里的各个项目
  items = [];

  // 是否允许添加多了个chip标签
  multiple = false;

  // 搜索框输入值发生变化时触发的事件，通常用于用户自定义过滤候选列表
  onValueChanged(value: string) {
    this.candidateList$ = of(this.oriList.filter(item => item.name.indexOf(value) >= 0));
  }

  // 添加chip标签触发的事件
  onItemAdded(item) {
    console.log(item);
    console.log(this.items);
  }

  // 删除chip标签触发的事件
  onItemRemoved(item) {
    console.log(item);
    console.log(this.items);
  }

  // 显示值与对象的关系映射函数
  displayWith(item): string {
    return item.name;
  }

  constructor() { }
  ngOnInit() { }
}
