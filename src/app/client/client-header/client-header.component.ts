import { Component, OnInit, AfterViewInit  } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit, AfterViewInit  {
  ngAfterViewInit(): void {
     // fix main menu to page on passing
      jQuery('.main.menu').visibility({
        type: 'fixed'
      });
      jQuery('.overlay').visibility({
        type: 'fixed',
        offset: 80
      });
  }

  constructor() { }

  ngOnInit() {
  }

}
