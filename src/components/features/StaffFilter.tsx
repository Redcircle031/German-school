'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, Mail, BookOpen } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  abbreviation?: string;
  role: string;
  subjects: string[];
  grades: string[];
  email: string | null;
  phone: string | null;
  department: string;
  additionalRole?: string;
}

interface AdminMember {
  id: string;
  name: string;
  role: Record<string, string>;
  email: string | null;
  photo: string | null;
}

interface Department {
  key: string;
  label: string;
}

interface StaffFilterProps {
  teachers: StaffMember[];
  admin: AdminMember[];
  departments: Department[];
  staffPhotos: Record<string, string>;
  locale: string;
  labels: {
    search: string;
    teachers: string;
    departments: string;
    qualified: string;
    email: string;
    adminTitle: string;
    adminSubtitle: string;
    noResults: string;
  };
}

export default function StaffFilter({
  teachers,
  admin,
  departments,
  staffPhotos,
  locale,
  labels,
}: StaffFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        searchQuery === '' ||
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDept =
        selectedDept === 'all' ||
        teacher.department.toLowerCase().includes(selectedDept.toLowerCase());
      return matchesSearch && matchesDept;
    });
  }, [teachers, searchQuery, selectedDept]);

  return (
    <>
      {/* Search & Filter Bar */}
      <div className="sticky top-18 z-40 border-b border-neutral-200 bg-white md:top-20">
        <div className="container-custom">
          <div className="flex flex-col gap-4 py-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder={labels.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border-0 bg-neutral-100 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="relative">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg border-0 bg-neutral-100 py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {departments.map((dept) => (
                  <option key={dept.key} value={dept.key}>
                    {dept.label}
                  </option>
                ))}
              </select>
              <Filter className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 py-4 text-sm text-neutral-600">
            <span>
              <strong className="text-neutral-900">{filteredTeachers.length}</strong>{' '}
              {labels.teachers}
            </span>
            <span>
              <strong className="text-neutral-900">{departments.length - 1}</strong>{' '}
              {labels.departments}
            </span>
            <span>
              <strong className="text-neutral-900">100%</strong> {labels.qualified}
            </span>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <section className="py-12">
        <div className="container-custom">
          {filteredTeachers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTeachers.map((teacher) => {
                const subjects = teacher.subjects || [];
                const grades = teacher.grades || [];
                const role = teacher.role || 'Lehrkraft';
                const photo = staffPhotos[teacher.name];
                const initials = teacher.name
                  .split(' ')
                  .map((n) => n.charAt(0))
                  .join('');

                return (
                  <div
                    key={teacher.id}
                    className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="relative mx-auto flex h-48 items-center justify-center overflow-hidden bg-neutral-100">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={teacher.name}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                          <span className="text-4xl font-bold text-neutral-300">{initials}</span>
                        </div>
                      )}
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 backdrop-blur-sm">
                        {teacher.department}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="mb-1 font-semibold text-neutral-900">{teacher.name}</h3>
                      <p className="mb-3 text-sm text-neutral-500">
                        {role}
                        {teacher.additionalRole && (
                          <span className="text-accent-600"> · {teacher.additionalRole}</span>
                        )}
                      </p>
                      {subjects.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-1">
                          {subjects.slice(0, 3).map((subject, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700"
                            >
                              {subject}
                            </span>
                          ))}
                          {subjects.length > 3 && (
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                              +{subjects.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                      {grades.length > 0 && (
                        <div className="mb-3 flex items-center gap-1 text-xs text-neutral-500">
                          <BookOpen className="size-3" />
                          <span>KL {grades.join(', ')}</span>
                        </div>
                      )}
                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="inline-flex items-center gap-1.5 text-sm text-red-600 transition-colors hover:text-red-700"
                        >
                          <Mail className="size-3.5" />
                          {labels.email}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center">
              <Search className="mx-auto mb-4 size-12 text-neutral-300" />
              <p className="text-lg text-neutral-500">{labels.noResults}</p>
            </div>
          )}
        </div>
      </section>

      {/* Admin Staff Section */}
      {admin.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-50 py-16">
          <div className="container-custom">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {labels.adminTitle}
            </h2>
            <p className="mb-10 text-2xl font-medium text-neutral-900">{labels.adminSubtitle}</p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {admin.map((person) => (
                <div key={person.id} className="group text-center">
                  <div className="mx-auto mb-4 size-28 overflow-hidden rounded-2xl bg-neutral-200">
                    {person.photo ? (
                      <Image
                        src={person.photo}
                        alt={person.name}
                        width={112}
                        height={112}
                        className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 text-2xl font-bold text-neutral-400">
                        {person.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-neutral-900">{person.name}</h3>
                  <p className="text-xs text-neutral-500">
                    {person.role[locale] || person.role.en}
                  </p>
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-1 inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                    >
                      <Mail className="size-3" />
                      {labels.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
