import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/network/data.service';
import { address, Users , location } from '../../network/model/user.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number = 0
  image = ""
  onError = false;
  user:Users = { address : { geo: {}} as address} as Users
  constructor(private activatedRout: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(
      (result: any) => {
        this.id = +result.get("id")
        console.log("detailed user id :",this.id);
      }
    );

    if (this.dataService.getUser()) {
      let user = this.dataService.getUser();
      if (user) {
        this.user = user;
        this.image = this.dataService.getUserImage(user.id)
        // this.address = JSON.stringify(user.address)
      }
    }else {
      this.getUserById();
      // this.dataService.getUserById(this.id);
      // this.dataService.getUserById(this.id).subscribe((result)=>{
      //   console.log("user by service ",result);
      //   this.user = result;
      // })
    }
  }

  getUserById(){
    this.dataService.getUserData("users").subscribe((result)=>{
      let userList:Users[] = result;
      this.user = userList.filter(user => user.id == this.id)[0];
      console.log("user found ",this.user);
      this.image = this.dataService.getUserImage(this.id);
      if(!this.user) this.onError = true;

    }
    )
  }

  cardView = true;

  toggleView(id:number){
    if(id == 1){
      this.cardView = true;
    }else{
      this.cardView = false;
    }
  }


}
