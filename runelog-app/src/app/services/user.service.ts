import { Injectable } from '@angular/core';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    name: 'Masbee29',
    feats: [{ name: 'Reaper', logs: [{ name: 'The Ambassador', items: [] }] }, { name: 'Slayer', logs: [] }, { name: 'Cluer', logs: [] }]
  };

  constructor() { }

  getUser() {
    return this.user;
  }
}
