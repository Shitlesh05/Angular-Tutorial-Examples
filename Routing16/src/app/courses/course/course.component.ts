import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course: any;
  courseId: any;

  constructor(private activatedRoute: ActivatedRoute , private service:CoursesService) {}

  ngOnInit() : void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.course = this.service.courses.find(x=> x.id == this.courseId);
  }

}
