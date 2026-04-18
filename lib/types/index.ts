export type Role = 'parent' | 'student' | 'teacher' | 'admin';

export type GradeLevel =
  | 'Primary'
  | 'JSS'
  | 'SSS'
  | 'College Year 1'
  | 'College Year 2'
  | 'College Year 3'
  | 'College Year 4'
  | 'Other';

export type LearningGoal =
  | 'Exam prep'
  | 'Catch up with school'
  | 'Learn a new skill'
  | 'General improvement';

export type CurrentLevel = 'Struggling' | 'Average' | 'Above average';
export type GenderPreference = 'No preference' | 'Male' | 'Female';
export type TimeBlock = 'Morning' | 'Afternoon' | 'Evening';
export type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export type BudgetTier = 'Under $20' | '$20–$35' | '$35–$50' | '$50+';

export interface Parent {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  createdAt: string;
  childrenIds: string[];
}

export interface Child {
  id: string;
  parentId: string;
  fullName: string;
  age: number;
  grade: GradeLevel;
  school?: string;
  avatarUrl?: string;
  assignedTeacherId?: string;
  intake?: IntakeForm;
  goal?: Goal;
  streak: Streak;
  badges: string[];
}

export interface IntakeForm {
  subject: string;
  learningGoal: LearningGoal;
  currentLevel: CurrentLevel;
  specificTopics?: string;
  teacherGenderPref: GenderPreference;
  specialNotes?: string;
  preferredDays: DayOfWeek[];
  preferredTime: TimeBlock;
  sessionsPerWeek: 1 | 2 | 3 | 'Flexible';
  budget: BudgetTier;
}

export interface Teacher {
  id: string;
  name: string;
  photoUrl?: string;
  bio: string;
  subjects: string[];
  qualifications: string[];
  hourlyRate: number;
  rating: number;
  totalSessions: number;
  joinedAt: string;
}

export type SessionStatus = 'Upcoming' | 'Completed' | 'Cancelled';

export interface Session {
  id: string;
  childId: string;
  teacherId: string;
  subject: string;
  startsAt: string;
  durationMins: number;
  meetLink: string;
  status: SessionStatus;
  noteId?: string;
  amount: number;
}

export type Performance = 'Excellent' | 'Good' | 'Needs Work';

export interface SessionNote {
  id: string;
  sessionId: string;
  covered: string;
  performance: Performance;
  focusNext: string;
  concerns?: string;
  createdAt: string;
}

export interface Goal {
  id: string;
  childId: string;
  title: string;
  targetDate?: string;
  progress: number;
}

export interface Streak {
  current: number;
  longest: number;
  lastActiveAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: string;
}

export type PayoutStatus = 'Paid' | 'Pending';

export interface EarningEntry {
  sessionId: string;
  date: string;
  studentName: string;
  subject: string;
  durationMins: number;
  amount: number;
  status: PayoutStatus;
}

export interface Payout {
  id: string;
  date: string;
  amount: number;
  method: 'Bank' | 'Wise' | 'Flutterwave';
}

export type PaymentPlan = 'Single Session' | 'Starter Bundle';
export type PaymentGateway = 'Stripe' | 'Flutterwave';

export interface Payment {
  id: string;
  parentId: string;
  plan: PaymentPlan;
  amount: number;
  gateway: PaymentGateway;
  createdAt: string;
  sessionsIncluded: number;
  sessionsUsed: number;
}

export interface Notification {
  id: string;
  userId: string;
  role: Role;
  title: string;
  body: string;
  createdAt: string;
  read: boolean;
}
