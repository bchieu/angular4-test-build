import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('testAnimation',
    [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.3)',
      })),
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
    ]),
  ]
})
export class AppComponent { 
  
  constructor(private dataService:DataService) {

  }

  title = 'app';
  angularLogo = 'https://avatars3.githubusercontent.com/u/6179204?s=88&v=4';
  buttonStatus = false;

  state: string = 'small';
  
  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
  

  myEvent(event) {
    console.log(event);
  }
  
  animateMe() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
