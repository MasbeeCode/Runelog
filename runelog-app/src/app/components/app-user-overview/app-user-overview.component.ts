import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-app-user-overview',
  imports: [MatCardModule],
  templateUrl: './app-user-overview.component.html',
  styleUrl: './app-user-overview.component.css'
})
export class AppUserOverviewComponent {
  user = {
    name: "Masbee29",
  }
}
