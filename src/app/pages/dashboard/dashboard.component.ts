import { Component } from '@angular/core';
import { NaveComponent } from "../../shared/nave/nave.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NaveComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userLoginOn:boolean=false;

}
