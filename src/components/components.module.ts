import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LiveWebinarComponent } from './live-webinar/live-webinar.component';
import { TopSpeakersComponent } from './top-speakers/top-speakers.component';
import { UpcomingWebinarsComponent } from './upcoming-webinars/upcoming-webinars.component';
import { WebinarsBasedCardiologyComponent } from './webinars-based-cardiology/webinars-based-cardiology.component';
import { WebinarsMayLikeComponent } from './webinars-may-like/webinars-may-like.component';
import { CardsComponent } from './cards/cards.component';
import { ContinueWatchingComponent } from './continue-watching/continue-watching.component';
import { BrowseByTopicComponent } from './browse-by-topic/browse-by-topic.component';
import { WebinarsFiltersComponent } from './webinars-filters/webinars-filters.component';
import { WebinarsCardsComponent } from './webinars-cards/webinars-cards.component';
import { WebinarTabComponent } from './webinar-tab/webinar-tab.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    LiveWebinarComponent,
    TopSpeakersComponent,
    UpcomingWebinarsComponent,
    WebinarsBasedCardiologyComponent,
    WebinarsMayLikeComponent,
    CardsComponent,
    ContinueWatchingComponent,
    BrowseByTopicComponent,
    WebinarsFiltersComponent,
    WebinarsCardsComponent,
    WebinarTabComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    LiveWebinarComponent,
    WebinarTabComponent,
    TopSpeakersComponent,
    UpcomingWebinarsComponent,
    WebinarsBasedCardiologyComponent,
    WebinarsMayLikeComponent,
    CardsComponent,
    ContinueWatchingComponent,
    BrowseByTopicComponent,
    WebinarsFiltersComponent,
    WebinarsCardsComponent
  ],
  providers: []
})
export class ComponentModule { }
