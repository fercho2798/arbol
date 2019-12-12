import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usokendo',
  templateUrl: './usokendo.component.html',
  styleUrls: ['./usokendo.component.css']
})
export class UsokendoComponent implements OnInit {
  
  public status = '#10b507';
  public buttons = [
    { text: 'Away', icon: 'k-i-clock', color: '#f0c505' },
    { text: 'Available', icon: 'k-i-check-circle', color: '#10b507', selected: true },
    { text: 'Offline', icon: 'k-i-close-circle', color: '#707070' },
    { text: 'Do not disturb', icon: 'k-i-minus-circle', color: '#e30000' }
  ];
  private img = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/nancy.jpg';

  public selectedChange(e, btn) {
    this.status = btn.color;
  }
  constructor() { }

  ngOnInit() {
  }

}
