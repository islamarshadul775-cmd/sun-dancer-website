# Sun Dancer Cafe & Restaurant - Website

🌅 **Premium Coastal Dining Experience Website**

A luxurious, high-performance Next.js website for Sun Dancer Cafe & Restaurant with menu management, reservations system, gallery, and admin dashboard.

## ✨ Features

### Public Site
- **Home Page** - Stunning hero section with parallax scrolling and animations
- **Premium Menu** - Dynamic menu with categories, filtering, and pricing
- **Gallery** - Beautiful image gallery with responsive grid layout
- **Experience Page** - Showcase restaurant ambiance and values
- **Special Offers** - Limited time deals and promotions
- **Reservation System** - WhatsApp integration for bookings
- **Contact Page** - Google Maps embed, contact info, and social links

### Admin Dashboard
- **Authentication** - Secure JWT-based login
- **Dashboard Overview** - Key statistics and metrics
- **Reservations Management** - View and manage all bookings
- **Menu Management** - Add/edit/delete menu items and categories
- **Gallery Management** - Upload and organize gallery images
- **Offers Management** - Create and manage special offers
- **Settings** - Restaurant information and opening hours

### Technical Features
- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** with custom theme and animations
- 🗄️ **PostgreSQL + Prisma** for type-safe database access
- 🔐 **JWT Authentication** with secure session management
- 📱 **Fully Responsive** - Desktop, tablet, and mobile optimized
- 🎬 **Advanced Animations** - Fade-in, slide-in, parallax effects
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema
- 💰 **Monetization Ready** - Ad banners and sponsored sections
- ⚡ **Fast Loading** - Image optimization, code splitting, caching

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Supabase, Neon, Railway, or local)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/islamarshadul775-cmd/sun-dancer-website.git
   cd sun-dancer-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and other values
   ```

4. **Setup database**
   ```bash
   npx prisma migrate dev --name init
   npm run seed
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` for the public site and `http://localhost:3000/admin/login` for the admin dashboard.

## 🔐 Default Admin Credentials

- **Email**: `admin@sundancercafe.example`
- **Password**: `ChangeMe123!`

⚠️ **IMPORTANT**: Change this password immediately after first login!

## 📁 Project Structure

```
sun-dancer-website/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── page.tsx           # Home page
│   │   ├── menu/              # Menu pages
│   │   ├── gallery/           # Gallery pages
│   │   ├── reservation/       # Reservation booking
│   │   ├── experience/        # Experience showcase
│   │   ├── offers/            # Special offers
│   │   ├── contact/           # Contact page
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/             # Reusable components
│   │   ├── Navigation.tsx     # Top navigation
│   │   └── Footer.tsx         # Footer with ads
│   ├── lib/                    # Utilities
│   │   ├── prisma.ts         # Database client
│   │   ├── auth.ts           # Authentication
│   │   ├── utils.ts          # Helper functions
│   │   └── opening-hours.ts  # Business hours logic
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed script
├── public/
│   └── images/                # Restaurant photos
├── .env.example               # Environment template
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript config
└── README.md                  # This file
```

## 🎨 Customization

### Add Real Photos

1. Drop your images into `public/images/` with these names:
   - `placeholder-hero.jpg` - Hero background
   - `placeholder-interior.jpg` - Dining room
   - `placeholder-exterior.jpg` - Exterior view
   - `placeholder-dish.jpg` - Dish fallback
   - `placeholder-og.jpg` - Social media preview (1200x630)
   - `placeholder-sunset.jpg` - Sunset view
   - `placeholder-gallery-*.jpg` - Gallery images

2. Update menu items and offers via the admin dashboard

### Customize Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  ocean: {
    deep: "#0A2A3B",
    DEFAULT: "#123B52",
    light: "#2C6B8A",
  },
  sunset: {
    DEFAULT: "#E2723A",
    gold: "#E8A94F",
  },
  // ... more colors
}
```

### Add Monetization

The footer has a floating ad banner. Customize it in `src/components/Footer.tsx`:

```typescript
{/* Floating Ad Banner */}
<div className="fixed bottom-4 right-4 z-40 bg-sunset rounded-lg shadow-2xl p-4">
  {/* Customize ad content */}
</div>
```

## 📊 Database Schema

### Core Tables
- **Restaurant** - Main restaurant info
- **OpeningHour** - Weekly operating hours
- **MenuCategory** - Food categories
- **MenuItem** - Individual menu items
- **GalleryImage** - Gallery photos
- **Offer** - Special promotions
- **Reservation** - Customer bookings
- **Admin** - Admin users
- **Order** - Future online orders (prepared)

## 🔗 API Endpoints

### Public
- `GET /api/menu` - Get all menu categories and items
- `GET /api/gallery` - Get all gallery images
- `POST /api/reservations` - Create a new reservation

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `POST /api/admin/logout` - Admin logout

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Deploy to Other Platforms

#### Railway
```bash
railway link
railway deploy
```

#### Render
1. Connect your GitHub repo
2. Add environment variables
3. Deploy from Render dashboard

## 🔑 Environment Variables

Required variables:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/sun_dancer"

# Admin
ADMIN_SESSION_SECRET="generate-with-openssl-rand-base64-32"

# Restaurant (optional, can edit via admin)
NEXT_PUBLIC_RESTAURANT_NAME="Sun Dancer Cafe & Restaurant"
NEXT_PUBLIC_RESTAURANT_PHONE="+880 173 737373"
NEXT_PUBLIC_RESTAURANT_EMAIL="info@sundancer.com"
NEXT_PUBLIC_RESTAURANT_WHATSAPP="8801737373"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
```

## 📧 Email Notifications (TODO)

The reservation system currently saves to database. To add email/WhatsApp notifications:

1. Update `src/app/api/reservations/route.ts`
2. Add your email service (Resend, SendGrid, etc.)
3. Add WhatsApp API (Twilio, MessageBird, etc.)

## 🌐 SEO Optimization

- ✅ Meta tags and descriptions
- ✅ Open Graph for social sharing
- ✅ JSON-LD structured data
- ✅ Sitemap and robots.txt
- ✅ Mobile optimization
- ✅ Fast Core Web Vitals

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database connection issues
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running
- Ensure network access is allowed

### Images not loading
- Verify files are in `public/images/`
- Check image paths in code match filenames
- Ensure image file extensions are lowercase

## 📝 License

This project is proprietary to Sun Dancer Cafe & Restaurant.

## 📞 Support

For questions or issues, contact the development team.

---

**Built with ❤️ for Sun Dancer Cafe & Restaurant**

✨ **Website Features in 1 Million**: Premium animations, luxury design, fast performance, monetization-ready, fully responsive, SEO optimized, admin dashboard, WhatsApp integration, real-time data, and much more!
