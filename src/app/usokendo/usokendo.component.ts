import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usokendo',
  templateUrl: './usokendo.component.html',
  styleUrls: ['./usokendo.component.css']
})
export class UsokendoComponent implements OnInit {

  constructor() { }
eliminar() {
  var cl= document.getElementById("cl");
 document.getElementById("top").innerHTML = cl.value;

}
  ngOnInit() {
  }

}
