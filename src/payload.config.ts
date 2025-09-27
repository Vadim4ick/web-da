import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { ru } from '@payloadcms/translations/languages/ru'

import { Users } from './shared/collections/Users'
import { Media } from './shared/collections/Media'
import { Cases } from './shared/collections/Cases'
import { About } from './shared/collections/About'
import { Services } from './shared/collections/Services'

import dotenv from 'dotenv'
import { Banner } from './shared/collections/Banner'

dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,

    importMap: {
      baseDir: path.resolve(dirname),
    },

    components: {
      graphics: {
        Logo: '@/app/(payload)/components/Logo.tsx',
      },
    },

    meta: {
      titleSuffix: '- Web da (Admin)',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ],
    },
  },
  i18n: {
    fallbackLanguage: 'ru',
    supportedLanguages: { en, ru },
  },

  localization: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  collections: [Users, Media, Cases, Services, Banner],
  globals: [About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    push: process.env.NODE_ENV !== 'production',
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
