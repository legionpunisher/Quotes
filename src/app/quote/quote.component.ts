import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {id:1,name:'Happiness depends upon ourselves',description:'by Aristole'},
  {id:2,name:'Everything you can imagine is real',description:'by Pablo Picasso'},
  {id:3,name:'Sipimplicity is the ultimate sophistication',description:'by Leonardo Davinci'},
  {id:4,name:'What we think we become',description:'by Buddha'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
