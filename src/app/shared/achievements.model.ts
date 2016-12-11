export interface Account {
  id: string;
  name: string;
  world: number;
  guilds: string[];
  created: Date;
  access: string;
  commander: boolean;
  fractal_level: number;
  daily_ap: number;
  monthly_ap: number;
  wvw_rank: number;
}

export interface AccountAchievement {
  id: number;
  current: number;
  max: number;
  done: boolean;
  bits: number[];
  unlocked?: boolean;
  repeated?: number;
}

export interface Tier {
  count: number;
  points: number;
}

export interface Reward {
  type: string;
  id: number;
  count: number;
  region: string;
}

export interface Bit {
  type: string;
  text: string;
  id?: number;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  requirement: string;
  locked_text: string;
  type: string;
  flags: string[];
  tiers: Tier[];
  rewards: Reward[];
  icon: string;
  prerequisites: number[];
  bits: Bit[];
  point_cap?: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  order: number;
  icon: string;
  achievements: Achievement[];
}

export interface CategoryGroup {
  id: string;
  name: string;
  description: string;
  order: number;
  categories: Category[];
}
