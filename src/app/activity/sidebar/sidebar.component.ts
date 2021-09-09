import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideSidebar', [
      state(
        'false',
        style({
          transform: 'translateX(350px)',
        })
      ),
      state(
        'true',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('true <=> false', animate('400ms ease-in-out')),
    ]),
    trigger('slideMenu', [
      state(
        'false',
        style({
          transform: 'translateX(350px)',
          display: 'none',
        })
      ),
      state(
        'true',
        style({
          transform: 'translateX(0)',
          display: 'block',
        })
      ),
      transition('true <=> false', animate('400ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  isOpen: boolean = false;
  ngOnInit(): void {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
