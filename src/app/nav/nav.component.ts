import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HousesService} from '../houses.service';
import {ForRent} from '../for-rent';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'pm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  bySchool: ForRent[];
  stats: any;



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,
              private housesService: HousesService,
              private user: UserService,
              private router: Router) {}


  ngOnInit() {
    return this.user.isLoggedIn().subscribe(
      (res: Observable<any>) => {
        console.log(res);
        this.stats = res['status'];
        console.log(this.stats + ' status is the satus');
      }
    );
  }

  goToLogin() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        console.log(res.status);
        if (res.status) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

  renOutHouse() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        if (res.status) {
          this.router.navigate(['tenant']);
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

  destroy() {
    this.user.logout().subscribe(
      (res: any) => {
        console.log(res);
        this.user.isLoggedIn().subscribe(
          (resp: any) => {
            console.log(resp);
            this.stats = resp['stats'];
          }
        );
        this.router.navigate(['login']);
      }
    );
  }


  onClick(sch: string) {
    this.housesService.getHouses().subscribe(houses => {
      this.bySchool = houses.filter(house => house.school.toLowerCase() === sch);
      console.log(this.bySchool);
    },
    (err: any) => console.log(err)

    );
  }
}

