'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations();
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
          'fixed inset-0 bg-black/50 z-[9998] transition-opacity',
          isCustomizing ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCustomizing(false)}
      />

      {/* Banner */}
      <div
        className={cn(
          'fixed z-[9999] transition-all duration-300',
          isCustomizing
            ? 'inset-0 m-4 md:m-8 rounded-2xl overflow-hidden'
            : 'bottom-0 left-0 right-0 md:bottom-4 md:left-4 md:right-auto md:max-w-md'
        )}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
          {/* Header */}
          <div className="bg-primary-600 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {t('cookieConsent.title')}
            </h2>
            {!isCustomizing && (
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={t('common.close')}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!isCustomizing ? (
              <>
                <p className="text-neutral-600 mb-6">
                  {t('cookieConsent.description')}{' '}
                  <a
                    href={`/${lang}/cookies`}
                    className="text-primary-600 hover:underline"
                    target="_blank"
                  >
                    {t('cookieConsent.learnMore')}
                  </a>
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full btn-primary py-3"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    {t('cookieConsent.acceptAll')}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="w-full btn-outline py-3"
                  >
                    {t('cookieConsent.rejectAll')}
                  </button>
                  <button
                    onClick={() => setIsCustomizing(true)}
                    className="w-full btn-ghost py-3"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    {t('cookieConsent.customize')}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Customization View */}
                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.necessary.title')}
                      </h3>
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        {t('cookieConsent.categories.necessary.alwaysActive')}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {t('cookieConsent.categories.necessary.description')}
                    </p>
                  </div>

                  {/* Statistics Cookies */}
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.statistics.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('statistics')}
                        className={cn(
                          'relative w-11 h-6 rounded-full transition-colors',
                          preferences.statistics ? 'bg-primary-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.statistics}
                      >
                        <span
                          className={cn(
                            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform',
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
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.marketing.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={cn(
                          'relative w-11 h-6 rounded-full transition-colors',
                          preferences.marketing ? 'bg-primary-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.marketing}
                      >
                        <span
                          className={cn(
                            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform',
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
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-neutral-900">
                        {t('cookieConsent.categories.social.title')}
                      </h3>
                      <button
                        onClick={() => togglePreference('social')}
                        className={cn(
                          'relative w-11 h-6 rounded-full transition-colors',
                          preferences.social ? 'bg-primary-600' : 'bg-neutral-300'
                        )}
                        role="switch"
                        aria-checked={preferences.social}
                      >
                        <span
                          className={cn(
                            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform',
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
            <div className="border-t border-neutral-200 px-6 py-4 flex justify-end space-x-3">
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
