import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextEditorElementDirective } from './components/editor-element.directive';
import { TextEditorComponent } from './components/text-editor.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TextEditor } from './services/text-editor';
import { StateService } from './services/text-editor-state.service';
import { TextEditorSelection } from './services/selection.service';
import { BoldTransform } from './services/transforms/bold.transform';
import { ColorTransform } from './services/transforms/color.transform';
import { FontFamilyTransform } from './services/transforms/font-family.transform';
import { FontSizeTransform } from './services/transforms/font-size.transform';
import { ItalicTransform } from './services/transforms/italic.transform';
import { LinkTransform } from './services/transforms/link.transform';
import { ExternalLinkTransform } from './services/transforms/external-link.transform';
import { UnderlineTransform } from './services/transforms/underline.transform';
import { SelectionHelper } from './helpers/selection.helper';
import { JustifyCenterTransform } from './services/transforms/justify-center.transform';
import { JustifyLeftTransform } from './services/transforms/justify-left.transform';
import { JustifyRightTransform } from './services/transforms/justify-right.transform';
import { JustifyFullTransform } from './services/transforms/justify-full.transform';
import { UnorderedTransform } from './services/transforms/unordered.transform';
import { OrderedTransform } from './services/transforms/ordered.transform';

const providers = [
  TextEditor,
  StateService,
  TextEditorSelection,
  BoldTransform,
  ColorTransform,
  FontFamilyTransform,
  FontSizeTransform,
  ItalicTransform,
  LinkTransform,
  ExternalLinkTransform,
  UnderlineTransform,
  JustifyCenterTransform,
  JustifyLeftTransform,
  JustifyRightTransform,
  JustifyFullTransform,
  UnorderedTransform,
  OrderedTransform,
  SelectionHelper,
  TextEditorComponent,
];

@NgModule({
  declarations: [
    TextEditorComponent,
    TextEditorElementDirective,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
  ],
  providers,
  exports: [TextEditorComponent]
})
export class PebTextEditorModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: PebTextEditorModule,
  //     providers,
  //   };
  // }
}
