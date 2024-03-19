import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   isCollapsed = true;  // This is a property that will be used to collapse the menu when the screen is small   
  constructor() { }

  ngOnInit() {
  }

}
