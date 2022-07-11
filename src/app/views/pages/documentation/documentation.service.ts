import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  versionControll = [
    {
      id: 4, name: 'release3', version: 'v2.1.1', date: '24-04-2020', features: [
         { type: 'new', color: 'green', list: ['IAM Admin access', 'Documentation'] },
        { type: 'imporved', color: 'blue', list: ['User interface improved', 'Responsive design imporved', 'performance'] },
        { type: 'fixed', color: 'red', list: ['minor fixes'] }
      ]
    },
    {
      id: 3, name: 'release3', version: 'v1.2.1', date: '15-04-2020', features: [
        { type: 'imporved', color: 'blue', list: ['User interface improved', 'Responsive design imporved', 'Alignments improved', 'performance'] }
      ]
    },
    {
      id: 2, name: 'second release', version: 'v1.1.1', date: '25-03-2020', features: [
        { type: 'imporved', color: 'blue', list: ['User interface improved', 'Responsive design imporved', 'Charts imporved'] },
        { type: 'fixed', color: 'red', list: ['bottom right chat working', 'removed the scroll for all divices', 'reoved unwanted libraries'] }
      ]
    },
    {
      id: 1, name: 'initial release', version: 'v1.0.0', date: '01-03-2020', features: [
        { type: 'new', color: 'green', list: ['initial release'] }
      ]
    }
  ];
  introduction = `<p><font face="Calibri" color="#5db054" size="5"><b>Introduction</b></font></p><p><span><font face="Calibri" size="3">Angular is the most popular JavaScript framework and platform for&#160; dynamic developing client-side (front-end) mobile and desktop web apps or single page applications (SPAs).</font></span></p><p><span><font face="Calibri" color="#62b958" size="5">Previous versions</font></span></p><p></p><ul><li><span><b>AngularJS: </b>AngularJs is the first release by Google in 2010, developed as sigle page application with MVC architecture</span></li><li><strong><b>Angular 2:</b> Angular 2 is the complete rewrite of AngularJs, introduced Typescript a superset of JavaScript in 2016</strong></li><li><strong><b>Angular 4:</b> Angular 4 is the fist update by Google Team, came up with new features</strong></li><li><strong><b>Angular 5:</b> It is the improved version of previous angular 4.</strong></li><li><strong><b>Angular 6:</b> Major featues are introduced in this release Angular material, CDK, Angular CLI etc</strong></li><li><strong><b>Angular7: </b>This version mainly focused on performance.</strong></li><li><strong><b>Angular 8:</b> Angular 8 focused on differential loading, lazy routing, web worker and angular Ivy etc</strong></li><li><strong><b>Angular 9:</b> Complete Ivy Engine introduced, focused on performance, ngUpgrade</strong></li></ul><p></p><p><strong><br></strong></p><p><strong><br></strong></p><p><span><font face="Calibri" size="3"><br></font></span></p><p><span><br></span></p>`
  installation = `<p><font face="Calibri" size="5" color="#37770b"><span>Prerequisites</span></font></p><p></p><ul><li><font size="3" face="Calibri"><span>Angular CLI: Install any ide like&#160;</span><a href="https://www.genuitec.com/products/angular-ide/download/" target="_blank">AngularIDE</a><span>,&#160;</span><a href="https://www.eclipse.org/community/eclipse_newsletter/2017/february/article1.php" target="_blank">eclipseIDE</a><span>&#160;or direct CLI.</span></font></li><li><font size="3" face="Calibri"><span>Nodejs:&#160;</span><span>You can download it from&#160;</span><a href="https://nodejs.org/en/" target="_blank" rel="nofollow">https://nodejs.org/en/</a></font></li><li><font size="3" face="Calibri"><span>See how to install Node.js on Windows:&#160;</span><a class="bold" href="https://www.javatpoint.com/install-nodejs">Click Here</a></font></li><li><font size="3" face="Calibri"><span>See how to install Node.js on Linux/ Ubuntu/ CentOS:&#160;</span><a class="bold" href="https://www.javatpoint.com/install-nodejs-on-linux-ubuntu-centos">Click Here</a></font></li><li><font size="3" face="Calibri"><span>Once you have installed Node.js on your system, open node.js command prompt.</span></font></li></ul><p></p><blockquote><blockquote><p><font size="3" face="Calibri"><span>npm&#160;install&#160;-g&#160;@angular/cli&#160;&#160;</span></font></p></blockquote></blockquote><p><span><font size="3" face="Calibri"><b><b>Check</b> <b>versions</b></b></font></span></p><blockquote><blockquote><p><span><font size="3" face="Calibri">node -v</font></span></p></blockquote><blockquote><p><span><font size="3" face="Calibri">npm -v</font></span></p></blockquote><blockquote><p><span><font size="3" face="Calibri">ng -version</font></span></p></blockquote></blockquote><p><span><font size="3" face="Calibri"><b><b>Git</b> <b>Install</b></b></font></span></p><blockquote><p><font size="3" face="Calibri"><span>install&#160;</span><a href="https://linuxize.com/post/how-to-install-git-on-ubuntu-18-04/" target="_blank">git in ubuntu</a></font></p><p><font size="3" face="Calibri">install&#160;<a href="https://git-scm.com/download/win" target="_blank">git in windows</a></font></p></blockquote><p><font size="3" face="Calibri" color="#36720d">Installation</font></p><p></p><ul><li><font size="3" face="Calibri"><span>Download and install the latest&#160;</span><a href="https://nodejs.org/en/" target="_blank">Node.js</a><span>&#160;</span><span>from its web site.</span></font></li><li><font size="3" face="Calibri"><span>Download and install the latest</span><span>&#160;</span><a href="https://git-scm.com/" target="_blank">Git</a><span>&#160;</span><span>from its web site.</span></font></li><li><font size="3" face="Calibri"><span>To install the Angular CLI: Open your favorite console application (Terminal, Command Prompt etc.), run the following command&#160;</span></font></li></ul><p></p><blockquote><p><span><font size="3" face="Calibri">npm&#160;install&#160;-g&#160;@angular/cli&#160;</font></span></p></blockquote><p><span><font size="3" face="Calibri"><br></font></span></p><p><font size="3" face="Calibri" color="#376f11"><span>Project Setup</span></font></p><p></p><ul><li><font size="3" face="Calibri"><span>Unzip the zip project file that you have downloaded.</span></font></li><li><span><font size="3" face="Calibri">go to project folder the run the command</font></span></li></ul><p></p><blockquote><p><span><font size="3" face="Calibri">npm install</font></span></p><p><span><font size="3" face="Calibri">ng serve</font></span></p></blockquote><p><span><font size="3" face="Calibri"><br></font></span></p><p><span><font size="3" face="Calibri" color="#346d0e">Setup in Apache or Ngnix:</font></span></p><p><span><br></span></p>`
  constructor() { }
}
