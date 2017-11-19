import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/types/player.model';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {  

  public teamMembers: Array<Player> = [];

  constructor() { }

  ngOnInit() {
  }

  onPlayerAdded(player: Player){
    this.teamMembers.push(player);
  }

}
