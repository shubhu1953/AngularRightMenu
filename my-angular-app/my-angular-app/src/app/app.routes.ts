import { Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { EditionComponent } from './edition/edition.component';
import { EditionRightComponent } from './edition-right/edition-right.component';
import { WorkRightComponent } from './work-right/work-right.component';

export const routes: Routes = [
  {
    path: 'work',
    children: [
      {
        path: '',
        component: WorkComponent
      },
      {
        path: '',
        outlet: 'rightMenu',
        component: WorkRightComponent,
        data: { readOnly: false }
      }
    ]
  },
  {
    path: 'work/details',
    children: [
      {
        path: '',
        component: WorkComponent
      },
      {
        path: '',
        outlet: 'rightMenu',
        component: WorkRightComponent,
        data: { readOnly: true }
      }
    ]
  },
  {
    path: 'edition',
    children: [
      {
        path: '',
        component: EditionComponent
      },
      {
        path: '',
        outlet: 'rightMenu',
        component: EditionRightComponent,
        data: { readOnly: false }
      }
    ]
  },
  {
    path: 'edition/details',
    children: [
      {
        path: '',
        component: EditionComponent
      },
      {
        path: '',
        outlet: 'rightMenu',
        component: EditionRightComponent,
        data: { readOnly: true }
      }
    ]
  }
];
