import { Component, OnInit } from '@angular/core';
import shutdown from 'electron-shutdown-command';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShuttingDown: boolean;

  hours = '0';
  minutes = '0';
  seconds = '0';

  constructor() { }

  ngOnInit() {
  }

  shutDown() {
    // first cancel shutdown if one is already pending
    this.abortShutDown();

    const _hours = parseInt(this.hours, 10) * 60 * 60;
    const _minutes = parseInt(this.minutes, 10) * 60;
    const _seconds = parseInt(this.seconds, 10);
    const _shutdownTime = _hours + _minutes + _seconds;

    shutdown.shutdown({
      force: true,
      timerseconds: _shutdownTime,
      sudo: true,
      debug: false,
    });

    this.isShuttingDown = true;
  }

  abortShutDown() {
    shutdown.abort();
    this.isShuttingDown = false;
  }

}
