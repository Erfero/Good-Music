import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app-music';
  receivedText: string | undefined;

  parentReceive($event: string) {
    this.receivedText = $event
    console.log("parent: " + $event);
    
  }
  
}
