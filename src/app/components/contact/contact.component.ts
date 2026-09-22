import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { CONTACT_INFO } from '../../core/data/contact-info.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icon.component';
import { LocalizePipe } from '../../core/pipes/localize.pipe';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective, IconComponent, LocalizePipe],
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

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitState.set('error');
      return;
    }

    const value = this.form.getRawValue();
    const inquiryLabel = this.text().contact.inquiryOptions[value.inquiryType] ?? '';

    this.submitState.set('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: value.name,
          email: value.email,
          phone: value.phone,
          inquiryType: inquiryLabel,
          message: value.message
        })
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      this.submitState.set('success');
      this.form.reset({ name: '', email: '', phone: '', inquiryType: 0, message: '' });
    } catch {
      this.sendViaMailto(value, inquiryLabel);
    }
  }

  private sendViaMailto(
    value: { name: string; email: string; phone: string; inquiryType: number; message: string },
    inquiryLabel: string
  ): void {
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
