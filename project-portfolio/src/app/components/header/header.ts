import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Resume } from "../resume/resume";

@Component({
  selector: 'app-header',
  imports: [ButtonModule, Resume, DrawerModule],
  templateUrl: './header.html',
})
export class Header {
  protected resumeVisible = signal(false);
}
