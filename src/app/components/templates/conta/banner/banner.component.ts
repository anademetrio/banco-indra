import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = `bg-${this.color}`;
  }

}
