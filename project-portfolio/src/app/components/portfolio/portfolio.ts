import { Component, signal } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

import { Books } from '..';
import { ProjectCard } from '..';
import { icons } from '../../enums';

@Component({
  selector: 'app-portfolio',
  imports: [CardModule, ChipModule, DrawerModule, ButtonModule, Books, ProjectCard],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  protected booksVisible = signal(false);

  protected readonly icons = icons;
  protected readonly projectImages;

  constructor() {
    const imageBase = '/assets/project-media/';

    this.projectImages = {
      energyDashboard: [
        imageBase + 'energy-dashboard/full-dashboard.webp',
        imageBase + 'energy-dashboard/state-comparison.webp',
        imageBase + 'energy-dashboard/zip-lookup.webp',
      ],

      storefront: [
        imageBase + 'storefront/catalog.webp',
        imageBase + 'storefront/cart.webp',
        imageBase + 'storefront/orders.webp',
        imageBase + 'storefront/reference-arch.webp',
      ],

      awsPipeline: [
        imageBase + 'aws-pipeline/arch-diagram.webp',
        imageBase + 'aws-pipeline/data-lake.webp',
        imageBase + 'aws-pipeline/glue.webp',
        imageBase + 'aws-pipeline/sagemaker.webp',
        imageBase + 'aws-pipeline/eda.webp',
      ],

      msbaImmersions: [
        imageBase + 'msba-immersions/molson1.webp',
        imageBase + 'msba-immersions/molson2.webp',
        imageBase + 'msba-immersions/second-harvest1.webp',
        imageBase + 'msba-immersions/second-harvest2.webp',
      ],

      warehouseMap: [
        imageBase + 'warehouse-map/full-warehouse.webp',
        imageBase + 'warehouse-map/bin-search.gif',
        imageBase + 'warehouse-map/selected-bin1.webp',
        imageBase + 'warehouse-map/selected-bin2.webp',
      ],

      msbaChallenge: [
        imageBase + 'msba-challenge/eda.webp',
        imageBase + 'msba-challenge/justifications.webp',
        imageBase + 'msba-challenge/recommendations.webp',
      ],

      woodworking: [
        imageBase + 'woodworking/drawers.webp',
        imageBase + 'woodworking/entertainment.webp',
        imageBase + 'woodworking/bowls.webp',
      ],
    };
  }
}
