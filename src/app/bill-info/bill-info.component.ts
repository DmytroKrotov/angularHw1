import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-info',
  standalone: true,
  imports: [],
  templateUrl: './bill-info.component.html',
  styleUrl: './bill-info.component.css'
})
export class BillInfoComponent {
  public imgSrc: string="../assets/Bill.jpg";
  public internetLink: string[]=["https://en.wikipedia.org/wiki/Bill_Gates","https://www.gatesfoundation.org/","https://www.gatesnotes.com/"];
  public aboutBill: string="William Henry Gates III (born October 28, 1955) is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft, along with his childhood friend Paul Allen.";
  public quotes: string[] = ["Patience is a key element of success","If you think your teacher is tough, wait till you get boss","Life is not fair — get used to it!","Success is a lousy teacher. Це seduces smart people in thinking they can't lose"];
}
