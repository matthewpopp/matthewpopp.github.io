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
      this.downloadResume();
    } else {
      this.resumeVisible.set(true);
    }
  }


  private downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'PoppResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
