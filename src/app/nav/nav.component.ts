import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HousesService} from '../houses.service';
import {ForRent} from '../for-rent';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'pm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  bySchool: ForRent[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private housesService: HousesService) {}

    onClick(sch: string) {
      this.housesService.getHouses().subscribe(houses => {
        this.bySchool = houses.filter(house => house.school.toLowerCase() === sch);
        console.log(this.bySchool);
      },
      (err: any) => console.log(err)

      );
    }

}
