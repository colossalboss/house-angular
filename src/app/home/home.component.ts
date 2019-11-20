import { Component, OnInit, Input } from '@angular/core';
import { HousesService } from '../houses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() event: any;

  availables: any;

  constructor(private houses: HousesService, public router: Router) { }

  ngOnInit() {
    this.houses.getHouses().subscribe(homes => {
      this.availables = homes;
    });
  }

  onSelect(house) {
    this.router.navigate(['/houses', house.id]);
  }

}
