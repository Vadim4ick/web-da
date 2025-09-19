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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
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
  collections: [Users, Media, Cases],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
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
