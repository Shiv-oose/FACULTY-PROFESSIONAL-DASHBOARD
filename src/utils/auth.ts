import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './supabase/info.tsx';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabase = createClient(supabaseUrl, publicAnonKey);

// Demo user credentials
const DEMO_EMAIL = 'demo@facultytrack.app';
const DEMO_PASSWORD = 'demo-faculty-2024';

export class AuthService {
  private static instance: AuthService;
  private accessToken: string | null = null;
  private currentUser: any = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async initialize() {
    // Check if we have an existing session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
      this.accessToken = session.access_token;
      this.currentUser = session.user;
      return { success: true, user: this.currentUser };
    }

    // Try to sign in with demo credentials
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: DEMO_EMAIL,
        password: DEMO_PASSWORD,
      });

      if (error) {
        // If demo user doesn't exist, that's expected for now
        console.log('Demo user not found - using anonymous mode');
        return { success: false, error: 'No demo user' };
      }

      if (data.session) {
        this.accessToken = data.session.access_token;
        this.currentUser = data.user;
        return { success: true, user: this.currentUser };
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    }

    return { success: false };
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  async signOut() {
    await supabase.auth.signOut();
    this.accessToken = null;
    this.currentUser = null;
  }
}

export const authService = AuthService.getInstance();
