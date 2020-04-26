import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  task: string;
  date: any;
  todayList: object[] = [];
  tomorrowList: object[] = [];
  weekList: object[] = [];
  shoppingList: object[] = [];
  workList: object[] = [];
  advice: string;
  selectedList: object[];
  constructor() { }
  deleteTask(index){
    //Today
    if (this.listTitle == "today") {
      this.todayList.splice(index,1);
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem("today", JSON.stringify(this.todayList));
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      }
    //Tomorrow
    }else if (this.listTitle == "tomorrow") {
      this.tomorrowList.splice(index,1);
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      }
    //Week
    }else if (this.listTitle == "this week") {
      this.weekList.splice(index,1);
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem("this week", JSON.stringify(this.weekList));
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      }
    //Shopping
    }else if (this.listTitle == "shopping list") {
      this.shoppingList.splice(index,1);
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      }
    //Work
    }else if (this.listTitle == "work meetings") {
      this.workList.splice(index,1);
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem("work meetings", JSON.stringify(this.workList));
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      }
    }
  }
  taskDone(index) {
    // Today
    if (this.listTitle == "today") {
      if (this.todayList[index]['done'] == false) {
        this.todayList[index]['done'] = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("today", JSON.stringify(this.todayList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }else{
        this.todayList[index]['done'] = false;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("today", JSON.stringify(this.todayList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }
    //Tomorrow
    }else if (this.listTitle == "tomorrow") {
      if (this.tomorrowList[index]['done'] == false) {
        this.tomorrowList[index]['done'] = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }else{
        this.tomorrowList[index]['done'] = false;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }
    //This week
    }else if (this.listTitle == "this week") {
      if (this.weekList[index]['done'] == false) {
        this.weekList[index]['done'] = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("this week", JSON.stringify(this.weekList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }else{
        this.weekList[index]['done'] = false;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("this week", JSON.stringify(this.weekList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }
    //Shopping list
    }else if (this.listTitle == "shopping list") {
      if (this.shoppingList[index]['done'] == false) {
        this.shoppingList[index]['done'] = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }else{
        this.shoppingList[index]['done'] = false;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }
    //Work meetings
    }else if (this.listTitle == "work meetings") {
      if (this.workList[index]['done'] == false) {
        this.workList[index]['done'] = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("work meetings", JSON.stringify(this.workList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }else{
        this.workList[index]['done'] = false;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("work meetings", JSON.stringify(this.workList));
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        }
      }
    }
  }
  addTask(): void {
    if (this.task != null || this.task != undefined) {
      this.advice = undefined;
      this.date = new Date();
      if (this.listTitle == "today") {
        this.todayList.push({ name: this.task, date: this.date.toDateString(), done: false })
        console.log(this.todayList, 'today')
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("today", JSON.stringify(this.todayList))
        }
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
        console.log(this.selectedList)
      } else if (this.listTitle == "tomorrow") {
        this.tomorrowList.push({ name: this.task, date: this.date.toDateString(), done: false })
        console.log(this.tomorrowList, 'tomorrow')
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList))
        }
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      } else if (this.listTitle == "this week") {
        this.weekList.push({ name: this.task, date: this.date.toDateString(), done: false })
        console.log(this.weekList, 'week')
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("this week", JSON.stringify(this.weekList))
        }
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      } else if (this.listTitle == "shopping list") {
        this.shoppingList.push({ name: this.task, date: this.date.toDateString(), done: false })
        console.log(this.shoppingList, 'shop')
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("shopping list", JSON.stringify(this.shoppingList))
        }
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      } else if (this.listTitle == "work meetings") {
        this.workList.push({ name: this.task, date: this.date.toDateString(), done: false })
        console.log(this.workList, 'work')
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("work meetings", JSON.stringify(this.workList))
        }
        this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
      } else {
        console.log(this.task, "lol")
      }
    } else {
      this.advice = "Type your task so we can add it!"
      setTimeout(() => {
        this.advice = undefined;
      }, 2500);
    }
  }
  changeList(selectedList: string): void {
    this.listTitle = selectedList;
    this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
    console.log(this.selectedList);
    this.sideBarOpened = false;
    this.showCategories = false;
    setTimeout(() => {
      this.showItems = false;
    }, 1750);
  }
  openSideBar(): void {
    if (this.sideBarOpened == false) {
      this.sideBarOpened = true;
      this.showItems = true;
      setTimeout(() => {
        this.showCategories = true
      }, 1000);
    } else if (this.sideBarOpened == true) {
      this.sideBarOpened = false;
      this.showCategories = false;
      setTimeout(() => {
        this.showItems = false;
      }, 1750)
    }
  }
  ngOnInit() {
    this.todayList = JSON.parse(localStorage.getItem('today'));
    if (this.todayList == undefined || this.todayList == null) {
      this.todayList = []
    }
    this.tomorrowList = JSON.parse(localStorage.getItem('tomorrow'));
    if (this.tomorrowList == undefined || this.todayList == null) {
      this.tomorrowList = []
    }
    this.weekList = JSON.parse(localStorage.getItem('this week'));
    if (this.weekList == undefined || this.todayList == null) {
      this.weekList = []
    }
    this.shoppingList = JSON.parse(localStorage.getItem('shopping list'));
    if (this.shoppingList == undefined || this.todayList == null) {
      this.shoppingList = []
    }
    this.workList = JSON.parse(localStorage.getItem('work meetings'));
    if (this.workList == undefined || this.todayList == null) {
      this.workList = []
    }
    this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
    console.log(this.selectedList)
  }
}