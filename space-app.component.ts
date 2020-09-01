import { Component, OnInit } from '@angular/core';
import { SpaceserService } from '../spaceser.service';


@Component({
  selector: 'app-space-app',
  templateUrl: './space-app.component.html',
  styleUrls: ['./space-app.component.css']
})
export class SpaceAppComponent implements OnInit {

public spaceapi:any

  constructor(private spaceser:SpaceserService) { }


  public dispSpacedata(){
this.spaceser.getSpace().subscribe((data)=>{
  this.spaceapi=data
  console.log(this.spaceapi)
})

  }

  ngOnInit() {
    this.dispSpacedata()
  }

}
