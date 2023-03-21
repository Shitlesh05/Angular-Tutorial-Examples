import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id:101, name:'Javascript', author:'John Heikela', duration:48, type:'Free', price:0.00, ratings:3.5, 
      image:'assets/courses/js-image.png'
      , description:'In this course you will learn the fundamentals of JavaScript'
    },
    {
      id:102, name:'Angular', author:'Mark Vought', duration:28, type:'Premium', price:129.00, ratings:4.5, 
      image:'assets/courses/ng-image.png'
      , description:'In this course you will learn the fundamentals of Angular framework'
    },
    {
      id:103, name:'React', author:'John Smith', duration:18, type:'Free', price:0.00, ratings:3.9, 
      image:'assets/courses/react-image.png'
      , description:'In this course you will learn the fundamentals of React ;ibrary'
    },
    {
      id:104, name:'Spring Boot', author:'John Heikela', duration:60, type:'Premium', price:400.00, ratings:4.5, 
      image:'assets/courses/spring-image.png'
      , description:'In this course you will learn the Spring boot with basic and advance concept'
    },
    {
      id:105, name:'.Net', author:'J. Vikram', duration:52, type:'Premium', price:250.00, ratings:4.3, 
      image:'assets/courses/c#-image.png'
      , description:'In this course you will learn the .Net core and ASP concepts'
    },
    {
      id:106, name:'Core Java', author:'James Gosling', duration:60, type:'Premium', price:325.00, ratings:4.7, 
      image:'assets/courses/cj-image.png'
      , description:'In this course you will learn the Core java'
    },
    {
      id:107, name:'Selenium', author:'John Heikela', duration:50, type:'Premium', price:275.00, ratings:4.2, 
      image:'assets/courses/sel-image.png'
      , description:'In this course you will learn Selenium with manual and automation testing'
    },
  ]
}
