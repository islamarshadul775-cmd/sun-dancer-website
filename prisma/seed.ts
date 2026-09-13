import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create Restaurant
  const restaurant = await prisma.restaurant.upsert({
    where: { id: "sun-dancer-main" },
    update: {},
    create: {
      id: "sun-dancer-main",
      name: "Sun Dancer Cafe & Restaurant",
      description:
        "Coastal dining on Marine Drive Road, Cox's Bazar — fresh seafood, regional flavours, and sunset views.",
      address: "Marine Drive Road, Cox's Bazar, Bangladesh",
      phone: "+880 1XXXXXXXXX",
      email: "hello@sundancercafe.example",
      whatsapp: "8801XXXXXXXXX",
      facebook: "https://facebook.com/sundancercafe",
      instagram: "https://instagram.com/sundancercafe",
      latitude: 21.4272,
      longitude: 92.0058,
      timezone: "Asia/Dhaka",
    },
  });

  // Opening Hours
  const hours = [
    { weekday: 0, openTime: "12:00", closeTime: "22:30" },
    { weekday: 1, openTime: "12:00", closeTime: "22:30" },
    { weekday: 2, openTime: "12:00", closeTime: "22:30" },
    { weekday: 3, openTime: "12:00", closeTime: "22:30" },
    { weekday: 4, openTime: "12:00", closeTime: "23:30" },
    { weekday: 5, openTime: "12:00", closeTime: "23:30" },
    { weekday: 6, openTime: "12:00", closeTime: "23:30" },
  ];

  for (const h of hours) {
    await prisma.openingHour.upsert({
      where: {
        restaurantId_weekday: {
          restaurantId: restaurant.id,
          weekday: h.weekday,
        },
      },
      update: {},
      create: {
        restaurantId: restaurant.id,
        isOpen: true,
        ...h,
      },
    });
  }

  // Menu Categories
  const categories = [
    { name: "Seafood", slug: "seafood", sortOrder: 1 },
    { name: "Bangla", slug: "bangla", sortOrder: 2 },
    { name: "Asian", slug: "asian", sortOrder: 3 },
    { name: "Rice", slug: "rice", sortOrder: 4 },
    { name: "Starters", slug: "starters", sortOrder: 5 },
    { name: "Drinks", slug: "drinks", sortOrder: 6 },
    { name: "Desserts", slug: "desserts", sortOrder: 7 },
  ];

  const catRecords: Record<string, string> = {};
  for (const c of categories) {
    const rec = await prisma.menuCategory.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
    catRecords[c.slug] = rec.id;
  }

  // Menu Items
  const items = [
    {
      slug: "bbq-red-snapper",
      name: "BBQ Red Snapper",
      description: "Whole snapper, chargrilled, coastal spice rub.",
      price: 650,
      category: "seafood",
      popular: true,
      imageUrl: "/images/placeholder-seafood-1.jpg",
    },
    {
      slug: "mixed-seafood-platter",
      name: "Mixed Seafood Platter",
      description: "A generous shared platter — grilled and fried, for two.",
      price: 1450,
      category: "seafood",
      popular: true,
      imageUrl: "/images/placeholder-seafood-2.jpg",
    },
    {
      slug: "prawn-curry",
      name: "Prawn Curry",
      description: "Bay of Bengal prawns, slow-cooked in home-style curry.",
      price: 590,
      category: "seafood",
      imageUrl: "/images/placeholder-seafood-3.jpg",
    },
    {
      slug: "rupchanda-curry",
      name: "Rupchanda Curry",
      description: "Silver pomfret, mustard-forward Bangla curry.",
      price: 590,
      category: "bangla",
      popular: true,
      imageUrl: "/images/placeholder-bangla-1.jpg",
    },
    {
      slug: "thick-daal-and-bhorta",
      name: "Thick Daal & Bhorta",
      description: "Slow-cooked lentils with a plate of mashed sides.",
      price: 280,
      category: "bangla",
      imageUrl: "/images/placeholder-bangla-2.jpg",
    },
    {
      slug: "seafood-fried-rice",
      name: "Seafood Fried Rice",
      description: "Prawns, squid, egg, spring onion.",
      price: 420,
      category: "rice",
      imageUrl: "/images/placeholder-rice-1.jpg",
    },
    {
      slug: "chicken-satay",
      name: "Chicken Satay",
      description: "Grilled skewers, peanut sauce.",
      price: 350,
      category: "asian",
      imageUrl: "/images/placeholder-asian-1.jpg",
    },
    {
      slug: "prawn-tempura",
      name: "Prawn Tempura",
      description: "Crisp-fried prawns, tamarind dip.",
      price: 390,
      category: "starters",
      imageUrl: "/images/placeholder-starter-1.jpg",
    },
    {
      slug: "fresh-pineapple-juice",
      name: "Fresh Pineapple Juice",
      description: "Pressed to order, no syrup added.",
      price: 180,
      category: "drinks",
      popular: true,
      imageUrl: "/images/placeholder-drink-1.jpg",
    },
    {
      slug: "watermelon-lemon-juice",
      name: "Watermelon Lemon Juice",
      description: "Fresh watermelon with a citrus twist.",
      price: 180,
      category: "drinks",
      imageUrl: "/images/placeholder-drink-2.jpg",
    },
    {
      slug: "coconut-malpua",
      name: "Coconut Malpua",
      description: "Warm coconut pancakes, date syrup.",
      price: 260,
      category: "desserts",
      imageUrl: "/images/placeholder-dessert-1.jpg",
    },
  ];

  for (const item of items) {
    const { category, ...rest } = item;
    await prisma.menuItem.upsert({
      where: { slug: item.slug },
      update: {},
      create: { ...rest, categoryId: catRecords[category] },
    });
  }

  // Gallery Images
  const galleryCategories = [
    "exterior",
    "interior",
    "food",
    "seafood",
    "drinks",
    "sunset",
    "events",
  ];
  let i = 0;
  for (const cat of galleryCategories) {
    for (let n = 1; n <= 2; n++) {
      i++;
      await prisma.galleryImage.create({
        data: {
          imageUrl: `/images/placeholder-gallery-${cat}-${n}.jpg`,
          category: cat,
          caption: null,
          sortOrder: i,
        },
      });
    }
  }

  // Offers
  await prisma.offer.create({
    data: {
      title: "Sunset Seafood Platter",
      description:
        "A shared platter for two, best enjoyed as the sun sets over Marine Drive.",
      imageUrl: "/images/placeholder-offer-1.jpg",
      discount: "Fixed price BDT 1,450",
      active: true,
    },
  });

  // Default Admin
  await prisma.admin.upsert({
    where: { email: "admin@sundancercafe.example" },
    update: {},
    create: {
      email: "admin@sundancercafe.example",
      passwordHash: await bcrypt.hash("ChangeMe123!", 12),
      role: "OWNER",
    },
  });

  console.log("✅ Seed complete!");
  console.log("📝 Default admin credentials:");
  console.log("   Email: admin@sundancercafe.example");
  console.log("   Password: ChangeMe123!");
  console.log("⚠️  CHANGE THIS PASSWORD IMMEDIATELY!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
