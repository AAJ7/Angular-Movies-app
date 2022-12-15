import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.css']
})
export class MovieitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item:any;
}
