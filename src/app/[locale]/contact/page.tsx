'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('pl');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle locale change
  useEffect(() => {
    params.then(p => setLocale(p.locale));
  }, [params]);

  const t: Record<string, string> = {
    'navigation.home': locale === 'pl' ? 'Strona główna' : locale === 'de' ? 'Startseite' : 'Home',
    'contact.title': locale === 'pl' ? 'Kontakt' : locale === 'de' ? 'Kontakt' : 'Contact',
    'contact.subtitle': locale === 'pl' ? 'Chętnie odpowiemy na Twoje pytania' : locale === 'de' ? 'Wir beantworten gerne Ihre Fragen' : 'We\'d love to hear from you',
    'contact.form.title': locale === 'pl' ? 'Napisz do nas' : locale === 'de' ? 'Schreiben Sie uns' : 'Write to us',
    'contact.form.submit': locale === 'pl' ? 'Wyślij wiadomość' : locale === 'de' ? 'Nachricht senden' : 'Send message',
    'contact.map': locale === 'pl' ? 'Lokalizacja' : locale === 'de' ? 'Standort' : 'Location',
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to data processing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setErrors({
          general: result.error?.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors({
        general: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: locale === 'pl' ? 'Adres' : locale === 'de' ? 'Adresse' : 'Address',
      lines: [
        'ul. Św. Urszuli Ledóchowskiej 3',
        '02-972 Warszawa, Poland',
      ],
      color: 'bg-red-600',
    },
    {
      icon: Phone,
      title: locale === 'pl' ? 'Telefon' : locale === 'de' ? 'Telefon' : 'Phone',
      lines: [
        '+48 22 642 27 05',
        'Fax: +48 22 395 86 51',
      ],
      color: 'bg-neutral-900',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: [
        'Grades 1-4: sekretariat2@wbs.pl',
        'Grades 5-12: sekretariat1@wbs.pl',
      ],
      color: 'bg-red-600',
    },
    {
      icon: Clock,
      title: locale === 'pl' ? 'Godziny pracy' : locale === 'de' ? 'Öffnungszeiten' : 'Office Hours',
      lines: [
        'Monday - Friday',
        '8:00 - 16:00',
      ],
      color: 'bg-neutral-900',
    },
  ];

  const formFields: Record<string, Array<{ name: string; label: string; type: string; required: boolean }>> = {
    pl: [
      { name: 'name', label: 'Imię i nazwisko', type: 'text', required: true },
      { name: 'email', label: 'Adres email', type: 'email', required: true },
      { name: 'phone', label: 'Numer telefonu', type: 'tel', required: false },
      { name: 'subject', label: 'Temat', type: 'text', required: true },
      { name: 'message', label: 'Wiadomość', type: 'textarea', required: true },
    ],
    de: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'E-Mail-Adresse', type: 'email', required: true },
      { name: 'phone', label: 'Telefonnummer', type: 'tel', required: false },
      { name: 'subject', label: 'Betreff', type: 'text', required: true },
      { name: 'message', label: 'Nachricht', type: 'textarea', required: true },
    ],
    en: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  };

  const currentFields = formFields[locale] || formFields.en;

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-16 text-white md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="mb-6 flex items-center space-x-2 text-sm text-white/80">
                <Link href={`/${locale}`} className="transition-colors hover:text-white">
                  {t['navigation.home']}
                </Link>
                <ChevronRight className="size-4" />
                <span className="font-medium text-white">{t['contact.title']}</span>
              </nav>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {t['contact.title']}
              </h1>
              <p className="text-xl text-white/90">
                {t['contact.subtitle']}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="-mt-8 py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className={`${info.color} mb-4 flex size-12 items-center justify-center rounded-lg`}>
                    <info.icon className="size-6 text-white" />
                  </div>
                  <h3 className="mb-3 font-semibold text-neutral-900">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-neutral-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold">
                    {t['contact.form.title']}
                  </h2>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="mt-1 text-sm">We will get back to you soon.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && errors.general && (
                    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                      <p className="font-semibold">Failed to send message</p>
                      <p className="mt-1 text-sm">{errors.general}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {currentFields.slice(0, 3).map((field) => (
                        <div key={field.name}>
                          <label className="label" htmlFor={field.name}>
                            {field.label}
                            {field.required && <span className="ml-1 text-red-500">*</span>}
                          </label>
                          {field.type === 'textarea' ? (
                            <textarea
                              id={field.name}
                              name={field.name}
                              rows={4}
                              required={field.required}
                              className="input"
                              placeholder={field.label}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={handleChange}
                            />
                          ) : (
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              required={field.required}
                              className="input"
                              placeholder={field.label}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={handleChange}
                            />
                          )}
                          {errors[field.name] && (
                            <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="label" htmlFor="subject">
                        {currentFields[3].label}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="input"
                        placeholder={currentFields[3].label}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label className="label" htmlFor="message">
                        {currentFields[4].label}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="input"
                        placeholder={currentFields[4].label}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 size-4 rounded border-neutral-300 text-red-600 focus:ring-red-500"
                      />
                      <label htmlFor="consent" className="text-sm text-neutral-600">
                        {locale === 'pl'
                          ? 'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z RODO'
                          : locale === 'de'
                            ? 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß DSGVO zu'
                            : 'I consent to the processing of my personal data according to GDPR'}
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-sm text-red-600">{errors.consent}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                    >
                      <Send className="mr-2 size-5" />
                      {isSubmitting ? 'Sending...' : t['contact.form.submit']}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    {locale === 'pl' ? 'Szybki kontakt' : locale === 'de' ? 'Schnellkontakt' : 'Quick Contact'}
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:+48226422705" className="flex items-center space-x-3 text-neutral-600 transition-colors hover:text-red-600">
                      <Phone className="size-5" />
                      <span>+48 22 642 27 05</span>
                    </a>
                    <a href="mailto:sekretariat@wbs.pl" className="flex items-center space-x-3 text-neutral-600 transition-colors hover:text-red-600">
                      <Mail className="size-5" />
                      <span>sekretariat@wbs.pl</span>
                    </a>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="rounded-2xl bg-accent-50 p-6">
                  <MessageSquare className="mb-4 size-10 text-accent-500" />
                  <h3 className="mb-2 text-lg font-semibold">
                    {locale === 'pl' ? 'Masz pytania?' : locale === 'de' ? 'Haben Sie Fragen?' : 'Have Questions?'}
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600">
                    {locale === 'pl'
                      ? 'Sprawdź nasze najczęściej zadawane pytania'
                      : locale === 'de'
                        ? 'Sehen Sie sich unsere häufig gestellten Fragen an'
                        : 'Check out our frequently asked questions'}
                  </p>
                  <Link href={`/${locale}/faq`} className="text-sm font-medium text-red-600 hover:text-red-700">
                    {locale === 'pl' ? 'Zobacz FAQ →' : locale === 'de' ? 'FAQ ansehen →' : 'View FAQ →'}
                  </Link>
                </div>

                {/* Social Media */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    {locale === 'pl' ? 'Śledź nas' : locale === 'de' ? 'Folgen Sie uns' : 'Follow Us'}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/wbswarschau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-lg bg-neutral-800 text-white transition-colors hover:bg-neutral-900"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-white py-12">
          <div className="container-custom">
            <h2 className="mb-6 text-2xl font-bold">
              {t['contact.map']}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8!2d21.0692!3d52.1575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d2964f0ed73%3A0x8e3e2f5e7b4e9d0a!2sPolsko-Niemiecka%20Szko%C5%82a%20Spotka%C5%84%20i%20Dialogu%20im.%20Willy%E2%80%99ego%20Brandta!5e0!3m2!1spl!2spl!4v1710460000000!5m2!1spl!2spl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locale === 'pl' ? 'Mapa lokalizacji szkoły' : locale === 'de' ? 'Schulstandort auf der Karte' : 'School location map'}
              />
            </div>
          </div>
        </section>
    </div>
  );
}
