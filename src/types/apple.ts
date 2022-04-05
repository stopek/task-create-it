export interface IMovieImage {
  label: string;
  attributes: {
    height: string;
  };
}

export interface IMovie {
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  id: {
    attributes: {
      "im:id": string;
    };
    label: string;
  };
  "im:artist": {
    label: string;
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  "im:image": IMovieImage[];
  "im:name": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:releaseDate": {
    attributes: {
      label: string;
    };
    label: string;
  };
  link: {
    attributes: {
      href: string;
      "im:assetType": string;
      rel: string;
      title: string;
      type: string;
    };
    "im:duration": {
      label: string;
    };
  };
  rights: {
    label: string;
  };
  summary: {
    label: string;
  };
  title: {
    label: string;
  };
}