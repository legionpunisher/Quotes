import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'Happiness depends upon ourselve','by Aristole'),
  new Quote(2,'Everything you can imagine is real','by Pablo Picasso'),
  new Quote(3,'Sipimplicity is the ultimate sophistication','by Leonardo Davinci'),
  new Quote(4,'What we think we become','by Buddha'),
];
  constructor() { }

  ngOnInit(): void {
  }

}
