type Variable = {
  key: string;
  type: string;
  placeholder: string;
  default?: string;
};

export type Action = {
  id: string;
  key: string;
  title: string;
  description: string;
  message: string;
  variables?: Variable[];
};
