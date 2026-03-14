import { defineField, defineType } from 'sanity';

export const person = defineType({
  name: 'person',
  title: 'Staff Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'abbreviation',
      title: 'Abbreviation',
      type: 'string',
      description: 'Short name/abbreviation (e.g., "Bk", "Chm")',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Teacher', value: 'Lehrkraft' },
          { title: 'Principal', value: 'Schulleitung' },
          { title: 'Support Teacher', value: 'Unterstützungslehrkraft' },
          { title: 'Librarian', value: 'Bibliothekarin' },
          { title: 'Social Pedagogue', value: 'Schulsozialpädagogin' },
          { title: 'Aftercare Director', value: 'Leiterin der Nachmittagsbetreuung' },
        ],
      },
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'grades',
      title: 'Grades/Classes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., ["1a", "5b", "11.2"]',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Grundschule (Primary)', value: 'grundschule' },
          { title: 'Sekundarstufe (Secondary)', value: 'sekundarstufe' },
          { title: 'Oberstufe (Upper)', value: 'oberstufe' },
          { title: 'DaF', value: 'daf' },
          { title: 'Sport', value: 'sport' },
          { title: 'Förderung (Support)', value: 'forderung' },
          { title: 'Bibliothek', value: 'bibliothek' },
          { title: 'Sozialpädagogik', value: 'sozialpaedagogik' },
          { title: 'Nachmittagsbetreuung', value: 'nachmittagsbetreuung' },
        ],
      },
    }),
    defineField({
      name: 'additionalRole',
      title: 'Additional Role',
      type: 'string',
      description: 'e.g., "DaF-Koordinator", "Oberstufenkoordinator"',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
});
