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
    article_sections: Sections;
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

interface Sections {
  sections: SubSection[];
}

interface SubSection {
  section_title:string;
  section_body:string;
  section_slug:string;
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
  slug?: string;
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