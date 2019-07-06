import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character = {
    name: '',
    ambition: '',
    clan: '',
    concept: '',
    desire: '',
    generation: '',
    chronicle: '',
    predator: '',
    sire: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}
