import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-republic-card',
  templateUrl: './republic-card.component.html',
  styleUrls: ['./republic-card.component.scss'],
})
export class RepublicCardComponent implements OnInit {

  @Input() title: string;
  @Input() price: number;
  @Input() rooms: number;
  @Input() bathrooms: number;
  



  constructor() { }

  ngOnInit() {}

}
