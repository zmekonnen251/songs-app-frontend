export interface Song {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongStats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: Record<string, number>;
  songsByArtist: Record<string, number>;
  albumsByArtist: Record<string, number>;
  songsByAlbum: Record<string, number>;
}

export interface AppState {
  songs: Song[];
  genres: string[];
  artists: string[];
  albums: string[];
  stats: SongStats; // Replace with a more specific type for stats
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    background: string;
    text: string;
    white: string;
  };
  space: number[];
  fontSizes: number[];
  radii: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface FetchSongsResponse {
  songs: Song[];
  artists: string[];
  albums: string[];
  genres: string[];
  page: number;
  perPage: number;
  total: number;
}

export interface FetchStatsResponse {
  stats: SongStats;
}

export interface SongCreateRequest {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongUpdateRequest {
  title?: string;
  artist?: string;
  album?: string;
  genre?: string;
}

export interface SongDeleteRequest {
  id: string;
}

export interface SongFetchRequest {
  id: string;
}

export interface SongsFetchQuery {
  page?: number;
  perPage?: number;
  query?: string;
  filter?: FilterType;
}

export type FilterType = 'all' | 'genre' | 'artist' | 'album';
