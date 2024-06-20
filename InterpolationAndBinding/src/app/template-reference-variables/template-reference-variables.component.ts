import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrl: './template-reference-variables.component.css',
})
export class TemplateReferenceVariablesComponent {
  changeText(paragraph: HTMLParagraphElement) {
    paragraph.textContent = 'Text has been changed!';
  }
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
  }
}
