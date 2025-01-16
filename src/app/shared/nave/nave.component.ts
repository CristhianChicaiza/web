import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nave',
  imports: [CommonModule,RouterModule],
  templateUrl: './nave.component.html',
  styleUrl: './nave.component.css'
})
export class NaveComponent {
  userLoginOn:boolean=false;

}
