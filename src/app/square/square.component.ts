import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square', //name used when declared in HTML
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() value = 'String';
  constructor() { }

  ngOnInit(): void {
  }

}
