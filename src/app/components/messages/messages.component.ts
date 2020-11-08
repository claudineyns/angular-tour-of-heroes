import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    //The messageService property must be public because it is going to bind to itself in the template.
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
