import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smple-blog',
  templateUrl: './smple-blog.component.html',
  styleUrls: ['./smple-blog.component.css']
})
export class SmpleBlogComponent implements OnInit {

  direction = 'rtl';
  angular9_style = 
  `<my-component style="color:red;" [style.color]="myColor" [style]="{color: myOtherColor}" myDirective></div>`;
  CSS_EXAMPLE = 
`.some-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}`;

TYPE_SCRIPT_EXAMPLE = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}`;

JAVA_SCRIPT = 
`function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;
HTML_EXAMPLE = 
`<div style="display: block;background-color: white;margin: 10px;padding: 20px;">
  <h4>About Me</h4>
  <div>Photo of me</div>
  <div style="height: 200px;width: 200px;background-color: gray;color: white;text-align: center;">
    Photo
  </div>
  <div>
    some text about me, Im harish
  </div>
</div>`;
  constructor() { }

  ngOnInit(): void {
  }

}
