



export interface dadJoke {
    id: string;
    joke: string;
    status: number;
  }

export interface Joke {
    joke: string;
  }

  
export interface ChuckNorris {
  categories: any[];
  created_at: Date;
  icon_url:   string;
  id:         string;
  updated_at: Date;
  url:        string;
  value:      string;
}



export interface Report {
    joke:    string;
    score:   number;
    date:    string;
}
