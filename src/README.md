# Faculty Professional Track Dashboard

A comprehensive, modern UI/UX dashboard for academic professionals to track, visualize, and grow their careers through skills, publications, and faculty development programs (FDPs).

## 🎯 Features

### Core Functionality
- **Dashboard Home**: Career progress visualization with animated metrics, achievement badges, and activity timeline
- **Skills Visualization**: Interactive D3.js radar chart showing current vs. target skill levels with personalized FDP recommendations
- **Publications Dashboard**: Beautiful D3.js bubble charts, timeline views, co-author networks, and publication analytics
- **FDP Calendar**: Track upcoming and completed faculty development programs with learning streaks
- **Career Roadmap**: Promotion readiness meter, career timeline, quarterly milestones, and AI-powered next steps

### Advanced Visualizations (D3.js)
- **Radar Chart**: Multi-dimensional skill profiling with interactive tooltips and smooth animations
- **Bubble Chart**: Citation-based publication visualization with size and color encoding
- **Network Graph**: Force-directed collaboration network showing co-author relationships

### Backend Architecture
- **PostgreSQL Database**: Supabase-powered backend with key-value storage
- **RESTful API**: Complete CRUD operations for publications, skills, FDPs, and career milestones
- **Real-time Analytics**: Dashboard analytics with H-index calculation and trend analysis
- **Demo Data Seeding**: One-click initialization with sample faculty data

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Motion/React** (Framer Motion) for fluid animations
- **D3.js v7** for advanced data visualizations
- **Recharts** for chart components
- **Tailwind CSS v4.0** for styling
- **Lucide React** for icons

### Backend
- **Supabase** (PostgreSQL database)
- **Deno** runtime for edge functions
- **Hono** web framework for API routing
- **Key-Value Store** for flexible data storage

## 🚀 Getting Started

### Prerequisites
- Supabase account (already connected)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Load Demo Data**
   - On first launch, you'll see a welcome modal
   - Click "Load Demo Data" to populate the dashboard with sample data
   - This creates sample publications, skills, FDPs, and career milestones

2. **Navigate the Dashboard**
   - Use the left sidebar to switch between views
   - Click on Home, Skills, Publications, FDP, or Career icons
   - Hover over elements to see interactive tooltips

### API Endpoints

The backend provides the following REST endpoints:

#### Faculty Profile
- `GET /make-server-936dcc19/faculty/profile` - Get faculty profile
- `PUT /make-server-936dcc19/faculty/profile` - Update faculty profile

#### Publications
- `GET /make-server-936dcc19/publications` - Get all publications
- `POST /make-server-936dcc19/publications` - Create new publication
- `DELETE /make-server-936dcc19/publications/:id` - Delete publication

#### Skills
- `GET /make-server-936dcc19/skills` - Get skill data
- `PUT /make-server-936dcc19/skills` - Update skills

#### FDPs
- `GET /make-server-936dcc19/fdps` - Get FDP data
- `POST /make-server-936dcc19/fdps/enroll` - Enroll in FDP
- `POST /make-server-936dcc19/fdps/:id/complete` - Mark FDP as completed

#### Career & Analytics
- `GET /make-server-936dcc19/career/milestones` - Get career milestones
- `POST /make-server-936dcc19/career/milestones` - Create milestone
- `GET /make-server-936dcc19/analytics/dashboard` - Get dashboard analytics

#### Utilities
- `POST /make-server-936dcc19/seed-demo-data` - Seed demo data
- `GET /make-server-936dcc19/health` - Health check

## 📊 Data Models

### Publication
```typescript
{
  id: string;
  year: number;
  title: string;
  venue: string;
  citations: number;
  impact: number;
  tier: 'top' | 'high' | 'medium';
  coAuthors: string[];
  createdAt: string;
}
```

### Skill
```typescript
{
  skill: string;
  current: number; // 0-100
  target: number;  // 0-100
}
```

### FDP
```typescript
{
  id: string;
  title: string;
  category: string;
  duration: string;
  dates: string;
  location: string;
  status: 'enrolled' | 'completed';
  certificate?: boolean;
  skills?: string[];
}
```

## 🎨 Design System

### Color Palette
- **Background**: `#0F1419` (Deep Navy)
- **Surface**: `#16213E` (Navy Blue)
- **Accent 1**: `#00D9FF` (Teal) - CTAs and highlights
- **Accent 2**: `#FFB703` (Gold) - Achievements
- **Success**: `#00B894` (Green)
- **Warning**: `#FFA500` (Orange)
- **Purple**: `#9D4EDD` (Skills/Progress)

### Typography
- **Font Family**: Inter (default)
- **Monospace**: For numbers and data (Monaco/JetBrains Mono)
- **Headlines**: 32-40px, Bold
- **Body**: 14-16px, Regular
- **Captions**: 12-13px

### Animations
- **Page Transitions**: 200ms fade with ease-out
- **Hover Effects**: 200ms scale/lift transformations
- **Data Loading**: Skeleton screens with shimmer effect
- **Chart Animations**: Staggered entrance (50-100ms delays)

## 🔒 Security Considerations

This is a **prototype/demo application**. For production use:

1. **Never store sensitive PII** without proper encryption
2. **Implement proper authentication** (Supabase Auth is available)
3. **Add authorization** for multi-tenant scenarios
4. **Use environment variables** for API keys
5. **Enable RLS** (Row Level Security) in Supabase
6. **Add input validation** and sanitization
7. **Implement rate limiting** on API endpoints

## 🚧 Future Enhancements

### Phase 1 (MVP Complete) ✅
- [x] Core dashboard with 5 main views
- [x] D3.js visualizations (Radar, Bubble, Network)
- [x] Backend API with PostgreSQL
- [x] Demo data seeding
- [x] Responsive design

### Phase 2 (Coming Soon)
- [ ] Multi-user authentication with Supabase Auth
- [ ] Real-time collaboration features
- [ ] Export to PDF/CV functionality
- [ ] Advanced filtering and search
- [ ] Email notifications for FDP deadlines
- [ ] Integration with Google Scholar API
- [ ] Mobile app (React Native)

### Phase 3 (Advanced)
- [ ] AI-powered recommendations (GPT-4 integration)
- [ ] Peer comparison with anonymization
- [ ] Department-level analytics dashboard
- [ ] Grant tracking and funding analytics
- [ ] Conference submission tracker
- [ ] Teaching evaluation integration

## 📝 API Usage Example

```typescript
import { apiClient } from './utils/api';

// Get publications
const publications = await apiClient.getPublications();

// Create a new publication
const newPub = await apiClient.createPublication({
  year: 2024,
  title: 'My Research Paper',
  venue: 'Top Conference',
  citations: 0,
  impact: 4.5,
  tier: 'top',
  coAuthors: ['Dr. Smith', 'Dr. Jones']
});

// Update skills
await apiClient.updateSkills([
  { skill: 'Research', current: 85, target: 95 },
  { skill: 'Teaching', current: 80, target: 90 }
]);

// Get analytics
const analytics = await apiClient.getDashboardAnalytics();
console.log(`H-Index: ${analytics.metrics.hIndex}`);
```

## 🐛 Troubleshooting

### Data Not Loading
1. Check browser console for errors
2. Verify Supabase connection (see Supabase dashboard)
3. Try clicking "Load Demo Data" again
4. Clear browser cache and reload

### Visualizations Not Rendering
1. Ensure D3.js is loaded (check network tab)
2. Check for JavaScript errors in console
3. Try resizing the window to trigger re-render
4. Verify data format matches expected schema

### API Errors
1. Check Authorization header is set correctly
2. Verify API endpoint URLs match your Supabase project
3. Check Supabase logs for server-side errors
4. Ensure demo data has been seeded

## 📄 License

This is a prototype application built for demonstration purposes.

## 🤝 Contributing

This is a demo project. For modifications:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Support

For issues or questions:
- Check the troubleshooting section above
- Review the API documentation
- Check browser console for errors
- Verify Supabase connection status

---

**Built with ❤️ for Faculty Members Worldwide**

Empowering academic professionals to visualize their career growth and achieve their promotion goals.
