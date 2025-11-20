# Email Notification Setup Guide

## Faculty Management with Email Notifications

The Admin panel now includes a comprehensive Faculty Management system that automatically sends login credentials to newly added faculty members via email.

---

## Features

### ✅ Admin Capabilities

1. **Add New Faculty Members**
   - Fill in faculty details (name, email, department, position, joining date)
   - System automatically generates username (e.g., priya.sharma@rntu.edu.in)
   - System generates secure password (e.g., RNTU@ABC123)
   - Credentials are automatically sent to faculty's Gmail/email

2. **View Faculty List**
   - See all registered faculty members
   - View statistics: publications, H-Index, FDPs completed
   - Search and filter faculty by name, department, or email

3. **Manage Faculty**
   - Resend credentials if faculty member didn't receive email
   - Edit faculty information
   - Remove faculty members from the system

---

## Email Integration

### Email Service: Resend

The system uses **Resend** (https://resend.com) for sending emails. Resend is:
- Free for up to 100 emails/day
- Fast and reliable
- Easy to integrate
- Professional email delivery

### Email Template

When a faculty member is added, they receive a professionally designed email containing:
- **Welcome message** with university branding
- **Login credentials** (username and password)
- **Dashboard features** overview
- **Direct login link** to the dashboard
- **Security reminder** to change password after first login

---

## Setup Instructions

### Option 1: Using Resend (Recommended)

1. **Create a Resend Account**
   - Visit https://resend.com
   - Sign up for a free account
   - Verify your email address

2. **Get Your API Key**
   - Go to API Keys section in Resend dashboard
   - Click "Create API Key"
   - Copy the API key (starts with `re_`)

3. **Add API Key to Environment**
   - In your Supabase project, go to Settings → Edge Functions
   - Add a new secret: `RESEND_API_KEY`
   - Paste your Resend API key
   - Save

4. **Verify Domain (Optional but Recommended)**
   - In Resend dashboard, go to Domains
   - Add your domain (e.g., rntu.edu.in)
   - Follow DNS verification steps
   - Once verified, emails will be sent from your domain

### Option 2: Testing Without Email

The system works even without email configuration:
- Faculty members are still added to the database
- Credentials are displayed in the admin interface
- Admin can manually share credentials with faculty
- A notification shows "Faculty added but email notification failed"

---

## How It Works

### Adding a Faculty Member

1. **Admin logs in** with admin credentials
2. **Navigates to Faculty Management** (Users icon in sidebar)
3. **Clicks "Add Faculty"** button
4. **Fills in the form:**
   ```
   Full Name: Dr. Priya Sharma
   Email: priya.sharma@gmail.com
   Department: Computer Science & Engineering
   Position: Associate Professor
   Joining Date: 2024-11-20
   ```
5. **Clicks "Add Faculty & Send Credentials"**

### What Happens Next

1. ✅ **System generates credentials:**
   - Username: `priya.sharma@rntu.edu.in`
   - Password: `RNTU@XYZ789`

2. ✅ **Faculty record created** in database

3. ✅ **Email sent to faculty member** containing:
   - Welcome message
   - Login credentials
   - Dashboard features
   - Login link

4. ✅ **Success notification** shown to admin

5. ✅ **Faculty appears in the list** with status "Active"

### Faculty Receives Email

The faculty member receives an email at their Gmail account with:
- **Subject:** "Welcome to RNTU Faculty Professional Track Dashboard"
- **From:** RNTU Faculty Portal
- **Content:** Professionally designed HTML email with credentials

### Faculty Can Login

1. Faculty opens the dashboard
2. Selects "Login as Faculty"
3. Enters credentials received via email
4. Accesses their personal dashboard

---

## Email Template Example

```
Subject: Welcome to RNTU Faculty Professional Track Dashboard

Dear Dr. Priya Sharma,

Welcome to Rabindranath Tagore University's Faculty Professional Track Dashboard. 
Your account has been successfully created.

Your Login Credentials:
━━━━━━━━━━━━━━━━━━━━
Username: priya.sharma@rntu.edu.in
Password: RNTU@XYZ789
━━━━━━━━━━━━━━━━━━━━

With this dashboard, you can:
• Track your publications and citations
• Monitor your skill development
• Enroll in Faculty Development Programs (FDPs)
• Plan your career progression
• View your performance analytics

[Login to Dashboard Button]

Security Note: Please change your password after your first login.

© 2024 Rabindranath Tagore University
```

---

## Resending Credentials

If a faculty member doesn't receive the email:

1. Admin finds the faculty in the list
2. Clicks the **email icon** (📧) next to their name
3. System resends the credentials email
4. Faculty receives a new email with same credentials

---

## Troubleshooting

### Email Not Received

**Check these:**
1. ✅ Is `RESEND_API_KEY` set in environment variables?
2. ✅ Is the faculty email address correct?
3. ✅ Check spam/junk folder
4. ✅ Verify email in Resend dashboard logs

### Email Sending Failed

**If you see "Faculty added but email notification failed":**
1. Faculty is still added successfully
2. Admin can see credentials in the interface
3. Admin can manually share credentials
4. Admin can resend email after fixing configuration

### API Key Issues

**If Resend API key is not working:**
1. Verify key starts with `re_`
2. Check key has proper permissions
3. Ensure account is verified in Resend
4. Check Resend dashboard for error logs

---

## Security Best Practices

1. **Never share API keys** in code or public repositories
2. **Store keys as environment variables** only
3. **Passwords are auto-generated** with secure random characters
4. **Remind faculty to change passwords** after first login
5. **Use domain verification** for better email deliverability

---

## Costs

### Resend Free Tier
- **100 emails/day** for free
- Sufficient for most universities
- Professional email delivery
- No credit card required to start

### Upgrade Options
If you need more emails:
- **1,000 emails/month:** $20/month
- **50,000 emails/month:** $100/month
- Custom plans available

---

## API Key Setup (Step by Step)

### For Resend:

1. Go to https://resend.com
2. Click "Sign Up" or "Get Started"
3. Enter your email and create password
4. Verify your email
5. In dashboard, click "API Keys"
6. Click "Create API Key"
7. Give it a name (e.g., "RNTU Faculty Portal")
8. Copy the key (it will start with `re_`)
9. In your Supabase project:
   - Go to Settings → Edge Functions → Secrets
   - Click "New secret"
   - Name: `RESEND_API_KEY`
   - Value: Paste the copied key
   - Click "Create secret"
10. Done! Emails will now be sent automatically

---

## Testing the System

1. **Login as Admin**
   - Email: admin@rntu.edu.in
   - Password: RNTU@Admin2024

2. **Navigate to Faculty Management**
   - Click "Users" icon in sidebar

3. **Add a Test Faculty**
   - Use your own email for testing
   - Fill in the form
   - Click "Add Faculty & Send Credentials"

4. **Check Your Email**
   - Look for welcome email
   - Verify credentials are included
   - Click login button

5. **Test Login**
   - Use received credentials to login
   - Verify dashboard access

---

## Support

For issues or questions:
- Check Resend documentation: https://resend.com/docs
- Review error logs in browser console
- Check Supabase function logs
- Verify environment variables are set correctly

---

**System Status:**
- ✅ Admin Panel: Fully Functional
- ✅ Faculty Management: Fully Functional  
- ✅ Email Integration: Ready (requires API key)
- ✅ Credential Generation: Automatic
- ✅ Database Storage: Working

**Next Steps:**
1. Set up Resend API key (5 minutes)
2. Add your first faculty member
3. Test the complete flow
4. Start managing your faculty!
