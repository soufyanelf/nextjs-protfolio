
export interface HeroDataType {
    profileImg: {
        src: string;
        alt: string;
    };
    name: string;
    description: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    };
  }
  
  export interface HomePageDataType {
    title: string;
    heroData: HeroDataType;
  }

  export interface AboutDataType {
    description: string;
  };

  export interface AboutPageDataType {
    title: string;
    aboutData: AboutDataType
  }
  

  export interface postDataType {
    title: string;
    metaTitle: string;
    metaDesc: string;
    socialImage: string;
    date: string;
    tags: Array<string>;
    slug?: string;
    content?: string;
  };

  export interface BlogPageDataType {
    title: string;
    aboutData: AboutDataType;
  }
  
