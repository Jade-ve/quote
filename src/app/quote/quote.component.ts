
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Andrew', 'There is always some madness in love. But there is also always some reason in madness.', 'Friedrich Nietzsche', new Date(2021,7,17), 0, 0),
    new Quote(2, 'Jane', 'The circumstances surrounding your birth is not as important as the opportunity to live life.', 'Lailah Gifty Akita', new Date(2021,7,18), 0, 0),

  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return b.likes - a.likes;
    })
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;

    this.quotes.push(quote); 
  }
  Details(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  };

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
