export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface PostType {
  id: string;
  slug: string;
  title: string;
  metadata: {
    published_date: string;
    tldr:string;
    article_sections: Section[];
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

interface Section {
  section: string;
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

export interface Theme{
  metadata: {
    primary: string;
    primary_muted: string;
    primary_dark: string;
    secondary: string;  
  }
}