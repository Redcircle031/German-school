# WBS CMS - Deployment Guide

## Prerequisites

- Vercel account (https://vercel.com)
- PostgreSQL database (Vercel Postgres, Supabase, or self-hosted)
- Node.js 18+ installed locally

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Update .env with your database URL:
# DATABASE_URL="postgresql://user:password@host:5432/wbs_cms"

# Run database migrations
npx prisma migrate dev

# Seed the database
npm run db:seed

# Start development server
npm run dev
```

## Vercel Deployment Steps

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Link Project

```bash
cd /Users/brandsparkle/Desktop/German-school/my-app
vercel link
```

### 4. Set Environment Variables

In Vercel dashboard or via CLI:

```bash
vercel env add DATABASE_URL
# Enter your PostgreSQL connection string

vercel env add NEXTAUTH_SECRET
# Generate a random secret: openssl rand -base64 32

vercel env add NEXTAUTH_URL
# Enter: https://your-domain.vercel.app
```

### 5. Deploy

```bash
vercel --prod
```

Or push to GitHub and connect repository to Vercel.

## Database Setup on Vercel

### Option 1: Vercel Postgres (Recommended)

1. Go to Vercel Dashboard → Storage → Create Database
2. Select "Postgres"
3. Connect to your project
4. Environment variables will be auto-configured

### Option 2: Supabase

1. Create project at https://supabase.com
2. Get connection string from Settings → Database
3. Add to Vercel environment variables

### Option 3: Self-hosted

Ensure your database is accessible from Vercel's IP ranges.

## Post-Deployment

### Run Migrations

```bash
vercel --prod
# Then run:
vercel env pull
npx prisma migrate deploy
```

### Seed Initial Data

```bash
# Connect to your production database and run seed
DATABASE_URL="your-prod-url" npx prisma db seed
```

### Default Login

- Email: `admin@wbs.pl`
- Password: `admin123`

**Important:** Change the default password after first login!

## Troubleshooting

### Build Errors

1. Check that all environment variables are set
2. Ensure `prisma generate` runs before build
3. Verify database connection string format

### Database Connection Issues

1. Check firewall settings
2. Verify SSL mode in connection string
3. Test connection locally with the same URL

### Static Generation Errors

Some pages use dynamic data. The build should handle this, but if you see errors:

```bash
# Force dynamic rendering for specific pages
export const dynamic = 'force-dynamic'
```

## Production Checklist

- [ ] Change default admin password
- [ ] Set up proper NEXTAUTH_SECRET
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Configure backups for database
- [ ] Test all language routes (/pl, /de, /en)
- [ ] Verify old URL redirects work
- [ ] Test file uploads (if using S3/R2)

## Domain Configuration

### Custom Domain

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

### Environment Variables for Production

```
NEXTAUTH_URL=https://your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Support

For issues or questions:
- Check Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs
