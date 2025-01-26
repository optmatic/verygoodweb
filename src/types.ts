export interface SiteAuditFormData {
    websiteUrl: string;
    businessType: string;
    mainGoal: string;
    targetAudience: string;
    competitors: string;
    currentChallenges: string;
    desiredOutcome: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    phone: string;
  }
  
  export type Step2FormData = Pick<SiteAuditFormData, 'mainGoal' | 'targetAudience'>;
  export type Step3FormData = Pick<SiteAuditFormData, 'competitors' | 'currentChallenges'>;
  export type Step4FormData = Pick<SiteAuditFormData, 'name' | 'email' | 'phone'>;