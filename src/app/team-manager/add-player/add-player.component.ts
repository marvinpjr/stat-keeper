import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Player} from '../../shared/types/player.model'

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerToAdd: Player = new Player();

  @Output() playerAdded = new EventEmitter<Player>();

  constructor() { }
  ngOnInit() { }

  addNewPlayer_OnSubmit(){
    let playerAdding: Player = new Player();
    playerAdding.FirstName = this.playerToAdd.FirstName;
    playerAdding.LastName = this.playerToAdd.LastName;
    playerAdding.Number = this.playerToAdd.Number;
    playerAdding.Position = this.playerToAdd.Position;

    this.playerAdded.emit(playerAdding);
  }
}
