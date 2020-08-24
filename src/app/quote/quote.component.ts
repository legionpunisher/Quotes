import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'Happiness depends upon ourselve','by Aristole',new Date(1456,3,14)),
  new Quote(2,'Everything you can imagine is real','by Pablo Picasso',new Date(1020,6,10)),
  new Quote(3,'Sipimplicity is the ultimate sophistication','by Leonardo Davinci',new Date(1552,2,18)),
  new Quote(4,'What we think we become','by Buddha',new Date(990,4,19))
];
toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit(): void {
  }

}
