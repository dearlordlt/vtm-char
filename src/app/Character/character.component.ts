import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor() {
  }

  ngOnInit() {
  }

}
