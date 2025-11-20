# Login Credentials - RNTU Faculty Pro Track Dashboard

## Rabindranath Tagore University (RNTU)

This Faculty Professional Track Dashboard includes role-based authentication with separate login credentials for Faculty and Admin users.

---

## Faculty Login

**Purpose:** Access personal professional development dashboard, track publications, skills, and career growth

**Credentials:**
- **Email:** `faculty@rntu.edu.in`
- **Password:** `RNTU@Faculty2024`
- **User Profile:** Dr. Priya Sharma, Computer Science & Engineering

**Features Available:**
- Personal Dashboard with career progress visualization
- Skills radar chart with gap analysis
- Publications timeline with citation metrics
- FDP Calendar with enrollment and recommendations
- Career Roadmap with promotion readiness tracking

---

## Admin Login

**Purpose:** Manage faculty members, review analytics, approve FDP enrollments, and oversee institutional progress

**Credentials:**
- **Email:** `admin@rntu.edu.in`
- **Password:** `RNTU@Admin2024`
- **User Profile:** Prof. Rajesh Kumar, Head of Administration

**Features Available:**
- Admin Dashboard with institutional metrics
- Faculty management overview
- Pending approvals for FDP enrollments
- Recent activity monitoring
- Top performing faculty rankings
- Publication and FDP analytics

---

## How to Use

1. **Launch the Application:** Open the Faculty Pro Track Dashboard
2. **Select Your Role:** Choose either "Login as Faculty" or "Login as Admin"
3. **Enter Credentials:** Use the credentials listed above for your selected role
4. **Access Dashboard:** Upon successful login, you'll be redirected to your role-specific dashboard

---

## Key Differences

### Faculty View
- Personalized career tracking
- Individual skill development
- Self-service publication management
- FDP enrollment and tracking
- Career milestone planning

### Admin View
- Institution-wide analytics
- Multi-faculty oversight
- Approval workflows
- Performance benchmarking
- Resource allocation insights
- **Faculty Management:** Add, edit, and manage faculty members
- **Email Notifications:** Automatically send credentials to new faculty

---

## New Feature: Faculty Management (Admin)

### Admin Can Add Faculty Members

When logged in as Admin, you can:
1. Navigate to "Faculty Management" (Users icon in sidebar)
2. Click "Add Faculty" button
3. Fill in faculty details:
   - Full Name (e.g., Dr. Priya Sharma)
   - Email Address (their Gmail or any email)
   - Department
   - Position
   - Joining Date
4. Click "Add Faculty & Send Credentials"

### Automatic Credential Generation

The system automatically:
- ✅ Generates username based on name (e.g., priya.sharma@rntu.edu.in)
- ✅ Creates secure password (e.g., RNTU@ABC123)
- ✅ Stores faculty in database
- ✅ **Sends credentials via email** to the faculty's Gmail account

### Email Notification

Faculty members receive a professional email containing:
- Welcome message
- Login credentials (username & password)
- Dashboard features overview
- Direct login link

**Note:** Email feature requires RESEND_API_KEY. See EMAIL_SETUP_GUIDE.md for setup instructions.

---

## Security Notes

- Demo credentials are displayed on the login page for ease of testing
- In production, these would be replaced with secure authentication via Supabase
- Each role has access to different features and data views
- All data is isolated and persists per user session

---

## Technical Implementation

- **Authentication:** Role-based authentication with secure credential validation
- **UI Framework:** React with Motion for smooth animations
- **Styling:** Tailwind CSS with custom glassmorphism effects
- **Backend:** Supabase with PostgreSQL for data persistence
- **Design System:** Dark mode with navy/teal/purple color palette

---

**University:** Rabindranath Tagore University  
**System:** Faculty Professional Track Dashboard  
**Version:** 1.0  
**Last Updated:** 2024