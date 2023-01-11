import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  template: `
    <div class="experience-component">
      <div class="experience">
        <h4>{{ experience?.title }}</h4>
        <h4><strong>Company : </strong>{{ experience?.company }}</h4>
        <h4><strong>From : </strong> {{ experience?.From }}</h4>
        <h4><strong>to : </strong>{{ experience?.to }}</h4>
        <button class="button" (click)="isExpanded = !isExpanded" is-info>
          More
        </button>
      </div>
      <div class="experience-more" *ngIf="isExpanded">
        <hr class="solid" />
        <p>{{ experience?.description }}</p>
      </div>
    </div>
  `,
  styleUrls: ["experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  @Input() experience:
    | {
        title: string;
        company: string;
        From: string;
        to: string;
        description: string;
      }
    | undefined;

  isExpanded: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
