export interface NekoItem {
  artist_name: string;
  artist_href: string;
  source_url: string;
  url: string;
}

export interface NekoResponse {
  results: NekoItem[];
}