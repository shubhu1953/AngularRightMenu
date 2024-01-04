import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-edition-right',
  standalone: true,
  imports: [ApplicationModule, CommonModule, RouterOutlet],
  templateUrl: './edition-right.component.html'
})
export class EditionRightComponent {
  isReadOnly: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.isReadOnly =  this.route.snapshot.data['readOnly'];
  }
}
