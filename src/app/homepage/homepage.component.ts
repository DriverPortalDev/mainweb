import { Component, OnInit } from '@angular/core';
import { environments } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  scrolling: boolean = false;
  scrollingClasses: boolean = false;
  menuToggle: boolean = true; //keep hidden by default

  constructor() { }

  ngOnInit() {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
         this.checkScroll();
      });
    }
    /console.log(environments)
  }

  openMenu(){
    return this.menuToggle = !this.menuToggle;
  }

  checkScroll() {
    if (typeof window !== undefined) {
      if (window.pageYOffset > 20) {
        this.scrolling = true;
        this.scrollingClasses = true;
      } else if (window.pageYOffset < 20 && this.scrolling) {
        this.scrollingClasses = false;
      }
    }
  }

}
