

import igLogo from '../assets/igLogo.svg';
import inLogo from '../assets/inLogo.svg';
import spLogo from '../assets/spLogo.svg';
import xLogo from '../assets/xLogo.svg';
import ghLogo from '../assets/ghLogo.svg';
import igBack from '../assets/igBack.svg';
import inBack from '../assets/inBack.svg';
import spBack from '../assets/spBack.svg';
import xBack from '../assets/xBack.svg';
import ghBack from '../assets/ghBack.svg';
import shadow from '../assets/shadow.svg';

interface SocialMedia {
  url: string;
  logo: string;
  background: string;
  textColor: string;
  text: string;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    url: "https://www.instagram.com/barisfurkanuzun/",
    logo: igLogo,
    background: igBack,
    textColor: "#E1306C",
    text: "barisfurkanuzun"
  },
  {
    url: "https://www.linkedin.com/in/barisfurkanuzun/",
    logo: inLogo,
    background: inBack,
    textColor: "#0077B5",
    text: "barisfurkanuzun"
  },
  {
    url: "https://open.spotify.com/user/31qt2ernnweydujiqcuz7qybvfim?si=0d7507929c964b61",
    logo: spLogo,
    background: spBack,
    textColor: "#1ED760",
    text: "barisfurkanuzun"
  },
  {
    url: "https://x.com/norsemansere",
    logo: xLogo,
    background: xBack,
    textColor: "#000000",
    text: "norsemansere"
  },
  {
    url: "https://github.com/brsfurkanuzun",
    logo: ghLogo,
    background: ghBack,
    textColor: "#482677",
    text: "brsfurkanuzun"
  },
];

export const SHADOW: string = shadow;
