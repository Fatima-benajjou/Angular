import { Component } from '@angular/core';
import {OrdertablePipe} from "../../utils/ordertable.pipe";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ThumbPipe} from "../../utils/thumb.pipe";
import { FormsModule, NgModel } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  isRead: boolean;
}

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [
    FormsModule,
    OrdertablePipe,
    TitleCasePipe,
    UpperCasePipe,
    ThumbPipe
  ],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {
  books: Book[] = [
    {title: "l'alchimiste", author: "paolo cohelo", isRead: false},
    {title: "mimi cracra", author: "poket", isRead: false},
    {title: "la 5eme montagne", author: "paolo cohelo", isRead: false},
    {title: "Dragon ball Z", author: "Toriyama", isRead: false},
  ]
  newBook: Pick <Book,'title' | 'author'>= {
    title:'',
    author:'',
   
  }

  isSubmitted = false;

  get titleHasError() {
    return this.isSubmitted && this.newBook.title.length == 0
  }

  get authotHasError () {
    return this.isSubmitted && this.newBook.author.length == 0
  }



  toggleRead(index: number) {
    this.books[index].isRead = !this.books[index].isRead;
  }

  submitNewBook () {
    this.isSubmitted = true;
    if(!this.authotHasError || !this.titleHasError) {
      const book:Book= {isRead: false, ...this.newBook}

      this.books.push(book);
      this.isSubmitted=false
      this.newBook= {
        title:'',
        author:''
      }
    }
  
  }
}
