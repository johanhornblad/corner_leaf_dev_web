import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <h1 class="title">Contact Me!</h1>
      </div>
    </section>
    <section class="section">
      <div class="conatiner">
        <!-- contact form -->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <div class="field">
            <label class="label">Name</label>
            <input
              type="text"
              name="name"
              class="input"
              [(ngModel)]="name"
              #nameInput="ngModel"
            />
            <div
              class="help is-error"
              *ngIf="nameInput.invalid && nameInput.touched"
            >
              Your name is required.
            </div>
          </div>
          <!-- Email -->
          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
              #emailInput="ngModel"
              required
              email
            />
            <div
              class="help is-error"
              *ngIf="emailInput.invalid && emailInput.touched"
            >
              Your email is required.
            </div>
          </div>
          <div class="field">
            <label class="label">Your Message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>
          <!-- submit button-->
          <button
            class="button is-large is-warning"
            [disabled]="contactForm.invalid"
          >
            - bygga hemkomponenten, - skicka mail - bygga cv komponent - fixa
            backend. Send!
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name: string = "";
  email: string = "";
  message: string = "";

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const message: string = `My name is ${this.name}. My email is ${this.email}. My Message is ${this.message}`;
    alert(message);
  }
}
