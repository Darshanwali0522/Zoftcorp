export interface LeaderProfile {
  name: string;
  role: string;
  initials: string;
}

/**
 * Company Leadership Team
 * Source of Truth: Frozen Client PDF (Zoho.pdf, Page 1)
 * Exact client-approved names and roles verbatim.
 */
export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: 'Shruthi',
    role: 'COO',
    initials: 'SH',
  },
  {
    name: 'Praveen Kumar',
    role: 'Database FinOps',
    initials: 'PK',
  },
  {
    name: 'Gopika',
    role: 'Business Development - Partner Sales',
    initials: 'GO',
  },
  {
    name: 'Prabhu Vijayakumar',
    role: 'Legal Consultant - DPDP Compliance',
    initials: 'PV',
  },
  {
    name: 'Aravind',
    role: 'Legal Consultant - DPDP Compliance',
    initials: 'AR',
  },
];
