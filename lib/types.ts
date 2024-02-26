export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  metadata: {
    published_date: string;
    content: string;
    hero?: {
      imgix_url?: string;
    };
    author?: {
      slug?: string;
      title?: string;
      metadata: {
        image?: {
          imgix_url?: string;
        };
      };
    };
    teaser: string;
    categories: {
      title: string;
    }[];
    theme:Theme
  };
}

export interface Author {
  id: string;
  slug: string;
  title: string;
  metadata: {
    image?: {
      imgix_url?: string;
    };
  };
}

export interface Category {
  slug: string;
  title: string;
}

interface Theme{
  metadata: {
    primary: string;
    primary_muted: string;
    primary_dark: string;
    secondary: string;  
  }
}