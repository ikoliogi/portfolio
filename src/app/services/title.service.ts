import { Injectable } from '@angular/core';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private location: Location
  ) { }

  public getTitle() {

    const path = this.location.path();
    console.log(path);

  }

}