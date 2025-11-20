# Admin Quick Start Guide

## 🎯 Quick Actions for Administrators

### 1️⃣ Login as Admin

```
Email: admin@rntu.edu.in
Password: RNTU@Admin2024
```

---

### 2️⃣ Add New Faculty Member

**Steps:**
1. Click **"Faculty"** icon (Users) in sidebar
2. Click **"Add Faculty"** button
3. Fill in the form:

| Field | Example | Required |
|-------|---------|----------|
| Full Name | Dr. Priya Sharma | ✅ Yes |
| Email | priya.sharma@gmail.com | ✅ Yes |
| Department | Computer Science & Engineering | ✅ Yes |
| Position | Associate Professor | ✅ Yes |
| Joining Date | 2024-11-20 | ✅ Yes |

4. Click **"Add Faculty & Send Credentials"**

---

### 3️⃣ What Happens Automatically

✅ **Username Created:** priya.sharma@rntu.edu.in  
✅ **Password Generated:** RNTU@ABC123  
✅ **Email Sent:** To priya.sharma@gmail.com  
✅ **Faculty Record:** Stored in database  
✅ **Dashboard Access:** Faculty can login immediately  

---

### 4️⃣ Email Contains

📧 **Professional Welcome Email** with:
- University branding
- Login credentials (username + password)
- Dashboard features overview
- Direct login link
- Security reminder

---

### 5️⃣ Faculty Dashboard Features

Once faculty logs in, they can:
- ✅ Track publications and citations
- ✅ Monitor skill development with radar charts
- ✅ Enroll in Faculty Development Programs
- ✅ Plan career progression
- ✅ View performance analytics

---

### 6️⃣ Managing Existing Faculty

From the Faculty Management screen, you can:

| Action | Icon | What It Does |
|--------|------|--------------|
| **Resend Email** | 📧 | Resend credentials to faculty email |
| **Edit Faculty** | ✏️ | Update faculty information |
| **Remove Faculty** | 🗑️ | Delete faculty from system |

---

### 7️⃣ View Faculty Statistics

The Faculty Management dashboard shows:
- 👥 **Total Faculty:** Number of registered faculty
- ✅ **Active Faculty:** Currently active members
- 📚 **Total Publications:** Across all faculty
- 🎓 **Total FDPs:** Completed programs

---

### 8️⃣ Search & Filter

Use the search bar to find faculty by:
- Name
- Department
- Email address

---

### 9️⃣ Top Performing Faculty

View rankings based on:
- Publications count
- H-Index score
- FDPs completed

---

### 🔟 Pending Approvals

Review and approve:
- FDP enrollment requests
- Publication submissions
- Other administrative requests

---

## ⚙️ Email Setup (One-Time)

**To enable automatic email notifications:**

1. **Get Resend API Key:**
   - Go to https://resend.com
   - Sign up (free account)
   - Create API key
   - Copy key (starts with `re_`)

2. **Add to Environment:**
   - Supabase → Settings → Edge Functions → Secrets
   - Name: `RESEND_API_KEY`
   - Value: Paste your key
   - Save

3. **Done!** Emails will send automatically

**Without API Key:**
- Faculty still gets added ✅
- No email sent ❌
- You can manually share credentials
- Or resend email after setup

---

## 📊 Dashboard Metrics

### Admin Dashboard Shows:
- Total faculty count
- Publication statistics
- Average H-Index
- Active FDP programs
- Recent activities
- Pending approvals

### Faculty Dashboard Shows:
- Personal publications
- Skill gap analysis
- FDP enrollment status
- Career progress (0-100%)
- Achievement badges

---

## 🔒 Security

- ✅ Auto-generated secure passwords
- ✅ Email-only credential delivery
- ✅ Role-based access control
- ✅ Faculty can change password
- ✅ Data isolation per user

---

## 📱 Quick Tips

### Adding Multiple Faculty
1. Keep spreadsheet of faculty info
2. Copy-paste into form
3. One click to add & notify
4. Repeat for next faculty

### Best Practices
- ✅ Use official email addresses
- ✅ Verify email before adding
- ✅ Double-check department names
- ✅ Set accurate joining dates
- ✅ Inform faculty to check spam folder

### Common Issues
❓ **Email not received?**
→ Check spam folder
→ Verify email address
→ Click resend button

❓ **Faculty can't login?**
→ Verify they're using correct credentials
→ Check role selection (Faculty vs Admin)
→ Resend credentials if needed

❓ **Need to edit faculty?**
→ Click edit icon next to faculty name
→ Update information
→ Save changes

---

## 🎓 Department List

Pre-configured departments:
- Computer Science & Engineering
- Electronics & Communication
- Mechanical Engineering
- Civil Engineering
- Mathematics
- Physics
- Chemistry
- Biology
- Management Studies
- English
- Other

---

## 👔 Position List

Pre-configured positions:
- Assistant Professor
- Associate Professor
- Professor
- Senior Professor
- Visiting Faculty
- Guest Lecturer

---

## 🚀 Workflow Example

**Adding Dr. Amit Patel:**

1. Login as Admin
2. Go to Faculty Management
3. Click "Add Faculty"
4. Enter details:
   ```
   Name: Dr. Amit Patel
   Email: amit.patel@gmail.com
   Dept: Electronics & Communication
   Position: Assistant Professor
   Date: 2024-11-20
   ```
5. Click "Add Faculty & Send Credentials"
6. ✅ System generates: amit.patel@rntu.edu.in
7. ✅ System creates password: RNTU@XYZ789
8. ✅ Email sent to amit.patel@gmail.com
9. ✅ Dr. Patel can login immediately!

---

## 📞 Support

**For Help:**
- Review EMAIL_SETUP_GUIDE.md for detailed email setup
- Review LOGIN_CREDENTIALS.md for credential information
- Check browser console for error messages
- Verify environment variables are set

**Technical Support:**
- Email: support@rntu.edu.in
- Documentation: In project root folder

---

## ✨ Key Features Summary

| Feature | Status | Description |
|---------|--------|-------------|
| Add Faculty | ✅ Active | One-click faculty addition |
| Auto Credentials | ✅ Active | Username & password generation |
| Email Notification | ⚙️ Setup Required | Requires RESEND_API_KEY |
| Faculty List | ✅ Active | View all faculty members |
| Search & Filter | ✅ Active | Find faculty quickly |
| Resend Credentials | ✅ Active | Resend email anytime |
| Edit Faculty | ✅ Active | Update information |
| Delete Faculty | ✅ Active | Remove from system |
| Performance Stats | ✅ Active | View metrics per faculty |
| Institutional Analytics | ✅ Active | University-wide insights |

---

**Ready to get started? Login as Admin and add your first faculty member! 🎉**
