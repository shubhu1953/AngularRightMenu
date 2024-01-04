import { CommonModule } from '@angular/common';
import { ApplicationModule, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ApplicationModule, CommonModule, RouterOutlet],
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  isReadOnly: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isReadOnly = !!data['readOnly'];
    });
  }
}
