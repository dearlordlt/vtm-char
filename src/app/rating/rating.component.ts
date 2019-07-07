import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  setRating(val: number) {
    this.rating = val;
  }

  constructor() { }

  onDataChange() {
    this.ratingChange.emit(this.rating);
    console.log(this.rating);
  }

  updateRating(val: number) {
    this.rating = val;
    this.ratingChange.emit(this.rating);
    console.log(this.rating);
  }

  ngOnInit() { }

}
