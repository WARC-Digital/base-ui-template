import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
