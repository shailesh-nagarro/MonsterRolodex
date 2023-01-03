import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, of, from, debounceTime, distinctUntilChanged } from 'rxjs';
import { LoggerService } from '../logger.service';
import { DataService } from '../network/data.service';
import { Users } from '../network/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataService: DataService, private logger: LoggerService, private router: Router) {

  }

  searchForm = this.fb.group({
    searchKey: "",
  })

  userList: Users[] = []
  searchKey = ""
  networkError = false;
  topPosToStartShowing = 200;
  showGoToTop = false;
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.showGoToTop = true;
    } else {
      this.showGoToTop = false;
    }
  }



  ngOnInit(): void {
    this.getUser();
    this.searchForm.get('searchKey')?.valueChanges.pipe(debounceTime(400),
      distinctUntilChanged()).subscribe((value) => {
        this.searchKey = value!!;
      })
  }


  getUser() {
    this.networkError = false;
    this.dataService.getUserData("users").subscribe(
      (result: any) => {
        this.logger.log(result)
        this.userList = result as Users[]
      },

      (error: any) => {
        this.logger.log("Error occured");
        this.networkError = true;
      }


    );
  }

  getImage(id: any) {
    return this.dataService.getUserImage(id);
  }

  itemclick(item: Users) {
    this.dataService.putUser(item);
    this.router.navigate(['/detail/' + item.id]);
    console.log("item clicked ", item.id, item.name)
  }
}
