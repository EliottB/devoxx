export interface Experience {
  name: string;
  description: string;
  organisation: string;
  practices: string[];
  localisation: string;
  teamGeneral: People[];
  teamInvolved: People[];
}

export interface People {
  name: string;
  role: string;
}

export interface Infos {
  name?: string;
  description?: string;
  organisation?: string;
  localisation?: string;
  practices: string[];
}

export interface Teams {
  generalTeam: Array<Partial<People>>;
  involvedTeam: Array<Partial<People>>;
}
