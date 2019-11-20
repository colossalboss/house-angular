import { Component, OnInit } from '@angular/core';
import {HousesService} from '../houses.service';
import {ForRent} from '../for-rent';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  bySchool: ForRent[];

  constructor(private housesService: HousesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const sch = this.route.snapshot.paramMap.get('school');
    console.log(sch);

    this.housesService.getHouses().subscribe(houses => {
      this.bySchool = houses.filter(house => house.school.toLowerCase() === sch);
      // this.bySchool = targets;
      console.log(this.bySchool);
    },
    (err: any) => console.log(err)

    );
  }

}
