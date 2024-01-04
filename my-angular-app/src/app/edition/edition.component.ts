import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-edition',
  standalone: true,
  imports: [ApplicationModule, CommonModule, RouterOutlet],
  templateUrl: './edition.component.html'
})
export class EditionComponent {

}
