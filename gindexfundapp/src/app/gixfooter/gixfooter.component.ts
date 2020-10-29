import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gixfooter',
  templateUrl: './gixfooter.component.html',
  styleUrls: ['./gixfooter.component.scss']
})
export class GixfooterComponent implements OnInit {
  ngOnInit(): void {
    console.log("Method not implemented.");
  }

  footerText:string = 'Made by 极客诚品 ( Geextudio ), since 2020';

  constructor() { }

}
