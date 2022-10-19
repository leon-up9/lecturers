export interface ILecturer {
  id: string;
  name: string;
  email: string;
  languages: number[];
  image: string;
}

export interface ILanguage {
  id: number;
  name: string;
}
