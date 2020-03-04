import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../services/title.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private ts: TitleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      console.log(event);
    });
    this.ts.getTitle();
  }

}
