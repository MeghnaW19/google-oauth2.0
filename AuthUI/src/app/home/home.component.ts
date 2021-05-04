import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { SecurityService } from '../services/security.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name:any;

  constructor(private http: HttpClient, private securityService: SecurityService,
              private router: Router, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getUserInfo().subscribe(data => this.name = data.name);
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.router.navigate(['/login']);
    });
  }
}
