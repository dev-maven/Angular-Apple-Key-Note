import { ChangeDetectionStrategy, Component } from '@angular/core';
import { capitalize } from 'lodash-es';

@Component({
  selector: 'sandbox-renderer-route',
  templateUrl: './renderer-root.component.html',
  styleUrls: ['./renderer-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxRendererRootComponent {
  capitalize = capitalize;

  showcases = [
    { id: 'general-basic', name: 'General: Basic' },
    { id: 'general-section', name: 'General: Section' },
    { id: 'general-grid', name: 'General: Grid' },
    { id: 'general-button', name: 'General: Button' },
    { id: 'image', name: 'General: Image'},
    { id: 'video', name: 'General: Video'},
    { id: 'general-line', name: 'General: Line' },
    { id: 'company-logo', name: 'Company: Logo' },
    { id: 'company-navbar', name: 'Company: Navbar' },

    { id: 'shop-products', name: 'Shop: Products' },
    { id: 'shop-category', name: 'Shop: Category' },
    { id: 'shop-cart', name: 'Shop: Cart' },
  ];

  performance = ['chess', 'jumper', 'chaotic'];

  constructor() {}
}
