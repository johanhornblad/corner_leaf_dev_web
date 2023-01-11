import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { SkillListComponent } from "./components/skill-list/skill-list.component";
import { HomeComponent } from "./home.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ExperienceListComponent } from "./components/experience-list/experience-list.component";

@NgModule({
  declarations: [
    HomeComponent,
    SkillListComponent,
    SkillComponent,
    ExperienceComponent,
    ExperienceListComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
