import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'Wow Wizard!';
  public description: string = "This is a cool exam by DataRails , which maybe I will pass it and work with them 🙏."
  public isPopOpen: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  };

  public handleWizModal(): void {
    this.isPopOpen = !this.isPopOpen;
  }


}
