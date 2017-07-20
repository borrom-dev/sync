import { Article } from './../article/article';
import { routes } from './../../../app.routes';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppServicesService } from 'app/services/app-services.service';
import 'rxjs/Rx';

declare let jQuery: any;
declare let marked: any;
declare let hljs: any;
declare let ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

 @ViewChild('editor') aceEditorContainer;

  // tslint:disable-next-line:member-ordering
  @Input() article: Article;
  // tslint:disable-next-line:member-ordering
  @Input() isUpdate: boolean;

  _renderMarkTimeout: any;
  editor: any;
  _markedOpt: any;
  _previewHtml: any;
  _onChange = (_: any) => { };
  _onTouched = () => { };
  // tslint:disable-next-line:member-ordering
  buttonTxt: string;

  get markdownValue(): any {
    return this.article.content || '';
  }
  set markdownValue(value: any) {
    this.article.content = value;
    this._onChange(value);
    if (value !== null && value !== undefined) {
      // tslint:disable-next-line:curly
      if (this._renderMarkTimeout) clearTimeout(this._renderMarkTimeout);
      this._renderMarkTimeout = setTimeout(() => {
        const html = marked(this.article.content || '', this._markedOpt);
        this._previewHtml = this._domSanitizer.bypassSecurityTrustHtml(html);
      }, 100);
    }
  }
  constructor(
    private _route: Router,
    private _service: AppServicesService,
    private _renderer: Renderer,
    private _domSanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.buttonTxt = this.isUpdate ? 'Update' : 'Create';
    console.log(this.isUpdate)
    const _markedRender = new marked.Renderer();
    _markedRender.code = (code: any, language: any) => {
      const validLang = !!(language && hljs.getLanguage(language));
      const highlighted = validLang ? hljs.highlight(language, code).value : code;
      return `<pre style="padding: 0; border-radius: 0;"><code class="hljs ${language}">${highlighted}</code></pre>`;
    };
    _markedRender.table = (header: string, body: string) => {
      return `<table class="table table-bordered">\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`;
    };

    this._markedOpt = {
      renderer: _markedRender,
      highlight: (code: any) => hljs.highlightAuto(code).value
    };
  }

  ngAfterViewInit() {
    const editorElement = this.aceEditorContainer.nativeElement;
    this.editor = ace.edit(editorElement);
    this.editor.$blockScrolling = Infinity;
    this.editor.getSession().setUseWrapMode(true);
    this.editor.getSession().setMode('ace/model/javascript');
    this.editor.getSession().setValue(this.markdownValue);
    this.markdownValue = this.markdownValue;
    this.editor.on('change', (e: any) => {
      const val = this.editor.getValue();
      this.markdownValue = val;
    });
     jQuery('.menu .item').tab();
     jQuery('.ui.dropdown')
     .dropdown({
       onChange: (value, text) => {
          this.article.parent = value;
        }
    });
  }

  writeValue(value: any | Array<any>): void {
    setTimeout(() => {
      this.markdownValue = value;
      if (value && this.editor) {
        this.editor.getSession().setValue(value);
      }
    }, 1);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  insertContent(type: string) {
    // tslint:disable-next-line:curly
    if (!this.editor) return;
    let selectedText = this.editor.getSelectedText();
    const isSeleted = !!selectedText;
    let startSize = 2;
    let initText = '';
    const range = this.editor.selection.getRange();
    switch (type) {
      case 'Bold':
        initText = 'Bold Text';
        selectedText = `**${selectedText || initText}**`;
        break;
      case 'Italic':
        initText = 'Italic Text';
        selectedText = `*${selectedText || initText}*`;
        startSize = 1;
        break;
      case 'Heading':
        initText = 'Heading';
        selectedText = `# ${selectedText || initText}`;
        break;
      case 'Qoute':
        initText = 'Qoute';
        selectedText = `> ${selectedText || initText}`;
        break;
      case 'Link':
        selectedText = `![](http://)`;
        startSize = 1;
        break;
      case 'Image':
        selectedText = `![](http://)`;
        break;
      case 'Ul':
        selectedText = `- ${selectedText || initText}`
        break;
      case 'Ol':
        selectedText = `1. ${selectedText || initText}`
        startSize = 3;
        break;
      case 'Code':
        initText = 'Source Code';
        selectedText = '```language\r\n' + (selectedText || initText) + '\r\n```';
        startSize = 3;
        break;
    }
    this.editor.session.replace(range, selectedText);
    if (!isSeleted) {
      range.start.column += startSize;
      range.end.column = range.start.column + initText.length;
      this.editor.selection.setRange(range);
    }
    this.editor.focus();
  }

  editorResize(timeOut: number = 100) {
    if (this.editor) {
      setTimeout(() => {
        this.editor.resize();
        this.editor.focus();
      }, timeOut);
    }
  }

  save() {
    this._service.create('/api/v1/articles', this.article).subscribe(data => {
      console.log(data);
      this._route.navigateByUrl('/backend');
    });
  }

}
