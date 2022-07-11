import { Component, OnInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { JavaIdeService } from './java-ide.service';

@Component({
  selector: 'app-java-ide',
  templateUrl: './java-ide.component.html',
  styleUrls: ['./java-ide.component.css']
})
export class JavaIdeComponent implements OnInit {

  // @ViewChild('term', { static: true }) child: NgTerminal;
  @ViewChild('termJava', { static: true }) childJava: NgTerminal;

  response = '';
  javaResponse = '';
  tab = '';
  result: any;
  constructor(private javaIdeService: JavaIdeService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.child.write('bash-java$ ');
    this.childJava.write('  ');
    // this.child.keyEventInput.subscribe(e => {
    //   console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
 
    //   const ev = e.domEvent;
    //   const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      
    //   if (ev.keyCode === 13) {
    //     this.child.write('\r\nbash-java$ ');
    //     this.response = '';
    //   } else if (ev.keyCode === 8) {
    //     // Do not delete the prompt
    //     if (this.child.underlying.buffer.cursorX > 2) {
    //       this.child.write('\b \b');
    //     }
    //   } else if (printable) {
    //     this.response += e.key;
    //     this.child.write(e.key);
    //   }
    // })

    this.childJava.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
      // 'public class Hesting { \r\n\t public static void main(String []args){ \r\n\t\t System.out.println(\"Good morning harish\"); \r\n\t } \r\n}'
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      const len = this.javaResponse.length;
      const tablen = this.tab.length-1;
      if (ev.keyCode === 13) {
        if (this.javaResponse[len-1] === '{') {
          this.tab += '\t';
          this.childJava.write('\r\n' + this.tab);
        } else if (this.javaResponse[len-1] === '}') {
          this.tab = this.tab.slice(0,tablen);
          this.childJava.write('\r\n' + this.tab);
        } else {
          this.childJava.write('\r\n' + this.tab);
        }
        
      } else if (ev.keyCode === 8) {
        if (this.childJava.underlying.buffer.cursorX > 2) {
          this.javaResponse = this.javaResponse.slice(0, (len-1));
          this.childJava.write('\b \b');
        }
      } else if (printable) {
        this.javaResponse += e.key;
        this.childJava.write(e.key);
      }
    })

  }

  executeJavaClass() {
    this.javaIdeService.executeJavaCode(this.javaResponse).subscribe (data => {
      this.result = data;
    });
  }

}
