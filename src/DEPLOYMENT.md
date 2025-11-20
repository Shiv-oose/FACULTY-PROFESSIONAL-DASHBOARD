# Faculty Pro Track - Deployment & Testing Guide

## ✅ Fixed Issues

### D3.js Import Errors
- **Problem**: `npm:d3@7` syntax was causing errors
- **Solution**: Changed all D3.js imports to use `import * as d3 from 'd3'`
- **Affected Files**:
  - `/components/D3NetworkGraph.tsx`
  - `/components/D3BubbleChart.tsx`
  - `/components/D3RadarChart.tsx`

### Backend Import Errors
- **Problem**: Hono imports using `npm:` prefix
- **Solution**: Changed to direct imports: `import { Hono } from 'hono'`
- **Affected File**: `/supabase/functions/server/index.tsx`

### Supabase Import
- **Solution**: Changed to `jsr:@supabase/supabase-js@2` for Deno compatibility

## 🚀 Testing Instructions

### 1. Backend Health Check
The backend should automatically start. Test it by checking the health endpoint:
```
GET https://{projectId}.supabase.co/functions/v1/make-server-936dcc19/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-11-20T..."
}
```

### 2. Initialize Demo Data
1. Open the application
2. You should see a welcome modal
3. Click "Load Demo Data"
4. Wait for the success message
5. The modal should automatically close after 2 seconds

### 3. Test Each Dashboard View

#### Home Dashboard
- ✅ Animated progress ring (78%)
- ✅ 4 metric cards with icons
- ✅ Achievement badges
- ✅ Recent activity timeline

#### Skills Visualization
- ✅ D3.js radar chart with 6 axes
- ✅ Interactive hover tooltips showing current/target/gap
- ✅ Progress bars for each skill
- ✅ FDP recommendations

#### Publications Dashboard
- ✅ Timeline view with bubbles
- ✅ Toggle to D3.js bubble chart
- ✅ Hover tooltips with citation counts
- ✅ Yearly trend chart

#### FDP Calendar
- ✅ Upcoming vs Completed tabs
- ✅ Mini calendar
- ✅ Learning streak tracker
- ✅ Category distribution

#### Career Roadmap
- ✅ Promotion readiness meter
- ✅ Career timeline visualization
- ✅ Quarterly milestones
- ✅ AI-suggested next steps

## 🔍 Debugging Tips

### If Backend Returns 401 Unauthorized
The backend requires authentication. The demo initializer should handle this, but if you see 401 errors:
1. Check that `publicAnonKey` is being used in API requests
2. Verify the Supabase connection is active
3. Check browser console for error messages

### If D3 Visualizations Don't Render
1. Open browser DevTools Console
2. Look for D3.js import errors
3. Check that data is being passed correctly to components
4. Verify SVG elements are being created in DOM

### If Data Doesn't Persist
1. Check that demo data was seeded successfully
2. Look at Network tab to verify API calls
3. Check Supabase logs for backend errors
4. Verify KV store operations are working

## 📊 Data Flow

```
User Action
    ↓
Frontend (React)
    ↓
API Client (/utils/api.ts)
    ↓
Supabase Edge Function (Hono Server)
    ↓
KV Store (PostgreSQL)
    ↓
Response back to Frontend
    ↓
D3.js Visualizations Update
```

## 🎨 D3.js Features

### Radar Chart (`D3RadarChart.tsx`)
- **Interactive**: Hover over skill wedges for detailed tooltips
- **Animations**: Staggered entrance with 800ms delay
- **Data Points**: Shows current level with glowing circles
- **Dual Display**: Target (dashed line) and Current (filled area)

### Bubble Chart (`D3BubbleChart.tsx`)
- **Size Encoding**: Bubble size represents citation count
- **Color Encoding**: Color represents publication tier (top/high/medium)
- **Animations**: Entrance animation with 1000ms duration
- **Interactive**: Click bubbles to select, hover for details

### Network Graph (`D3NetworkGraph.tsx`)
- **Force Simulation**: Physics-based layout
- **Draggable**: Nodes can be dragged to rearrange
- **Zoom/Pan**: Supports zoom and pan interactions
- **Hover Effects**: Highlights connected collaborations

## 🔐 Security Notes

**IMPORTANT**: This is a prototype application. Before production use:

1. **Authentication**: Currently using public anon key
   - Implement proper user signup/login
   - Use Supabase Auth properly
   - Store session tokens securely

2. **Authorization**: Backend checks for user tokens
   - Ensure RLS policies are enabled
   - Validate all user inputs
   - Implement rate limiting

3. **Data Validation**:
   - Add schema validation (Zod)
   - Sanitize user inputs
   - Validate file uploads (if added)

4. **Environment Variables**:
   - Never expose SUPABASE_SERVICE_ROLE_KEY to frontend
   - Use environment-specific configs
   - Rotate keys regularly

## 📈 Performance Considerations

### D3.js Optimizations
- ✅ Proper cleanup in useEffect return functions
- ✅ Tooltip removal on unmount
- ✅ Simulation stops on cleanup
- ✅ Conditional rendering (data.length > 0)

### Backend Optimizations
- ✅ Promise.all for parallel data fetching
- ✅ Minimal data transformation
- ✅ Efficient H-index calculation
- ✅ Indexed key-value lookups

### Future Optimizations
- [ ] Add React.memo for expensive components
- [ ] Implement virtual scrolling for large lists
- [ ] Cache API responses with SWR or React Query
- [ ] Add service worker for offline support
- [ ] Optimize D3 re-renders with dependency arrays

## 🐛 Known Issues & Limitations

1. **No Real Authentication**: Uses public anon key for demo
2. **No Data Validation**: Backend doesn't validate input schemas
3. **No Error Boundaries**: Add React error boundaries for production
4. **No Loading States**: Some views lack skeleton screens
5. **Limited Mobile Testing**: Optimize for smaller screens
6. **No Search/Filter**: Add search functionality for publications
7. **No Export**: Add PDF/CSV export capabilities

## 📝 API Testing with cURL

### Seed Demo Data
```bash
curl -X POST \
  'https://{projectId}.supabase.co/functions/v1/make-server-936dcc19/seed-demo-data' \
  -H 'Authorization: Bearer {publicAnonKey}' \
  -H 'Content-Type: application/json'
```

### Get Publications
```bash
curl -X GET \
  'https://{projectId}.supabase.co/functions/v1/make-server-936dcc19/publications' \
  -H 'Authorization: Bearer {publicAnonKey}'
```

### Get Skills
```bash
curl -X GET \
  'https://{projectId}.supabase.co/functions/v1/make-server-936dcc19/skills' \
  -H 'Authorization: Bearer {publicAnonKey}'
```

## 🎯 Success Criteria

Your deployment is successful if:
- ✅ Welcome modal appears on first load
- ✅ Demo data loads without errors
- ✅ All 5 dashboard views render correctly
- ✅ D3.js visualizations are interactive
- ✅ Hover tooltips work on all charts
- ✅ No console errors
- ✅ Data persists across page refreshes
- ✅ Animations are smooth (60fps)
- ✅ Responsive on different screen sizes

## 🚦 Next Steps

1. **Test the Application**: Follow testing instructions above
2. **Explore Features**: Try all 5 dashboard views
3. **Check Console**: Verify no errors
4. **Test Interactions**: Hover, click, drag D3 elements
5. **Verify Persistence**: Refresh and check data remains

---

**Built with ❤️ using React, D3.js, Supabase, and Tailwind CSS**
