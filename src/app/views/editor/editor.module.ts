import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { Ng2FabSpeedDialModule } from 'ng2-fab-speed-dial';

import { CustomEditorComponent } from './custom-editor/custom-editor.component';
import { EditorComponent } from './editor.component';
import { SafehtmlPipe } from './custom-editor/safehtml.pipe';
import { ContenteditableDirective } from './custom-editor/contenteditable.directive';

const editorRoutes: Routes = [
  { path: '', component: EditorComponent, children: [
    { path: 'custom-editor', component: CustomEditorComponent },
  ]},
  { path: 'my-inbox', component: EditorComponent },
]

@NgModule({
  declarations: [
    EditorComponent, CustomEditorComponent, SafehtmlPipe, ContenteditableDirective
  ],
  imports: [
    CommonModule, RouterModule.forChild(editorRoutes), FlexLayoutModule, CoreMaterialModule, FormsModule,
     Ng2FabSpeedDialModule
  ]
})
export class EditorModule { }
