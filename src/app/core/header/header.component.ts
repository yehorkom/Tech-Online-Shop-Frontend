import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
  }

  public isMobileMenuOpen: boolean = false;

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  public scrollToFooter(): void {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  }

  public scrollToServices(): void {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }

  public scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
