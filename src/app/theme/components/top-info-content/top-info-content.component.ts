import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/app-validators';

@Component({
  selector: 'app-top-info-content',
  templateUrl: './top-info-content.component.html',
  styleUrls: ['./top-info-content.component.scss']
})
export class TopInfoContentComponent implements OnInit {
  @Input('showInfoContent') showInfoContent:boolean = false;
  @Output() onCloseInfoContent: EventEmitter<any> = new EventEmitter();
  contactForm: UntypedFormGroup;
  controls = [
    { name: 'Notifications', checked: true },
    { name: 'Tasks', checked: true },
    { name: 'Events', checked: false },
    { name: 'Downloads', checked: true },
    { name: 'Messages', checked: true },
    { name: 'Updates', checked: false },
    { name: 'Settings', checked: true }
  ]
  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public onContactFormSubmit(values:Object):void {
    if (this.contactForm.valid) {
      console.log(values);
    }
  }

  public closeInfoContent(event){
    this.onCloseInfoContent.emit(event);
  }

}
