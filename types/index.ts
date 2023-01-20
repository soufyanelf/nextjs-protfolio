
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
  