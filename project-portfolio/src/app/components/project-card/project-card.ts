import { Component, input, contentChild, TemplateRef, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { ButtonModule } from "primeng/button";
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-project-card',
  imports: [CardModule, GalleriaModule, CommonModule, ButtonModule, AccordionModule],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  title = input.required<string>();
  imageUrls = input<string[]>([]);

  tagsTemplate = contentChild<TemplateRef<any>>('tags');
  bodyTemplate = contentChild<TemplateRef<any>>('body');

  images = computed(() => {
    if (!(this.imageUrls().length)) return [];
    const urls = this.imageUrls();

    return urls.map(url => ({
      itemImageSrc: url,
      thumbnailImageSrc: url
    }));
  });

  activePanel = signal<any>(null);

  responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
}
