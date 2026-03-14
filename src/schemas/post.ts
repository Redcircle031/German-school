import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'News Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptPL',
      title: 'Excerpt (Polish)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptDE',
      title: 'Excerpt (German)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptEN',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Current Events', value: 'aktualne-wydarzenia' },
          { title: 'Upcoming Events', value: 'nadchodzace-wydarzenia' },
          { title: 'Achievements', value: 'osiagniecia' },
          { title: 'Announcements', value: 'ogloszenia' },
          { title: 'General', value: 'ogolne' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'person' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
});

// Portable Text Block Content
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          { name: 'link', title: 'URL', type: 'object', fields: [
            { name: 'href', title: 'URL', type: 'url' }
          ]},
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
});
