import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ChatService } from '../services/chat.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  inputText: string = '';
  messages: { user: boolean; text: string }[] = [];

  chat = inject(ChatService);

  constructor() {}

  sendMessage() {
    if (this.inputText) {
      this.messages.push({ user: true, text: this.inputText });
      this.chat.post(this.inputText).subscribe((response: any) => {
        console.log(response.bot);
        this.messages.push({ user: false, text: response.bot });
      });
      this.inputText = '';
    }
  }

  getMessages() {
    return this.messages;
  }
}
