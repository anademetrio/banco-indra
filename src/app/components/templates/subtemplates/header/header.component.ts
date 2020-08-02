import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show_search: string;
  show_menu: string;
  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.icon = 'search';
  }
  showSearch(): void {
    this.show_search = this.show_search === 'show' ? '' : 'show';
    this.icon = this.icon === 'close' ? 'search' : 'close';
  }

  showMenu(): void {
    this.show_menu = this.show_menu === 'show' ? '' : 'show';
  }
}
