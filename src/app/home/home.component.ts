import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availables;

  constructor(private houses: HousesService, public router: Router) { }

  ngOnInit() {
    this.houses.getHouses().subscribe(homes => {
      this.availables = homes;
      console.log(this.availables);
    });
  }

  onSelect(house) {
    this.router.navigate(['/houses', house.id]);
  }

}
