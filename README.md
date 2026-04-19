# DoLearn

DoLearn is a tutoring platform for families, teachers, and administrators. Families create student profiles, share learning needs and availability, and track lessons. Teachers manage assigned students, propose class times, submit notes, confirm attendance, and review expected payouts. Admins manage the teacher roster, match students to teachers, assign meeting links, monitor sessions, review cancellations, and prepare monthly teacher payments.

The current project is a frontend-first MVP. It uses mock data and browser local storage to simulate the main product workflows while the backend is still being planned.

## Who It Is For

**Families**

Parents or guardians can add children, submit learning details, choose subjects, select availability by day and session block, review proposed lesson times, confirm attendance, read teacher feedback, deactivate or reactivate students, and view monthly reports.

**Teachers**

Teachers can see their assigned students, propose lesson times based on each student's availability, view sessions, request cancellations, mark attendance, submit session notes, and track monthly earnings based on verified teaching time.

**Admins**

Admins manage the platform operation. They add teachers, set teacher rates, match students with teachers, terminate teachers when necessary, assign meeting links, resolve cancellation requests, monitor attendance, and calculate monthly teacher payouts.

## Core Workflows

### 1. Family Onboarding

A family creates a child profile and submits an intake form with:

- Student name, age, grade, and school details
- One or more subjects or skills
- Learning goal and current level
- Teacher gender preference
- Special notes
- Preferred schedule by day
- Morning, afternoon, or evening availability for each selected day
- Timezone
- Weekly lesson target
- Budget range

This intake helps admin match the child with the right teacher.

### 2. Teacher Matching

Admin reviews student intakes and assigns teachers based on subject fit, availability, and platform judgment. Teachers are added directly by admin, not invited from a public signup flow.

When a teacher is added, the intended backend flow is:

- Admin enters teacher details.
- The platform creates a teacher account using the teacher's email.
- The teacher receives a default or temporary password.
- The teacher resets the password after first login.
- The account is tagged with the `teacher` role.

### 3. Session Proposals

After a student is matched to a teacher, the teacher proposes class times from the student's available days and session blocks.

For example, if a student is available:

- Monday: Afternoon
- Tuesday: Evening

The teacher can only propose a Monday afternoon time or a Tuesday evening time. The family sees the proposed session on the family sessions page and can accept or decline it.

Accepted proposals become upcoming sessions. Admin can then assign the meeting link used by both the student and teacher.

### 4. Meeting Links

Admin assigns the class meeting link. Until admin adds the link, the family and teacher dashboards show that the session is awaiting an admin link.

### 5. Attendance

After a class happens, both the teacher and family can confirm that the class was held. A session becomes payout-eligible only when both sides have confirmed attendance.

This protects the monthly payout process because admin can pay teachers using verified sessions instead of assumptions.

### 6. Cancellations

Families and teachers can request cancellation for a specific class and must provide a reason. Admin reviews the request and approves or rejects it.

Cancellation records help admin understand missed classes, follow up with parents or teachers, and keep payment records clean.

### 7. Session Notes

Teachers can submit notes after completed sessions. Notes include what was covered, performance, rating, next focus area, and optional concerns. Families can review these notes from their dashboard.

### 8. Student Deactivation

Families can deactivate a student if they want to pause lessons temporarily. A reason is required. Admin and assigned teachers receive notifications. The student remains clickable in the dashboard and can be reactivated later.

### 9. Payments And Payouts

Parents pay the platform. Teachers are paid by admin monthly.

Teacher payout is calculated from:

- Verified sessions
- Session duration
- Teacher hourly rate set by admin

Teachers can view expected monthly earnings, while admin can review individual teacher payout amounts and mark them as paid.

### 10. Monthly Reports

The platform includes monthly reporting for:

- Admin: revenue, attendance, cancellations, teacher payout due, and margin
- Teachers: verified hours, expected payout, sessions, students taught, and attendance gaps
- Families: child activity, session usage, confirmations, cancellations, and notes

## Current App Areas

| Area | Purpose |
| --- | --- |
| `/` | Public landing page |
| `/login` | Mock login flow |
| `/register` | Mock family registration flow |
| `/family` | Family dashboard |
| `/family/children` | Manage children |
| `/family/sessions` | View sessions and accept or decline proposed sessions |
| `/family/reports` | Family monthly report |
| `/teacher` | Teacher dashboard |
| `/teacher/students` | Assigned students and session proposal flow |
| `/teacher/schedule` | Teacher session schedule |
| `/teacher/notes` | Submit session notes |
| `/teacher/earnings` | Teacher earnings and payout view |
| `/teacher/reports` | Teacher monthly report |
| `/admin` | Admin dashboard |
| `/admin/intakes` | Review intakes and match teachers |
| `/admin/teachers` | Add, manage, rate, and terminate teachers |
| `/admin/sessions` | Manage sessions, meeting links, attendance, and cancellations |
| `/admin/payments` | Revenue and individual teacher payouts |
| `/admin/reports` | Admin monthly report |

## Technology Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, shadcn/Radix UI components
- **Animation:** Framer Motion
- **Charts:** Recharts
- **Forms and validation:** React Hook Form and Zod
- **Icons:** Lucide React
- **Theme:** `next-themes`
- **Deployment target:** Netlify with `@netlify/plugin-nextjs`

Supabase is already installed as a dependency, but the current app still uses mock/local browser storage rather than a live database.

## Project Structure

```txt
app/                  Next.js app routes
components/           Reusable UI, dashboard, and form components
hooks/                Shared React hooks
lib/mock/             Mock platform data
lib/store/            Client-side mock store and role-specific selectors
lib/types/            Shared TypeScript types and display helpers
public/               Static public assets
```

Important files:

- `lib/types/index.ts` defines the product data model.
- `lib/mock/index.ts` contains starter data for families, teachers, sessions, notes, payments, and reports.
- `lib/store/client.ts` stores temporary local changes in browser local storage.
- `lib/store/admin.ts`, `lib/store/family.ts`, and `lib/store/teacher.ts` expose role-specific data helpers.
- `components/dashboard/DashboardShell.tsx` controls dashboard navigation for each role.

## Local Development

### Requirements

- Node.js 20 or newer is recommended.
- npm is used in this project because `package-lock.json` is present.

### Install Dependencies

```bash
npm install
```

### Start The Development Server

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

### Run Type Checking

```bash
npm run typecheck
```

### Run Linting

```bash
npm run lint
```

### Build For Production

```bash
npm run build
```

### Start The Production Build Locally

```bash
npm run start
```

## Data Storage In This MVP

This version does not yet use a real backend for most workflows. It combines:

- Static mock data from `lib/mock/index.ts`
- Browser local storage from `lib/store/client.ts`

That means many actions persist only in the current browser, for example:

- Added children
- Saved intake forms
- Teacher hourly rate overrides
- Meeting link edits
- Attendance confirmations
- Cancellation requests
- Session notes
- Session proposals
- Student deactivation
- Notifications

If local storage is cleared or another browser is used, those local changes will disappear.

## Backend Plan

When the backend is implemented, the local storage layer should be replaced with real database-backed services.

Recommended backend entities:

- Users
- Roles
- Parents
- Students
- Teachers
- Teacher profiles
- Intakes
- Teacher assignments
- Session proposals
- Sessions
- Meeting links
- Attendance confirmations
- Cancellation requests
- Session notes
- Payments
- Teacher payout records
- Notifications
- Monthly report snapshots

Important backend rules:

- Only admin can create teacher accounts and set teacher hourly rates.
- Teachers should not be able to propose sessions outside a student's available day and session block.
- Accepted proposals should create real sessions.
- Admin should assign or update meeting links.
- Teacher payouts should only use sessions verified by both teacher and family attendance.
- Cancellation requests should keep a reason, requester, status, and admin resolution timestamp.
- Student deactivation should require a reason and notify admin plus assigned teacher.
- Teacher termination should unassign affected students so admin can rematch them.

## Deployment

This project is configured for Netlify.

`netlify.toml` uses:

```toml
[build]
command = "npx next build"
publish = ".next"

[[plugins]]
package = "@netlify/plugin-nextjs"
```

To deploy:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Connect the repository to Netlify.
3. Let Netlify use the build settings from `netlify.toml`.
4. Add environment variables later when the real backend is connected.

## Product Status

This is an active MVP. The main user journeys are represented in the UI, but production readiness still requires:

- Real authentication and role protection
- Backend database
- Server-side validation
- Payment gateway integration
- Email or WhatsApp notifications
- Secure teacher account creation
- Real meeting-link management
- Audit logs for payments, cancellations, and admin actions
- Automated tests for critical workflows

## Suggested Next Steps

1. Connect authentication and role-based routing.
2. Move mock/local storage data into a real database.
3. Implement teacher account creation from admin.
4. Add server validation for session proposals and attendance.
5. Integrate parent payments.
6. Add monthly payout records for each teacher.
7. Add email or WhatsApp notifications.
8. Add automated tests for onboarding, matching, scheduling, attendance, cancellation, notes, and payouts.

## Name

The product is referred to as **DoLearn** in the interface. The repository folder may appear as `Dolearnn` during development.
