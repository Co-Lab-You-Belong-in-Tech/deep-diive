import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
} from "react-share";

export const SOCIAL_MEDIA_DATA = [
  {
    id: 1,
    SocialButton: FacebookShareButton,
    Icon: FacebookIcon,
  },
  {
    id: 2,
    SocialButton: TwitterShareButton,
    Icon: XIcon,
  },
  {
    id: 3,
    SocialButton: LinkedinShareButton,
    Icon: LinkedinIcon,
  },
];
