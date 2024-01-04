import { CommonModule } from '@angular/common';
import { ApplicationModule, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-work-right',
  standalone: true,
  imports: [ApplicationModule, CommonModule, RouterOutlet],
  templateUrl: './work-right.component.html'
})
export class WorkRightComponent implements OnInit {
  isReadOnly: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.isReadOnly =  this.route.snapshot.data['readOnly'];
  }
}
