export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export type WorkMode = 'On-site' | 'Hybrid' | 'Remote';

export type JobStatus = 'draft' | 'published';

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  job_type: JobType;
  work_mode: WorkMode;
  location: string;
  experience_level: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salary_range?: string | null;
  application_deadline?: string | null;
  openings: number;
  status: JobStatus;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface JobFilters {
  search?: string;
  department?: string | 'all';
  job_type?: JobType | 'all';
  work_mode?: WorkMode | 'all';
  status?: JobStatus | 'all';
}
