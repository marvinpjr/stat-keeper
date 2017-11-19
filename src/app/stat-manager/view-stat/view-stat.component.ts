import { Component, OnInit, Input } from '@angular/core';
import { Stat } from '../../shared/types/stat.model'

@Component({
  selector: 'app-view-stat',
  templateUrl: './view-stat.component.html',
  styleUrls: ['./view-stat.component.css']
})
export class ViewStatComponent implements OnInit {
  @Input() stat: Stat;

  constructor() { }

  ngOnInit() {
  }

}
