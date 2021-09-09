import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  constructor() {}

  isOpen!: boolean;
  ngOnInit(): void {
  }
}
