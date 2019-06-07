import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = "no server was created";
	serverName = 'testserver';
	serverCreated = false;
	servers = ['Testserver', 'Testserver 2']
	secretDivShow = true;
	counter = 0;

  constructor() { 
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

  ngOnInit() {
	}
	
	onCreateServer() {
		this.serverCreationStatus = "server was created: Name is " + this.serverName;
		this.serverCreated = true;
		this.servers.push(this.serverName);
	}

	onUpdateServerName(event: any) {
		this.serverName = event.target.value;
	}

	onDisplayDetails() {
		this.secretDivShow = !this.secretDivShow;
		this.counter++;
	}

}
