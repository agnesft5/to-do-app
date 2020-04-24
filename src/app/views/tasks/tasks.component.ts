import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  sideBarOpened: boolean = false;

  constructor() { }

  openSideBar(){
    if(this.sideBarOpened == false){
      this.sideBarOpened = true
    }else if (this.sideBarOpened == true){
      this.sideBarOpened = false
    }
  }

  ngOnInit() {
  }

}
