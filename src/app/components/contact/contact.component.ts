import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { CONTACT_INFO } from '../../core/data/contact-info.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icon.component';

type SubmitState = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly contactInfo = CONTACT_INFO;

  private readonly fb = inject(FormBuilder);
  readonly submitState = signal<SubmitState>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    inquiryType: [0, []],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitState.set('error');
      return;
    }

    const value = this.form.getRawValue();
    const inquiryLabel = this.text().contact.inquiryOptions[value.inquiryType] ?? '';

    const subject = encodeURIComponent(`${inquiryLabel} — ${value.name}`);
    const body = encodeURIComponent(
      `${this.text().contact.nameLabel}: ${value.name}\n` +
        `${this.text().contact.emailLabel}: ${value.email}\n` +
        `${this.text().contact.phoneLabel}: ${value.phone || '-'}\n` +
        `${this.text().contact.inquiryLabel}: ${inquiryLabel}\n\n` +
        `${value.message}`
    );

    window.location.href = `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;

    this.submitState.set('success');
    this.form.reset({ name: '', email: '', phone: '', inquiryType: 0, message: '' });
  }
}
