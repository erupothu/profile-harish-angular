import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomEditorComponent implements OnInit {

  @ViewChild('textbox') textAreaRef: ElementRef;
  @ViewChild('textbox2') textAreaRef2: ElementRef;

  tiles = Array.from({ length: 6 }, () => ({
    editable: false,
    tile: {
      content: {
        text: 'Angular Rocks !!',
        html: '<i>Angular </i><b>Rocks !!</b>'
      },
      background: '#2ecc71'
    }
  }));
  text = `<p>text here, Hello <b>harish</b> </p>`;
  selectedText = '';
  startidx: any;
  endIdx: any;
  substr1 = '';
  substr2 = '';
  backSteps = [];
  model = { content: { text: 'hello harish', html: '<i>Angular </i><b>Rocks !!</b>' }, background: '#FFFFFF' };
  editorMenuTop = 100;
  editorMenuLeft = 200;
  showEditorMenu = false;
  createLinkUrl = 'http://';
  imageUrl: any;
  fileToUpload: any;
  videoUrl = '';
  constructor() {
    this.backSteps.push(this.text);
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   const textbox = this.textAreaRef.nativeElement.onselect();
    //   this.startidx = textbox.selectionStart;
    //   this.endIdx = textbox.selectionEnd;
    //   this.substr1 = textbox.value.substring(0, this.startidx);
    //   this.substr2 = textbox.value.substring(this.endIdx, textbox.value.length);
    //   const selectedText = textbox.value.substring(textbox.selectionStart, textbox.selectionEnd)
    //   this.selectedText = selectedText;
    // }, 2000);
  }

  onTextSelected(): void {
    const textbox = this.textAreaRef.nativeElement;
    this.startidx = textbox.selectionStart;
    this.endIdx = textbox.selectionEnd;
    this.substr1 = textbox.value.substring(0, this.startidx);
    this.substr2 = textbox.value.substring(this.endIdx, textbox.value.length);
    const selectedText = textbox.value.substring(textbox.selectionStart, textbox.selectionEnd)
    this.selectedText = selectedText;
  }

  onTextSelected2(): void {
    const textbox2 = this.textAreaRef2.nativeElement;
    let mysel = this.selection()
    this.startidx = textbox2.selectionStart;
    this.endIdx = textbox2.selectionEnd;

    let sel = window.getSelection();
    let selectedText = sel.toString();
    let rect = sel.getRangeAt(0).getBoundingClientRect();
    if (selectedText.length > 0) {
      this.editorMenuTop = Math.round(rect.top); // window.screenTop; //textbox2.offsetTop;
      this.editorMenuLeft = Math.round(rect.left); //window.screenLeft; // textbox2.offsetLeft;
      this.showEditorMenu = true;
    } else {
      this.showEditorMenu = false;
    }
    // let caretOffset = 0;
    // let range = window.getSelection().getRangeAt(0);
    // let preCaretRange = range.cloneRange();
    // preCaretRange.selectNodeContents(textbox2);
    // preCaretRange.setEnd(range.endContainer, range.endOffset);
    // caretOffset = preCaretRange.toString().length;
  }

  bold() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<b>' + this.selectedText + '</b>' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  underline() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<u>' + this.selectedText + '</u>' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  itallic() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<em>' + this.selectedText + '</em>' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  rightAlign() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<div style="float: right;">' + this.selectedText + '</div>' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  inlineBox() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<div style="display: inline-block;">' + this.selectedText + '</div>' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  newLine() {
    if (this.selectedText != '') {
      const textbox = this.textAreaRef.nativeElement;
      textbox.value = this.substr1 + '<br>' + this.selectedText + '' + this.substr2;
      this.text = textbox.value;
      this.backSteps.push(this.text);
    }
  }

  clear() {
    const textbox = this.textAreaRef.nativeElement;
    this.text = '';
    textbox.value = this.text;
    this.backSteps = [];
  }

  stepBack() {
    const textbox = this.textAreaRef.nativeElement;
    if (this.backSteps.length > 0) {
      const text = this.backSteps[this.backSteps.length - 1];
      textbox.value = text;
      this.text = textbox.value;
    }
    this.backSteps.pop();
  }

  contentChanged(v) {

    const textbox2 = this.textAreaRef2.nativeElement;
    this.startidx = textbox2.selectionStart;
    this.endIdx = textbox2.selectionEnd;
    this.model = { ...this.model, content: v };
    this.showEditorMenu = false;
    // this.onChange(this.model);
  }

  ibold() {
    document.execCommand('bold', false, null);
    this.showEditorMenu = false;
  }

  iItalic() {
    document.execCommand('italic', false, null);
    this.showEditorMenu = false;
  }
  iUnderline() {
    document.execCommand('underline', false, null);
    this.showEditorMenu = false;
  }

  contentReadOnly() {
    document.execCommand('contentReadOnly', false, null);
  }
  copy() {
    document.execCommand('copy', false, null);
  }

  createLink() {
    // let linkURL = prompt('Enter a URL:', 'http://');
    // document.designMode = "on";
    // let url = 'http://google.com';
    let selection = document.getSelection();
    document.execCommand('createLink', false, this.createLinkUrl);
    this.showEditorMenu = false;
  }

  decreaseFontSize() {
    document.execCommand('decreaseFontSize', false, null);
  }

  delete() {
    document.execCommand('delete', false, null);
  }

  enableInlineTableEditing() {
    document.execCommand('enableInlineTableEditing', false, null);
  }

  enableObjectResizing() {
    document.execCommand('enableObjectResizing', false, "");
  }

  fontName() {
    document.execCommand('fontName', false, null);
  }

  fontSize() {
    document.execCommand('fontSize', false, null);
  }

  foreColor() {
    document.execCommand('foreColor', false, null);
  }

  formatBlock() {
    document.execCommand('formatBlock', false, null);
  }
  heading() {
    document.execCommand('heading', false, null);
  }
  increaseFontSize() {
    document.execCommand('increaseFontSize', false, null);
  }
  indent() {
    document.execCommand('indent', false, null);
  }
  insertHorizontalRule() {
    document.execCommand('insertHorizontalRule', false, null);
  }
   insertVideo() {
    let videoUrl = 'http://placekitten.com/200/300';
    let video = `<iframe src="`+this.videoUrl+`" height="300px" width="80%" > </iframe>`;
    // document.execCommand('insertImage', false, this.imageUrl);
    document.execCommand('insertHTML', false, video);
  }
  insertImage() {
    let imageUrl = 'http://placekitten.com/200/300';
    let image = `<img src="`+this.imageUrl+`" height="300px" width="80%" (click)="enableObjectResizing()" />`;
    // document.execCommand('insertImage', false, this.imageUrl);
    document.execCommand('insertHTML', false, image);
  }
  insertOrderedList() {
    document.execCommand('insertOrderedList', false, null);
  }
  insertUnorderedList() {
    document.execCommand('insertUnorderedList', false, null);
  }
  insertParagraph() {
    document.execCommand('insertParagraph', false, null);
  }
  insertHTML() {
    document.execCommand('insertHTML', false, '<b>hello</b>');
  }
  justifyCenter() {
    document.execCommand('justifyCenter', false, null);
  }
  justifyFull() {
    document.execCommand('justifyFull', false, null);
  }
  justifyLeft() {
    document.execCommand('justifyLeft', false, null);
  }

  justifyRight() {
    document.execCommand('justifyRight', false, null);
  }
  outdent() {
    document.execCommand('outdent', false, null);
  }
  paste() {
    document.execCommand('paste', false, null);
  }
  redo() {
    document.execCommand('redo', false, null);
  }
  selectAll() {
    document.execCommand('selectAll', false, null);
  }
  strikeThrough() {
    document.execCommand('strikeThrough', false, null);
  }
  subscript() {
    document.execCommand('subscript', false, null);
  }
  superscript() {
    document.execCommand('superscript', false, null);
  }
  unlink() {
    document.execCommand('unlink', false, null);
  }
  useCSS() {
    document.execCommand('useCSS', false, null);
  }
  styleWithCSS() {
    document.execCommand('styleWithCSS', false, null);
  }

  selection() {
    var sel;
    if (window.getSelection) {
      sel = window.getSelection()
    }
    else if (document.getSelection) {
      sel = document.getSelection()
    }
    return sel
  }
    
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = file;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.insertImage();
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

}
