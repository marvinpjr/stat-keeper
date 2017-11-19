import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Stat } from '../../shared/types/stat.model';

@Component({
  selector: 'app-add-stat',
  templateUrl: './add-stat.component.html',
  styleUrls: ['./add-stat.component.css']
})
export class AddStatComponent implements OnInit {

  public statToAdd: Stat = new Stat();

  @Output() statAdded = new EventEmitter<Stat>();

  constructor() { }
  ngOnInit() { }

  addNewStat_OnSubmit()
  {
    let addedStat = new Stat();
    addedStat.Description = this.statToAdd.Description;

    this.statAdded.emit(addedStat);
  }
}
