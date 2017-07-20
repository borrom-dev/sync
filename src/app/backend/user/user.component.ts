import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    jQuery('.menu .item').tab();
  }

  constructor() { }

  ngOnInit() {
  }

}
