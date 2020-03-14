import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.thisYear = (new Date()).getFullYear()+"";
    if(this.iniYear == this.thisYear){
      this.str=this.iniYear;
    }else{
      this.str=this.iniYear+" - "+this.thisYear;
    }
  }

  str: string = "percose";

  iniYear: string = "2020";
  thisYear: string = "";

}
