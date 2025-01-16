import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NaveComponent } from "./shared/nave/nave.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, DashboardComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
