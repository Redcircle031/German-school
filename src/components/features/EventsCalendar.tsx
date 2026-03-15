'use client';

import { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, List } from 'lucide-react';

interface EventItem {
  id: string;
  date: string;
  title: Record<string, string>;
  description: Record<string, string>;
  category: Record<string, string>;
}

interface EventsCalendarProps {
  events: EventItem[];
  locale: string;
  labels: {
    month: string;
    list: string;
    today: string;
    noEvents: string;
    details: string;
  };
}

const MONTH_NAMES: Record<string, string[]> = {
  pl: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const DAY_NAMES: Record<string, string[]> = {
  pl: ['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO', 'ND'],
  de: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
  en: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export default function EventsCalendar({ events, locale, labels }: EventsCalendarProps) {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [view, setView] = useState<'month' | 'list'>('month');

  const monthNames = MONTH_NAMES[locale] || MONTH_NAMES.en;
  const dayNames = DAY_NAMES[locale] || DAY_NAMES.en;

  const goToPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth());
  };

  const eventsByDate = useMemo(() => {
    const map: Record<string, EventItem[]> = {};
    events.forEach((event) => {
      const dateStr = event.date;
      if (!map[dateStr]) map[dateStr] = [];
      map[dateStr].push(event);
    });
    return map;
  }, [events]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(
    currentMonth === 0 ? currentYear - 1 : currentYear,
    currentMonth === 0 ? 11 : currentMonth - 1
  );

  const isToday = (day: number) =>
    day === now.getDate() && currentMonth === now.getMonth() && currentYear === now.getFullYear();

  const getEventsForDay = (day: number) => {
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return eventsByDate[`${currentYear}-${m}-${d}`] || [];
  };

  // For list view, get events in current month sorted
  const monthEvents = useMemo(() => {
    return events
      .filter((e) => {
        const [y, m] = e.date.split('-').map(Number);
        return y === currentYear && m === currentMonth + 1;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [events, currentYear, currentMonth]);

  return (
    <>
      {/* View Controls */}
      <div className="sticky top-16z-40 border-b border-neutral-200 bg-white md:top-20">
        <div className="container-custom">
          <div className="flex flex-col justify-between gap-4 py-4 md:flex-row md:items-center">
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView('month')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'month'
                    ? 'bg-accent-100 text-accent-800'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <Calendar className="size-4" />
                {labels.month}
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'list'
                    ? 'bg-accent-100 text-accent-800'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <List className="size-4" />
                {labels.list}
              </button>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrev}
                className="rounded-lg p-2 transition-colors hover:bg-neutral-100"
              >
                <ChevronLeft className="size-5" />
              </button>
              <span className="min-w-[200px] text-center text-lg font-semibold">
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button
                onClick={goToNext}
                className="rounded-lg p-2 transition-colors hover:bg-neutral-100"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <button onClick={goToToday} className="btn-outline px-4 py-2">
              {labels.today}
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <section className="py-8">
        <div className="container-custom">
          {view === 'month' ? (
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Day Headers */}
              <div className="grid grid-cols-7 border-b border-neutral-200">
                {dayNames.map((day) => (
                  <div key={day} className="py-3 text-center text-sm font-medium text-neutral-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {/* Previous month trailing days */}
                {[...Array(firstDay)].map((_, i) => (
                  <div
                    key={`prev-${i}`}
                    className="min-h-[100px] border-b border-r border-neutral-100 bg-neutral-50 p-2 md:min-h-[120px]"
                  >
                    <span className="text-sm text-neutral-400">
                      {prevMonthDays - firstDay + 1 + i}
                    </span>
                  </div>
                ))}

                {/* Current month days */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const dayEvents = getEventsForDay(day);
                  const today = isToday(day);

                  return (
                    <div
                      key={day}
                      className={`min-h-[100px] border-b border-r border-neutral-100 p-2 transition-colors hover:bg-neutral-50 md:min-h-[120px] ${
                        today ? 'bg-accent-50' : ''
                      }`}
                    >
                      <span
                        className={`inline-flex size-7 items-center justify-center rounded-full text-sm font-medium ${
                          today ? 'bg-accent-500 text-white' : 'text-neutral-900'
                        }`}
                      >
                        {day}
                      </span>
                      {dayEvents.length > 0 && (
                        <div className="mt-1 space-y-1">
                          {dayEvents.slice(0, 2).map((evt) => (
                            <div
                              key={evt.id}
                              className="truncate rounded bg-red-100 px-1.5 py-0.5 text-[11px] text-red-800"
                              title={evt.title[locale] || evt.title.pl}
                            >
                              {evt.title[locale] || evt.title.pl}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[11px] text-neutral-500">
                              +{dayEvents.length - 2}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Next month leading days */}
                {(() => {
                  const totalCells = firstDay + daysInMonth;
                  const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
                  return [...Array(remaining)].map((_, i) => (
                    <div
                      key={`next-${i}`}
                      className="min-h-[100px] border-b border-r border-neutral-100 bg-neutral-50 p-2 md:min-h-[120px]"
                    >
                      <span className="text-sm text-neutral-400">{i + 1}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {monthEvents.length > 0 ? (
                monthEvents.map((event) => {
                  const title = event.title[locale] || event.title.pl;
                  const description = event.description[locale] || event.description.pl;
                  const category = event.category[locale] || event.category.pl;

                  return (
                    <div
                      key={event.id}
                      className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-red-100 text-red-700">
                          <Calendar className="mb-1 size-6" />
                          <span className="text-xs font-medium">{event.date.slice(5)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-800">
                              {category}
                            </span>
                          </div>
                          <h3 className="mb-1 text-lg font-semibold text-neutral-900">{title}</h3>
                          <p className="text-sm text-neutral-600">{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <Calendar className="mx-auto mb-4 size-16 text-neutral-300" />
                  <p className="text-neutral-500">{labels.noEvents}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
