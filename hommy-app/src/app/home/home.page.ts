import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public allRepublics = [];

  republics = [{},{},{},{},{}];

  constructor(public searchService: SearchService) { }

  ngOnInit() {
   for (let i=0; i<5; i++){
     this.republics[i].name= 'Republic ' + i;
     this.republics[i].price= Math.floor(Math.random()*1500);
     this.republics[i].numOfAvailableRooms= Math.floor(Math.random()*5);
     this.republics[i].numOfBathrooms= Math.floor(Math.random()*5)}
  
    this.listAllRepublics();
  }

  listAllRepublics() {
    this.searchService.getListRepublic().subscribe((res) => {
      this.allRepublics = res[0];
      console.log(this.allRepublics);
    });
  }

  }