import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("load", ()=> {
      const canvas = document.getElementById("canvas") as HTMLFormElement;
      var ctx = canvas.getContext("2d");
      // variable
      let painting = false;

      function startPosition(){
          painting = true;
          draw(e);
      }
      
      function finishiedPosition(){
          painting = false;
          ctx.beginPath();
      }
      
      function draw(e: any){
          if(!painting) return;
          ctx.lineWidth = 5;
          ctx.lineCap = "round";

          const rect = canvas.getBoundingClientRect(); 
          ctx.lineTo(e.clientX-rect.left , e.clientY-rect.top);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(e.clientX-rect.left , e.clientY-rect.top);


      }

      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup",finishiedPosition);
      canvas.addEventListener("mousemove", draw);

      var clearbtn = document.getElementById('clear');
      clearbtn.addEventListener('click', function(){
      const rect = canvas.getBoundingClientRect(); 
      ctx.clearRect( rect.left, rect.top, canvas.width, canvas.height);})
          
  })

 
  }

}
