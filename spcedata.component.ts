import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spcedata',
  templateUrl: './spcedata.component.html',
  styleUrls: ['./spcedata.component.css']
})
export class SpcedataComponent implements OnInit {


  @Input() spaceapi:any
  constructor() { }

  ngOnInit() {
  }

}
