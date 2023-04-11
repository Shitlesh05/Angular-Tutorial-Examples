import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';

//defining the routes
const appRoute: Routes = [
  {path:'' , component: HomeComponent},         //  first way (here no redirection happens)
                                  //(or)
  //{path:'' , redirectTo:'Home' , pathMatch:'full'},  // redirection of root component second way (here redirection happens)

  {path:'Home' , component: HomeComponent},
  {path:'About' , component: AboutComponent},
  {path:'Contact' , component: ContactComponent},
  // {path:'Courses/Course/:id' , component: CourseComponent},

  //child Route
  {path: '' , children:[
    {path: 'Course/:id' , component:CourseComponent}
  ]} ,

  {path:'**' , component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)     // redirecting towards routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
