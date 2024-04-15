import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BillInfoComponent} from "./bill-info/bill-info.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BillInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw1';
}
