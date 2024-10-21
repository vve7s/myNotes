import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  isDarkTheme = false;
  icon = '';

  constructor() {
    const storedTheme = localStorage.getItem('isDarkTheme');
    this.isDarkTheme = storedTheme === 'true';
    if (this.isDarkTheme) {
      this.icon = 'dark_mode';
    } else {
      this.icon = 'light_mode';
    }
    this.applyTheme();
  }


  toggleTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme;
    localStorage.setItem('isDarkTheme', String(isDarkTheme));
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  toggleIcon() {
    this.icon = this.icon === 'dark_mode' ? 'light_mode' : 'dark_mode';
    if (this.icon === 'dark_mode') {
      this.toggleTheme(true);
    } else {
      this.toggleTheme(false);
    }
  }

}
