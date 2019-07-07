import { Component, OnInit } from '@angular/core';
import { Character, Attributes } from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();
  test: number;

  constructor() {
    this.character.attributes = new Attributes();
  }

  ngOnInit() {
  }

}
