import { Component, OnInit, Input } from '@angular/core';
import { Player} from '../../shared/types/player.model'

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {

  @Input() player: Player;

  constructor() { }
  ngOnInit() { }

}
