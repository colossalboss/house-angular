import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availables: Object;

  constructor(private houses: HousesService) { }

  ngOnInit() {
    this.houses.getHouses().subscribe(homes => {
      this.availables = homes;
      console.log(this.availables);
    });
  }

}
