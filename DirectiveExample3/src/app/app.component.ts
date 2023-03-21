import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExample';

  videos= [
    {title:'My video 1', share:415, likes:257, dislikes:12, thumbnail:'assets/image1.jfif'},
    {title:'My video 2', share:215, likes:352, dislikes:12, thumbnail:'assets/image2.jfif'},
    {title:'My video 3', share:513, likes:105, dislikes:12, thumbnail:'assets/image3.jfif'}
  ]

  mostlikedVideo = this.getmostlikedVideo();

  getmostlikedVideo(){
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr,next)=> next.likes - curr.likes)[0];
  }

}
