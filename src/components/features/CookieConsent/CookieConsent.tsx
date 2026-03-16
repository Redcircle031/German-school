'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/useTranslations';
import { X, Check, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CookieConsentProps {
  lang: string;
}

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
  social: boolean;
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const t = useTranslations(lang as any);
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    statistics: false,
    marketing: false,
    social: false,
  });

  useEffect(() => {
    // Mark component as mounted (client-side only)
    setIsMounted(true);
    
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    const consentTimestamp = localStorage.getItem('cookie-consent-timestamp');
    
    // Check if consent was given more than a year ago
    const oneYearAgo = Date.now() - 365 * 24 * 60 * 60 * 1000;
    
    if (!hasConsent || (consentTimestamp && parseInt(consentTimestamp) < oneYearAgo)) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      statistics: true,
      marketing: true,
      social: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      necessary: true,
      statistics: false,
      marketing: false,
      social: false,
    };
    saveConsent(allRejected);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
    setIsVisible(false);
    setIsCustomizing(false);
    
    // Here you would typically initialize analytics/marketing scripts based on preferences
    if (prefs.statistics) {
      // Initialize analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing scripts
      console.log('Marketing enabled');
    }
    if (prefs.social) {
      // Initialize social media scripts
      console.log('Social media enabled');
    }
  };

  const togglePreference = (key: keyof Omit<CookiePreferences, 'necessary'>) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Don't render anything during SSR or before hydration
  if (!isMounted || !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[9998] bg-black/50 transition-opacity',
          isCustomizing ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsCustomizing(false)}
      />

      {/* Banner */}
      <div
        className={cn(
          'fixed z-[9999] transition-all duration-300',
          isCustomizing
            ? 'inset-0 m-4 overflow-hidden rounded-2xl md:m-8'
            : 'inset-x-0 bottom-0 md:bottom-4 md:left-4 md:right-auto md:max-w-md'
        )}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-red-600 px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              {t('cookieConsent.title')}
            </h2>
            {!isCustomizing && (
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 transition-colors hover:text-white"
                aria-label={t('common.close')}
              >
                <X className="size-5" />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!isCustomizing ? (
              <>
                <p className="mb-6 text-neutral-600">
                  {t('cookieConsent.description')}{' '}
                  <a
                    href={`/${lang}/cookies`}
                    className="text-red-600 hover:underline"
                    target="_blank"
                  >
                    {t('cookieConsent.learnMore')}
                  </a>
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary w-full py-3"
                  >
                    <Check className="mr-2 size-5" />
                    {t('cookieConsent.acceptAll')}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="btn-outline w-full py-3"
                  >
                    {t('cookieConsent.rejectAll')}
                  </button>
                  <button
                    onClick={() => setIsCustomizing(true)}
                    className="btn-ghost w-full py-3"
                  >
                    <Settings className="mr-2 size-5" />
                    {t('cookieConsent.customize')}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Customization View */}
                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.necessary.title')}
                      </h3>
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">
                        {t('cookieConsent.categories.necessary.alwaysActive')}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {t('cookieConsent.categories.necessary.description')}
                    </p>
                  </div>

                  {/* Statistics Cookies */}
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.statistics.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('statistics')}
                        className={cn(
                          'relative h-6 w-11 rounded-full transition-colors',
                          preferences.statistics ? 'bg-red-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.statistics}
                      >
                        <span
                          className={cn(
                            'absolute left-0.5 top-0.5 size-5 rounded-full bg-white transition-transform',
                            preferences.statistics ? 'translate-x-5' : 'translate-x-0'
                          )}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {t('cookieConsent.categories.statistics.description')}
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.marketing.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={cn(
                          'relative h-6 w-11 rounded-full transition-colors',
                          preferences.marketing ? 'bg-red-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.marketing}
                      >
                        <span
                          className={cn(
                            'absolute left-0.5 top-0.5 size-5 rounded-full bg-white transition-transform',
                            preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                          )}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {t('cookieConsent.categories.marketing.description')}
                    </p>
                  </div>

                  {/* Social Cookies */}
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.social.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('social')}
                        className={cn(
                          'relative h-6 w-11 rounded-full transition-colors',
                          preferences.social ? 'bg-red-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.social}
                      >
                        <span
                          className={cn(
                            'absolute left-0.5 top-0.5 size-5 rounded-full bg-white transition-transform',
                            preferences.social ? 'translate-x-5' : 'translate-x-0'
                          )}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {t('cookieConsent.categories.social.description')}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {isCustomizing && (
            <div className="flex justify-end space-x-3 border-t border-neutral-200 px-6 py-4">
              <button
                onClick={() => setIsCustomizing(false)}
                className="btn-ghost px-4 py-2"
              >
                {t('common.back')}
              </button>
              <button onClick={handleSaveCustom} className="btn-primary px-6 py-2">
                {t('cookieConsent.saveSettings')}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
