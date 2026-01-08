import { Component, input, HostListener } from '@angular/core';

import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-custom-tag',
  imports: [ChipModule, AvatarModule],
  templateUrl: './custom-tag.html',
})
export class CustomTag {
  label = input.required<string>();
  icon = input.required<string>();

  protected isMobile: boolean = false;
  private readonly mobileBreakpoint = 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
  }
}
