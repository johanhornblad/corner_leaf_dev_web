import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-skill",
  template: `
    <div *ngIf="!isOpen; else elseBlock">
      <span class="tag is-success is-large">
        <p>{{ skill?.name }}</p>
        <div></div>
        <span class="icon" (click)="isOpen = !isOpen">
          <i class="fas fa-plus-circle"></i>
        </span>
      </span>
    </div>
    <ng-template #elseBlock>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section></ng-template
    >
  `,
  styles: [],
})
export class SkillComponent implements OnInit {
  @Input() skill:
    | {
        id: number;
        name: string;
        rank: number;
        description: string;
      }
    | undefined;

  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isOpen = !this.isOpen;
    alert("it is clicked");
  }
}
