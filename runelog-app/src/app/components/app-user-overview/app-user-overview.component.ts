import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

import { MatCardModule } from '@angular/material/card';
import { FeatService } from '../../services/feat.service';
import { Feat } from '../../interfaces/feat.interface';

@Component({
  selector: 'app-app-user-overview',
  imports: [MatCardModule, CommonModule],
  templateUrl: './app-user-overview.component.html',
  styleUrl: './app-user-overview.component.css'
})
export class AppUserOverviewComponent {
  userService: UserService = inject(UserService);
  featService: FeatService = inject(FeatService);

  user: User;
  readonly REAPER_TEMPLATE: Feat;

  constructor() {
    this.user = this.userService.getUser();
    this.REAPER_TEMPLATE = this.featService.getReaperData();

    console.log(this.REAPER_TEMPLATE);
  }
}
