import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-right-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {

}
