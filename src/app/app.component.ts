import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    if (document.getElementById("script1")) {
      document.getElementById("script1").remove();
    }
    var script1 = document.createElement("script");
    script1.setAttribute("id", "script1");
    script1.setAttribute("src", "../assets/js/creative.js");
    document.body.appendChild(script1);
  }
}
