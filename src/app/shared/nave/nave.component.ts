import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nave',
  imports: [CommonModule],
  templateUrl: './nave.component.html',
  styleUrl: './nave.component.css'
})
export class NaveComponent {
  userLoginOn:boolean=false;

}
