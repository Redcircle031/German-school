import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@wbs.pl' },
    update: {},
    create: {
      email: 'admin@wbs.pl',
      name: 'Administrator',
      password: adminPassword,
      role: 'ADMIN',
      isActive: true,
    },
  })
  console.log('Admin user created:', admin.email)

  // Create categories
  const categories = [
    { slug: 'aktualnosci', namePl: 'Aktualności', nameDe: 'Aktuelles', nameEn: 'News', sortOrder: 1 },
    { slug: 'osiagniecia', namePl: 'Osiągnięcia', nameDe: 'Erfolge', nameEn: 'Achievements', sortOrder: 2 },
    { slug: 'wydarzenia', namePl: 'Wydarzenia', nameDe: 'Veranstaltungen', nameEn: 'Events', sortOrder: 3 },
    { slug: 'ogloszenia', namePl: 'Ogłoszenia', nameDe: 'Mitteilungen', nameEn: 'Announcements', sortOrder: 4 },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }
  console.log('Categories created')

  // Create sample article
  const category = await prisma.category.findUnique({
    where: { slug: 'aktualnosci' }
  })

  if (category) {
    await prisma.article.upsert({
      where: { slug: 'witamy-na-nowej-stronie' },
      update: {},
      create: {
        slug: 'witamy-na-nowej-stronie',
        titlePl: 'Witamy na nowej stronie WBS!',
        titleDe: 'Willkommen auf der neuen WBS-Website!',
        contentPl: '<p>Witamy na nowej stronie internetowej szkoły WBS. Mamy nadzieję, że nowy design i funkcjonalności przypadną Wam do gustu.</p><p>Zapraszamy do regularnego odwiedzania naszej strony i śledzenia aktualności.</p>',
        contentDe: '<p>Willkommen auf der neuen Website der WBS-Schule. Wir hoffen, dass Ihnen das neue Design und die Funktionalität gefallen.</p><p>Wir laden Sie ein, unsere Website regelmäßig zu besuchen und die Neuigkeiten zu verfolgen.</p>',
        excerptPl: 'Witamy na nowej stronie internetowej szkoły WBS. Zapraszamy do śledzenia aktualności!',
        categoryId: category.id,
        authorId: admin.id,
        createdById: admin.id,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        seoTitlePl: 'Witamy na nowej stronie WBS!',
        seoDescPl: 'Witamy na nowej stronie internetowej szkoły WBS',
      },
    })
    console.log('Sample article created')
  }

  // Create navigation items
  const navItems = [
    { labelPl: 'Strona główna', labelDe: 'Startseite', labelEn: 'Home', url: '/', position: 'HEADER' as const, sortOrder: 1 },
    { labelPl: 'O szkole', labelDe: 'Über die Schule', labelEn: 'About School', url: '/o-szkole', position: 'HEADER' as const, sortOrder: 2 },
    { labelPl: 'Aktualności', labelDe: 'Aktuelles', labelEn: 'News', url: '/aktualnosci', position: 'HEADER' as const, sortOrder: 3 },
    { labelPl: 'Osiągnięcia', labelDe: 'Erfolge', labelEn: 'Achievements', url: '/osiagniecia', position: 'HEADER' as const, sortOrder: 4 },
    { labelPl: 'Kontakt', labelDe: 'Kontakt', labelEn: 'Contact', url: '/kontakt', position: 'HEADER' as const, sortOrder: 5 },
  ]

  for (const item of navItems) {
    await prisma.navigationItem.upsert({
      where: { 
        id: `${item.sortOrder}` 
      },
      update: {},
      create: item,
    })
  }
  console.log('Navigation items created')

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
