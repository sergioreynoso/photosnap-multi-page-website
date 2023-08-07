import BoostExposureIcon from "@/public/icons/boost-exposure.svg";
import CustomDomainIcon from "@/public/icons/custom-domain.svg";
import DragDropIcon from "@/public/icons/drag-drop.svg";
import EmbedIcon from "@/public/icons/embed.svg";
import NoLimitIcon from "@/public/icons/no-limit.svg";
import ResponsiveIcon from "@/public/icons/responsive.svg";

const data = [
  {
    id: 1,
    title: "100% Responsive",
    body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: {
      src: ResponsiveIcon,
      alt: "digital phone, computer, and tablet",
    },
  },
  {
    id: 2,
    title: "No Photo Upload Limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: { src: NoLimitIcon, alt: "infinity symbol" },
  },
  {
    id: 3,
    title: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    image: {
      src: EmbedIcon,
      alt: "computer with many media types icons around it",
    },
  },
  {
    id: 4,
    title: "Custom Domain",
    body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    image: {
      src: CustomDomainIcon,
      alt: "Magnifying glass looking over search bar",
    },
  },
  {
    id: 5,
    title: "Boost Your Exposure",
    body: "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
    image: { src: BoostExposureIcon, alt: "hand dragging a square" },
  },
  {
    id: 6,
    title: "Drag & Drop Image",
    body: "Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to creating stories.",
    image: { src: DragDropIcon, alt: "image carousel" },
  },
];

export default data;
