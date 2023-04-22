import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  imports: [IonicModule],
  standalone: true,
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  constructor() {}
  @Input() menu: any = '';
  // @Input('price') price: any = '';

  ngOnInit() {}
}
