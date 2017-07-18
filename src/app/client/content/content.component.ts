import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
      jQuery('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
      });
  }

  constructor() { }

  ngOnInit() {
  }

}
