import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton - only one document allowed
  groups: [
    { title: 'General', name: 'general' },
    { title: 'Contact', name: 'contact' },
    { title: 'Social Media', name: 'social' },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'siteNamePL',
      title: 'Site Name (Polish)',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'siteNameDE',
      title: 'Site Name (German)',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'siteNameEN',
      title: 'Site Name (English)',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'fax',
      title: 'Fax',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'emailGrades1_4',
      title: 'Email (Grades 1-4)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'emailGrades5_12',
      title: 'Email (Grades 5-12)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'regon',
      title: 'REGON',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'nip',
      title: 'NIP',
      type: 'string',
      group: 'contact',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});
