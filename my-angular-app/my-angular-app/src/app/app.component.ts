import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { EditionComponent } from './edition/edition.component';
import { WorkComponent } from './work/work.component';
import { EditionRightComponent } from './edition-right/edition-right.component';
import { WorkRightComponent } from './work-right/work-right.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditionComponent, EditionRightComponent, WorkComponent, WorkRightComponent, RouterModule ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private route: ActivatedRoute) {
  }
}