import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Resume } from '../resume/resume';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, Resume, DrawerModule],
  templateUrl: './header.html',
})
export class Header {
  protected readonly resumeVisible = signal(false);
  protected readonly resumeUrl = 'assets/PoppResume.pdf';

  handleResumeToggle() {
    const isMobile = window.innerWidth < 760;
    
    if (isMobile) {
      window.open(this.resumeUrl, '_blank');
    } else {
      this.resumeVisible.set(true);
    }
  }
}
