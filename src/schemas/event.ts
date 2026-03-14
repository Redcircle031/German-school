import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titlePL',
      title: 'Title (Polish)',
      type: 'string',
    }),
    defineField({
      name: 'titleDE',
      title: 'Title (German)',
      type: 'string',
    }),
    defineField({
      name: 'titleEN',
      title: 'Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionPL',
      title: 'Description (Polish)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionDE',
      title: 'Description (German)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionEN',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'locationPL',
      title: 'Location (Polish)',
      type: 'string',
    }),
    defineField({
      name: 'locationDE',
      title: 'Location (German)',
      type: 'string',
    }),
    defineField({
      name: 'locationEN',
      title: 'Location (English)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Event', value: 'wydarzenie' },
          { title: 'Competition', value: 'konkurs' },
          { title: 'Project', value: 'projekt' },
          { title: 'Open House', value: 'dzien-otwarty' },
          { title: 'Concert', value: 'koncert' },
          { title: 'Sports', value: 'sport' },
          { title: 'Holiday', value: 'ferie' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
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
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      media: 'mainImage',
    },
  },
});
