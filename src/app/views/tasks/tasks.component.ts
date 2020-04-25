import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  sideBarOpened: boolean = false;
  showCategories: boolean = false;
  showItems: boolean = false;
  listTitle: string = "today"

  constructor() { }


  changeList(selectedList: string){
    this.listTitle = selectedList;
    this.sideBarOpened = false;
      this.showCategories = false;
      setTimeout(()=>{
        this.showItems = false;
      }, 1750);
  }

  openSideBar(){
    if(this.sideBarOpened == false){
      this.sideBarOpened = true;
      this.showItems = true;
      setTimeout(() => {
        this.showCategories = true
      }, 1000);
    }else if (this.sideBarOpened == true){
      this.sideBarOpened = false;
      this.showCategories = false;
      setTimeout(()=>{
        this.showItems = false;
      }, 1750)
    }
  }

  ngOnInit() {
  }

}
