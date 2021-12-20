type Agent = {
  id: string;
  photo?: string;
  name: string;
  agentCity?: string;
  agencyName?: string;
  agentRegion?: string;
  progress: number;
  score: number;
  position?: number;
  commission: number; 
  gwp?: number;
  renewalRatio?: number;
  ape?: number;
  psRatio?: number;
  address?: string;
  explanation?: string;
  performance?: 'Low Performance' | 'Medium Performance' | 'High Performance';
};

export default Agent;
