import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chatgpt-clone-app';

  meta = inject(Meta);

  constructor() {
    this.meta.addTag({ name: 'description', content: 'ChatGPT Clone App' });
    this.meta.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.addTag({
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon.ico',
    });
    this.meta.addTag({
      rel: 'canonical',
      href: 'https://chatgpt-clone-app-manthanank.vercel.app/',
    });
    this.meta.addTag({ property: 'og:title', content: 'Chatgpt Clone App' });
    this.meta.addTag({ name: 'author', content: 'Manthan Ankolekar' });
    this.meta.addTag({
      name: 'keywords',
      content: 'angular, nodejs. express, mongodb',
    });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.addTag({
      property: 'og:description',
      content:
        'A simple chatgpt clone app where you can chat with the bot and get the response.',
    });
    this.meta.addTag({
      property: 'og:image',
      content: 'https://chatgpt-clone-app-manthanank.vercel.app/image.jpg',
    });
    this.meta.addTag({
      property: 'og:url',
      content: 'https://chatgpt-clone-app-manthanank.vercel.app/',
    });
  }
}
