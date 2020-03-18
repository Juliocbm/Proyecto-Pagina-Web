import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.css'],
  animations: [
    // animation triggers go here
    trigger('slideRL', [
      // ...
      state('hide', style({ opacity : 0 })),
      state('show', style({ opacity : 1 })),
      transition('hide => show', [
        animate('0.5s')
      ]),
      transition('show => hide', [
        animate('0.5s')
      ]),
    ]),
    
  ]
})
export class GarantiasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.typingCallback(this);
  }

  isHide = true;

  private typewriter_text: string = "G a r a n t í a s";
  private typewriter_display: string = "";

  toggle() {
    this.isHide = !this.isHide;
    setTimeout(() => {
      this.toggle();
    }, 500);
  }

  trye(){
    console.log("Focus");
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = "";
    }
    setTimeout(that.typingCallback, 100, that);
  }

}
