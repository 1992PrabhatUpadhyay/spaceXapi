import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spacealldata',
  templateUrl: './spacealldata.component.html',
  styleUrls: ['./spacealldata.component.css']
})
export class SpacealldataComponent implements OnInit {


  @Input() spaceapi:any
  constructor() { }

  ngOnInit() {
  }

}
