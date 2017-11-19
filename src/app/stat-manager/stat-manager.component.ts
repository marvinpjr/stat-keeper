import { Component, OnInit } from '@angular/core';
import { Stat } from '../shared/types/stat.model'

@Component({
  selector: 'app-stat-manager',
  templateUrl: './stat-manager.component.html',
  styleUrls: ['./stat-manager.component.css']
})
export class StatManagerComponent implements OnInit {
  
  public stats: Array<Stat> = [];
  public id_counter: number = 1;

  constructor() { 
    this.stats.push({ Id: this.id_counter, Description: "Test Stat"});
  }

  ngOnInit() {
  }

  onStatAdded(stat: Stat){
    this.id_counter++;
    stat.Id = this.id_counter;
    this.stats.push(stat);
  }
}
