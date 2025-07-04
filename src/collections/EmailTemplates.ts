// src/collections/EmailTemplates.ts
import { CollectionConfig } from 'payload'

export const EmailTemplates: CollectionConfig = {
  slug: 'email-templates',
  admin: {
    useAsTitle: 'name',
    description: 'Manage email templates for the EmailSender.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Template name (e.g. "Offer Letter")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of when to use this template',
      },
    },
    {
      name: 'html',
      type: 'textarea',
      required: true,
      admin: {
        description: 'HTML content of the template. Use {{variableName}} for dynamic content.',
      },
    },
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Preview image of the template (optional)',
      },
    },
    {
      name: 'variables',
      type: 'array',
      admin: {
        description: 'List of variables used in this template',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Variable name (without {{ }})',
          },
        },
        {
          name: 'description',
          type: 'text',
          admin: {
            description: 'What this variable represents',
          },
        },
        {
          name: 'example',
          type: 'text',
          admin: {
            description: 'Example value',
          },
        },
      ],
    },
    {
      name: 'defaultSubject',
      type: 'text',
      admin: {
        description: 'Default subject line for emails using this template',
      },
    },
  ],
}