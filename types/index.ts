
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