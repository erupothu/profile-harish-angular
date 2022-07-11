import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'readmore'
})
export class ReadmorePipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}
  transform(text: any, length: number = 20, showAll: boolean = false, suffix: string = '...'): any {

    if (showAll) {
      return this.sanitized.bypassSecurityTrustHtml(text);
    }

    if ( text.split(" ").length > length ) {

      return text.split(" ").splice(0, length).join(" ") + suffix;
    }

    return this.sanitized.bypassSecurityTrustHtml(text);
  }

}
