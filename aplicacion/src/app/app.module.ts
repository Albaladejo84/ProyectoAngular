import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './core/shell/shell.component';
import { HeaderComponent } from './core/shell/header/header.component';
import { MainComponent } from './core/shell/main/main.component';
import { FooterComponent } from './core/shell/footer/footer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
