import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousesService} from '../houses.service';

@Component({
  selector: 'pm-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  houseId;

  item;

  constructor(private route: ActivatedRoute, private houseService: HousesService) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const idi = parseInt(this.route.snapshot.paramMap.get('id'));
    this.houseId = idi;
    this.houseService.getHouses().subscribe(items => {
      const target = items.find(one => one.id === this.houseId);
      this.item = target;
    });
  }

}
