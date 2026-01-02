import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-landing-home-modules',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './modules.html',
})
export class ComponentLandingHomeModules {

  categories = [
    {
      name: 'Base Components',
      components: [
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        },
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        },
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        },
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        },
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        },
        {
          name: 'Accordion',
          nroElements: 8,
          url: '/docs/accordion',
          img: '/img/img-components/accordion-component.png',
        }
      ]
    }
  ]

}
