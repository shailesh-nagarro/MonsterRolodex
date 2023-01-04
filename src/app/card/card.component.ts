import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../network/model/user.model';
import { DataService } from '../network/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private dataService:DataService){

  }

  @Input() userList:Users[] = [] as Users[]

  @Input() searchKey = ''

  @Output() itemClickEvent = new EventEmitter();

  @Output() searchCountEvent = new EventEmitter();

  itemclick(item:Users){
    console.log("item clicked", item);
    this.itemClickEvent.emit(item)
    this.searchKey
  }

  getImage(id: any) {
    return this.dataService.getUserImage(id);
  }
}
