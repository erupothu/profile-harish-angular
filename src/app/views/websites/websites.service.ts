import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  categoryList = [
    {id: 7, name: 'Ubuntu', tags: ['Softwares', 'Editors', 'Basics', 'Firewall', 'Networking', 'others'],},
    {id: 8, name: 'Ubuntu FAQ', tags: ['Softwares', 'Editors', 'Basics', 'Firewall', 'Networking', 'others']},
    {id: 9, name: 'Ubuntu Errors', tags: ['Softwares', 'Editors', 'Basics', 'Firewall', 'Networking', 'others']},
    {id: 1, name: 'Angular', tags: ['angular', 'typescript', 'javascript', 'html', 'css/scss', 'others']},
    {id: 2, name: 'Angular FAQ', tags: ['angular', 'typescript', 'javascript', 'html', 'css/scss', 'others']},
    {id: 3, name: 'Angular Errors', tags: ['angular', 'typescript', 'javascript', 'html', 'css/scss', 'others']},
    {id: 4, name: 'Springboot', tags: ['spring', 'springMVC', 'CRUD', 'JAVA', 'DATABASES', 'others']},
    {id: 5, name: 'Springboot FAQ', tags: ['spring', 'springMVC', 'CRUD', 'JAVA', 'DATABASES', 'others']},
    {id: 6, name: 'Springboot Errors', tags: ['spring', 'springMVC', 'CRUD', 'JAVA', 'DATABASES', 'others']},
    {id: 10, name: 'AWS', tags: ['EC2', 'S3', 'Colud Formation', 'ECS', 'Route53', 'others']},
    {id: 11, name: 'AWS FAQ', tags: ['EC2', 'S3', 'Colud Formation', 'ECS', 'Route53', 'others']},
    {id: 12, name: 'AWS Errors', ttags: ['EC2', 'S3', 'Colud Formation', 'ECS', 'Route53', 'others']},
    {id: 13, name: 'Microservices', tags: ['Springboot', 'Angular', 'Jenkins', 'Docker', 'VersionControll', 'others']},
    {id: 14, name: 'Microservices FAQ', tags: ['Springboot', 'Angular', 'Jenkins', 'Docker', 'VersionControll', 'others']},
    {id: 15, name: 'Microservices Errors', tags: ['Springboot', 'Angular', 'Jenkins', 'Docker', 'VersionControll', 'others']}
  ];
  selectedCategory = {id: 1, name: 'Angular', tags: ['angular', 'typescript', 'javascript', 'html', 'css/scss', 'others']};
  topicList = [
    {id: 1, categoryId: 1, profileId: 3, name: 'Angular 9 Features', date: new Date(), author: 'harish', tags: ['angular 9'], content:  'Content1'},
    {id: 2, categoryId: 7, profileId: 1, name: 'Install SVN Server', date: new Date(), author: 'harish', tags: ['angular 9'], content:  'Content1'},
    {id: 3, categoryId: 7, profileId: 1, name: 'Install GIT server', date: new Date(), author: 'harish', tags: ['angular 9'], content:  'Content1'},
    {id: 4, categoryId: 7, profileId: 1, name: 'Install GIT server', date: new Date(), author: 'harish', tags: ['angular 9'], 
    content:  `<p><font size="5"><b>Git Repository Over Http</b></font></p><p><font size="4"><b>Setup:</b></font></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><font size="3">We will install Apache2 server and Git in Our Ubuntu 20.04 machine. (I tried in Aws EC2 Machine)</font><p><br></p></blockquote><font size="4"><b>Installation:</b></font><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><font size="3">Lets start install Git and Apache server</font></p></blockquote><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p><p><font size="3">sudo apt update</font></p><p></p><p></p><p><font size="3">sudo apt install apache2 git-core&nbsp;<span style="color: rgb(239, 240, 249); font-family: monospace, monospace; background-color: rgb(41, 41, 46);">libapache2-mod-authnz-external</span></font></p><p></p></blockquote><p></p><p><br></p><p><font size="4"><b>Creating Repo:</b></font></p><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">cd /var/www/html</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">mkdir git</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">cd git</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">mkdir reponame</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">cd reponame</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">git init --bare</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">chgrp -R www-data /var/www/html/git</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">chown -R www-data /var/www/html/git</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">git config http.receivepack true</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">git update-server-info</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p></blockquote><p></p><p><font size="4"><b>Authenitcation:</b></font></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><br></p><p><br></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">touch auth.sh</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">chmod 755 auth.sh</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">cd /usr/local/bin/
touch auth.sh
chmod 755 auth.sh</code></pre></blockquote></blockquote><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p><pre class="highlight shell" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;"><span class="c" style="color: rgb(128, 128, 128);">#! /bin/bash</span>
<span class="nb" style="color: rgb(248, 248, 242);">read </span>user
<span class="nb" style="color: rgb(248, 248, 242);">read </span>password

<span class="k" style="color: rgb(243, 156, 18);">if</span> <span class="o" style="color: rgb(249, 105, 14);">[[</span> <span class="o" style="color: rgb(249, 105, 14);">(</span><span class="s2" style="color: rgb(242, 202, 39);">"</span><span class="nv" style="color: rgb(248, 248, 242);">$user</span><span class="s2" style="color: rgb(242, 202, 39);">"</span> <span class="o" style="color: rgb(249, 105, 14);">=</span> <span class="s2" style="color: rgb(242, 202, 39);">"hello"</span><span class="o" style="color: rgb(249, 105, 14);">)</span> <span class="o" style="color: rgb(249, 105, 14);">&amp;&amp;</span> <span class="o" style="color: rgb(249, 105, 14);">(</span><span class="s2" style="color: rgb(242, 202, 39);">"</span><span class="nv" style="color: rgb(248, 248, 242);">$password</span><span class="s2" style="color: rgb(242, 202, 39);">"</span> <span class="o" style="color: rgb(249, 105, 14);">=</span> <span class="s2" style="color: rgb(242, 202, 39);">"world"</span><span class="o" style="color: rgb(249, 105, 14);">)</span> <span class="o" style="color: rgb(249, 105, 14);">]]</span><span class="p" style="color: rgb(248, 248, 242);">;</span> <span class="k" style="color: rgb(243, 156, 18);">then
  </span><span class="nb" style="color: rgb(248, 248, 242);">exit </span>0
<span class="k" style="color: rgb(243, 156, 18);">else
  </span><span class="nb" style="color: rgb(248, 248, 242);">exit </span>1
<span class="k" style="color: rgb(243, 156, 18);">fi</span></code></pre><p></p></blockquote></blockquote><p></p><p><br></p><p><font size="4"><b>Configuring Apache:</b></font></p><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p><p><font size="3">a2enmod authnz_external cgi alias env</font></p><p><font size="3">cd /etc/apache2</font></p><p><font size="3">sudo nano httpd.conf</font></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight conf" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">&lt;<span class="n" style="color: rgb(248, 248, 242);">VirtualHost</span> *:<span class="m" style="color: rgb(221, 160, 221);">80</span>&gt;

    <span class="n" style="color: rgb(248, 248, 242);">SetEnv</span> <span class="n" style="color: rgb(248, 248, 242);">GIT_PROJECT_ROOT</span> /<span class="n" style="color: rgb(248, 248, 242);">var</span>/<span class="n" style="color: rgb(248, 248, 242);">www</span>/<span class="n" style="color: rgb(248, 248, 242);">html</span>/<span class="n" style="color: rgb(248, 248, 242);">git</span>
    <span class="n" style="color: rgb(248, 248, 242);">SetEnv</span> <span class="n" style="color: rgb(248, 248, 242);">GIT_HTTP_EXPORT_ALL</span>
    <span class="n" style="color: rgb(248, 248, 242);">SetEnv</span> <span class="n" style="color: rgb(248, 248, 242);">REMOTE_USER</span>=$<span class="n" style="color: rgb(248, 248, 242);">REDIRECT_REMOTE_USER</span>

    <span class="n" style="color: rgb(248, 248, 242);">DocumentRoot</span> /<span class="n" style="color: rgb(248, 248, 242);">var</span>/<span class="n" style="color: rgb(248, 248, 242);">www</span>/<span class="n" style="color: rgb(248, 248, 242);">html</span>
    &lt;<span class="n" style="color: rgb(248, 248, 242);">Directory</span> <span class="s2" style="color: rgb(242, 202, 39);">"/var/www/html"</span>&gt;
        <span class="n" style="color: rgb(248, 248, 242);">Options</span> <span class="n" style="color: rgb(248, 248, 242);">All</span> <span class="n" style="color: rgb(248, 248, 242);">Includes</span> <span class="n" style="color: rgb(248, 248, 242);">Indexes</span> <span class="n" style="color: rgb(248, 248, 242);">FollowSymLinks</span>
        <span class="n" style="color: rgb(248, 248, 242);">Order</span> <span class="n" style="color: rgb(248, 248, 242);">allow</span>,<span class="n" style="color: rgb(248, 248, 242);">deny</span>
        <span class="n" style="color: rgb(248, 248, 242);">Allow</span> <span class="n" style="color: rgb(248, 248, 242);">from</span> <span class="n" style="color: rgb(248, 248, 242);">all</span>
        <span class="n" style="color: rgb(248, 248, 242);">AllowOverride</span> <span class="n" style="color: rgb(248, 248, 242);">All</span>
    &lt;/<span class="n" style="color: rgb(248, 248, 242);">Directory</span>&gt;


    <span class="n" style="color: rgb(248, 248, 242);">ScriptAliasMatch</span> \
        <span class="err" style="text-shadow: rgb(249, 105, 14) 0px 0px 7px;">"</span>(?<span class="n" style="color: rgb(248, 248, 242);">x</span>)^/<span class="n" style="color: rgb(248, 248, 242);">git</span>/(.*/(<span class="n" style="color: rgb(248, 248, 242);">HEAD</span> | \
        <span class="n" style="color: rgb(248, 248, 242);">info</span>/<span class="n" style="color: rgb(248, 248, 242);">refs</span> | \
        <span class="n" style="color: rgb(248, 248, 242);">objects</span>/(<span class="n" style="color: rgb(248, 248, 242);">info</span>/[^/]+ | \
        [<span class="m" style="color: rgb(221, 160, 221);">0</span>-<span class="m" style="color: rgb(221, 160, 221);">9</span><span class="n" style="color: rgb(248, 248, 242);">a</span>-<span class="n" style="color: rgb(248, 248, 242);">f</span>]{<span class="m" style="color: rgb(221, 160, 221);">2</span>}/[<span class="m" style="color: rgb(221, 160, 221);">0</span>-<span class="m" style="color: rgb(221, 160, 221);">9</span><span class="n" style="color: rgb(248, 248, 242);">a</span>-<span class="n" style="color: rgb(248, 248, 242);">f</span>]{<span class="m" style="color: rgb(221, 160, 221);">38</span>} | \
        <span class="n" style="color: rgb(248, 248, 242);">pack</span>/<span class="n" style="color: rgb(248, 248, 242);">pack</span>-[<span class="m" style="color: rgb(221, 160, 221);">0</span>-<span class="m" style="color: rgb(221, 160, 221);">9</span><span class="n" style="color: rgb(248, 248, 242);">a</span>-<span class="n" style="color: rgb(248, 248, 242);">f</span>]{<span class="m" style="color: rgb(221, 160, 221);">40</span>}\.(<span class="n" style="color: rgb(248, 248, 242);">pack</span>|<span class="n" style="color: rgb(248, 248, 242);">idx</span>)) | \
        <span class="n" style="color: rgb(248, 248, 242);">git</span>-(<span class="n" style="color: rgb(248, 248, 242);">upload</span>|<span class="n" style="color: rgb(248, 248, 242);">receive</span>)-<span class="n" style="color: rgb(248, 248, 242);">pack</span>))$<span class="err" style="text-shadow: rgb(249, 105, 14) 0px 0px 7px;">"</span> \
        <span class="s2" style="color: rgb(242, 202, 39);">"/usr/lib/git-core/git-http-backend/$1"</span>

    <span class="n" style="color: rgb(248, 248, 242);">Alias</span> /<span class="n" style="color: rgb(248, 248, 242);">git</span> /<span class="n" style="color: rgb(248, 248, 242);">var</span>/<span class="n" style="color: rgb(248, 248, 242);">www</span>/<span class="n" style="color: rgb(248, 248, 242);">html</span>/<span class="n" style="color: rgb(248, 248, 242);">git</span>

    &lt;<span class="n" style="color: rgb(248, 248, 242);">Directory</span> /<span class="n" style="color: rgb(248, 248, 242);">usr</span>/<span class="n" style="color: rgb(248, 248, 242);">lib</span>/<span class="n" style="color: rgb(248, 248, 242);">git</span>-<span class="n" style="color: rgb(248, 248, 242);">core</span>&gt;
        <span class="n" style="color: rgb(248, 248, 242);">Options</span> +<span class="n" style="color: rgb(248, 248, 242);">ExecCGI</span> -<span class="n" style="color: rgb(248, 248, 242);">MultiViews</span> +<span class="n" style="color: rgb(248, 248, 242);">SymLinksIfOwnerMatch</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthType</span> <span class="n" style="color: rgb(248, 248, 242);">Basic</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthName</span> <span class="s2" style="color: rgb(242, 202, 39);">"Restricted"</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthBasicProvider</span> <span class="n" style="color: rgb(248, 248, 242);">external</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthExternal</span> <span class="n" style="color: rgb(248, 248, 242);">auth</span>
        <span class="n" style="color: rgb(248, 248, 242);">require</span> <span class="n" style="color: rgb(248, 248, 242);">valid</span>-<span class="n" style="color: rgb(248, 248, 242);">user</span>
    &lt;/<span class="n" style="color: rgb(248, 248, 242);">Directory</span>&gt;

    &lt;<span class="n" style="color: rgb(248, 248, 242);">Directory</span> /<span class="n" style="color: rgb(248, 248, 242);">var</span>/<span class="n" style="color: rgb(248, 248, 242);">www</span>/<span class="n" style="color: rgb(248, 248, 242);">html</span>/<span class="n" style="color: rgb(248, 248, 242);">git</span>&gt;
        <span class="n" style="color: rgb(248, 248, 242);">Options</span> +<span class="n" style="color: rgb(248, 248, 242);">ExecCGI</span> +<span class="n" style="color: rgb(248, 248, 242);">Indexes</span> +<span class="n" style="color: rgb(248, 248, 242);">FollowSymLinks</span>
        <span class="n" style="color: rgb(248, 248, 242);">Allowoverride</span> <span class="n" style="color: rgb(248, 248, 242);">None</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthType</span> <span class="n" style="color: rgb(248, 248, 242);">Basic</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthName</span> <span class="s2" style="color: rgb(242, 202, 39);">"Restricted"</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthBasicProvider</span> <span class="n" style="color: rgb(248, 248, 242);">external</span>
        <span class="n" style="color: rgb(248, 248, 242);">AuthExternal</span> <span class="n" style="color: rgb(248, 248, 242);">auth</span>
        <span class="n" style="color: rgb(248, 248, 242);">require</span> <span class="n" style="color: rgb(248, 248, 242);">valid</span>-<span class="n" style="color: rgb(248, 248, 242);">user</span>
    &lt;/<span class="n" style="color: rgb(248, 248, 242);">Directory</span>&gt;

    <span class="n" style="color: rgb(248, 248, 242);">AddExternalAuth</span> <span class="n" style="color: rgb(248, 248, 242);">auth</span> /<span class="n" style="color: rgb(248, 248, 242);">usr</span>/<span class="n" style="color: rgb(248, 248, 242);">local</span>/<span class="n" style="color: rgb(248, 248, 242);">bin</span>/<span class="n" style="color: rgb(248, 248, 242);">auth</span>.<span class="n" style="color: rgb(248, 248, 242);">sh</span>
    <span class="n" style="color: rgb(248, 248, 242);">SetExternalAuthMethod</span> <span class="n" style="color: rgb(248, 248, 242);">auth</span> <span class="n" style="color: rgb(248, 248, 242);">pipe</span>

&lt;/<span class="n" style="color: rgb(248, 248, 242);">VirtualHost</span>&gt;</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><font size="3">now open /etc/apache2/apache2.conf comment out the line</font></p><p><font size="3">sudo nano&nbsp;<span style="background-color: transparent;">/etc/apache2/apache2.conf</span></font></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">#IncludeOptional sites-enabled/*.conf</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><span style="background-color: transparent;">Then add the line</span></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">Include /etc/apache2/httpd.conf</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p></blockquote><p></p><p><span style="background-color: transparent;">Restart Apache Server:</span></p><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; color: rgb(239, 240, 249); background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;">sudo servie apache2 restart</pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p><p></p></blockquote><p></p><p><span style="background-color: transparent;"><font size="4"><b>Testing:</b></font></span></p><p></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">git clone http://{SERVER_DOMAIN}/git/reponame/</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p></p><p><span style="color: rgb(8, 9, 10); font-family: Palatino, &quot;Palatino Linotype&quot;, &quot;Palatino LT STD&quot;, &quot;Book Antiqua&quot;, Georgia, serif; font-size: 21px; background-color: rgb(255, 255, 255);">Add something to the repo and commit it</span></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">touch test.txt
git add test.txt 
git commit -m "test commit"</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><span style="color: rgb(8, 9, 10); font-family: Palatino, &quot;Palatino Linotype&quot;, &quot;Palatino LT STD&quot;, &quot;Book Antiqua&quot;, Georgia, serif; font-size: 21px; background-color: rgb(255, 255, 255);">Push the changes to the remote repository</span><span style="background-color: transparent;"><br></span></p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><pre class="highlight plaintext" style="font-family: monospace, monospace; font-size: 0.7em; background: rgb(41, 41, 46); border-radius: 0px; padding: 43.2812px 14.4219px 43.2812px 64.9375px; color: rgb(239, 240, 249); line-height: 1.42em; width: 800.969px; margin-left: -79.375px; overflow-wrap: normal;"><code style="font-family: monospace, monospace; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(239, 240, 249); margin: auto; padding: 0px; border-radius: 2px; vertical-align: 0px; max-width: 100%; line-height: 1.6em;">git push -u origin master</code></pre></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p><span style="color: rgb(8, 9, 10); font-family: Palatino, &quot;Palatino Linotype&quot;, &quot;Palatino LT STD&quot;, &quot;Book Antiqua&quot;, Georgia, serif; font-size: 21px; background-color: rgb(255, 255, 255);">And that's about it. If the clone and push succeed, it means we successfully served our repository.</span><span style="background-color: transparent;"><br></span></p><p></p></blockquote>`}];
  selectedTopic = {id: 3, categoryId: 7, name: 'Install GIT server', date: new Date(), author: 'harish', tags: ['angular 9']};
  profileList = [
    {id: 1, name: 'Harish', email: 'harish.erupothu@gmail.com', phone: '846404323', twitterId: '', linkedInId: '', youtubeId: ''},
    {id: 2, name: 'Vinny', email: 'harish.erupothu@gmail.com', phone: '846404323', twitterId: '', linkedInId: '', youtubeId: ''},
    {id: 3, name: 'Ammulu', email: 'harish.erupothu@gmail.com', phone: '846404323', twitterId: '', linkedInId: '', youtubeId: ''},
    {id: 4, name: 'Balu', email: 'harish.erupothu@gmail.com', phone: '846404323', twitterId: '', linkedInId: '', youtubeId: ''}
  ];
  selectedProfile = {id: 1, name: 'Harish', email: 'harish.erupothu@gmail.com', phone: '846404323', twitterId: '', linkedInId: '', youtubeId: ''};

  constructor() { }
}