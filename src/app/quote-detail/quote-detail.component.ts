import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()quotes: Quote;  

@Output() isComplete = new EventEmitter<boolean>();

  quotesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
