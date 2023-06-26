import HomeCreateAndShare from "./public/photography/home/create-and-share.jpg";
import HomeBeautifulStories from "./public/photography/home/beautiful-stories.jpg";
import HomeDesignedForEveryone from "./public/photography/home/designed-for-everyone.jpg";

import StoriesMoonOfAppalachia from "./public/photography/stories/moon-of-appalachia.jpg";
import StoriesMountains from "./public/photography/stories/mountains.jpg";
import StoriesCityscape from "./public/photography/stories/cities-capes.jpg";
import Stories18DaysVoyage from "./public/photography/stories/18-days-voyage.jpg";
import StoriesArchitectural from "./public/photography/stories/architectural.jpg";
import StoriesWorldTour from "./public/photography/stories/world-tour.jpg";
import StoriesUnforeseenCorners from "./public/photography/stories/unforeseen-corners.jpg";
import StoriesTripToNowhere from "./public/photography/stories/trip-to-nowhere.jpg";
import StoriesSomwarpet from "./public/photography/stories/somwarpet-beauty.jpg";
import StoriesRunningFree from "./public/photography/stories/running-free.jpg";
import StoriesRageOfTheSea from "./public/photography/stories/rage-of-the-sea.jpg";
import StoriesMilkyWay from "./public/photography/stories/milky-way.jpg";
import StoriesLandOfDreams from "./public/photography/stories/land-of-dreams.jpg";
import StoriesKingOnAfrica from "./public/photography/stories/king-on-africa.jpg";
import StoriesDarkForest from "./public/photography/stories/dark-forest.jpg";
import StoriesCalmWaters from "./public/photography/stories/calm-waters.jpg";
import StoriesBehindTheWaves from "./public/photography/stories/behind-the-waves.jpg";

import FeaturesHero from "./public/photography/features/features-hero.jpg";
import PricingHero from "./public/photography/pricing/pricing-hero.jpg";

import WeAreInBeta from "./public/photography/we-are-in-beta.jpg";

import BoostExposureIcon from "./public/icons/boost-exposure.svg";
import CustomDomainIcon from "./public/icons/custom-domain.svg";
import DragDropIcon from "./public/icons/drag-drop.svg";
import EmbedIcon from "./public/icons/embed.svg";
import NoLimitIcon from "./public/icons/no-limit.svg";
import ResponsiveIcon from "./public/icons/responsive.svg";

export const homeData = [
  {
    id: 1,
    title: "create and share your photo stories.",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    image: {
      src: HomeCreateAndShare,
      alt: "man standing on a peer overlooking a lake",
    },
    linkLabel: "Get an invite",
    route: "/",
  },
  {
    id: 2,
    title: "beautiful  stories every time.",
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    image: {
      src: HomeBeautifulStories,
      alt: "computer laptop on table displaying image of a young child",
    },
    linkLabel: "View the stories",
    route: "stories",
  },
  {
    id: 3,
    title: "designed for everyone.",
    body: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    image: {
      src: HomeDesignedForEveryone,
      alt: "man holding a digital cinema camera",
    },
    linkLabel: "View the stories",
    route: "stories",
  },
];

export const storyData = {
  hero: {
    id: 1,
    date: "March 2nd 2020",
    image: {
      src: StoriesMoonOfAppalachia,
      alt: "bright full moon over a mountain range",
    },
    title: "Hazy Full Moon Of Appalachia",
    eyebrow: "Last Months's featured story",
    body: "The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
    author: "John Appleseed",
    linkLabel: "Read the story",
    route: "stories",
  },
  stories: [
    {
      id: 2,
      date: "April 16th 2020",
      image: {
        src: StoriesMountains,
        alt: "mountain peacing through the clouds",
      },
      title: "The Mountains",
      author: "John Appleseed",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 3,
      date: "April 14th 2020",
      image: {
        src: StoriesCityscape,
        alt: "over the chicago skyline with the horizon in the background as dusk sets in",
      },
      title: "Sunset Cityscape",
      author: "Benjamin Cruz",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 4,
      date: "April 11th 2020",
      image: {
        src: Stories18DaysVoyage,
        alt: "silhouette of man walking outdoors",
      },
      title: "18 Days Voyage",
      author: "Alexie Borodin",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 5,
      date: "April 9th 2020",
      image: { src: StoriesArchitectural, alt: "looking up abstract building" },
      title: "Architectural",
      author: "Samantha Brooke",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 6,
      date: "April 7th 2020",
      image: {
        src: StoriesWorldTour,
        alt: "looking down a mountainous valley with a turkois color lake in the center",
      },
      title: "World Tour 2019",
      author: "Timothy Wagner",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 7,
      date: "April 3rd 2020",
      image: {
        src: StoriesUnforeseenCorners,
        alt: "silhouette of tree with the sun in the background as it rises",
      },
      title: "Unforeseen Corners",
      author: "William Malcolm",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 8,
      date: "March 29th 2020",
      image: { src: StoriesKingOnAfrica, alt: "close up of a lion's face" },
      title: "King on Africa: Part II",
      author: "Tim Hillenburg",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 9,
      date: "March 21st 2020",
      image: {
        src: StoriesTripToNowhere,
        alt: "tree next to a lake reflecting the tree and bright night sky",
      },
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 10,
      date: "March 19th 2020",
      image: {
        src: StoriesRageOfTheSea,
        alt: "close up of waves in the shore line with the sun in the background setting",
      },
      title: "Rage of The Sea",
      author: "Mohammed Abdul",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 11,
      date: "March 16th 2020",
      image: { src: StoriesRunningFree, alt: "two horses running" },
      title: "Running Free",
      author: "Michelle",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 12,
      date: "March 11th 2020",
      image: { src: StoriesBehindTheWaves, alt: "big wave crashing" },
      title: "Behind the Waves",
      author: " Lamarr Wilson",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 13,
      date: "March 9th 2020",
      image: {
        src: StoriesCalmWaters,
        alt: "lake with mountain range in the background",
      },
      title: "Calm Waters",
      author: "Samantha Brooke",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 14,
      date: "March 5th 2020",
      image: { src: StoriesMilkyWay, alt: "the milky way galaxy" },
      title: "The Milky Way",
      author: "Benjamin Cruz",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 15,
      date: "March 4th 2020",
      image: {
        src: StoriesDarkForest,
        alt: "mountain range with night sky in the background",
      },
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 16,
      date: "March 1st 2020",
      image: { src: StoriesSomwarpet, alt: "orange flowers" },
      title: "Somwarpet’s Beauty",
      author: "Michelle",
      linkLabel: "stories",
      route: "stories",
    },
    {
      id: 17,
      date: "February 25th 2020",
      image: {
        src: StoriesLandOfDreams,
        alt: "church on a hill in winter with mountains in the background",
      },
      title: "Land of Dreams",
      author: "William Malcolm",
      linkLabel: "stories",
      route: "stories",
    },
  ],
};

export const featuresData = {
  hero: {
    title: "Features",
    body: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    image: {
      src: FeaturesHero,
      alt: "close up of a hand holding a digital photography camera",
    },
  },
  features: [
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
  ],
};

export const pricingData = {
  hero: {
    title: "Pricing",
    body: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    image: {
      src: PricingHero,
      alt: "silhouette of a person taking a photo at dusk",
    },
  },
  prices: [
    {
      id: 1,
      title: "Basic",
      body: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      monthlyPrice: "$19.00",
      yearlyPrice: "$190.00",
    },
    {
      id: 2,
      title: "Pro",
      body: "More advanced features available. Recommended for photography veterans and professionals.",
      monthlyPrice: "$39.00",
      yearlyPrice: "$390.00",
    },
    {
      id: 3,
      title: "Business",
      body: "Additional features available such as more detailed metrics. Recommended for business owners.",
      monthlyPrice: "$99.00",
      yearlyPrice: "$999.00",
    },
  ],
};

export const pricingTableData = [
  {
    featureName: "Unlimited Story Posting",
    tiers: {
      basic: true,
      pro: true,
      business: true,
    },
  },
  {
    featureName: "Unlimited Photo Upload",
    tiers: {
      basic: true,
      pro: true,
      business: true,
    },
  },
  {
    featureName: "Embedding Custom Content",
    tiers: {
      basic: false,
      pro: true,
      business: true,
    },
  },
  {
    featureName: "Customize Metadata",
    tiers: {
      basic: false,
      pro: true,
      business: true,
    },
  },
  {
    featureName: "Advanced Metrics",
    tiers: {
      basic: false,
      pro: false,
      business: true,
    },
  },
  {
    featureName: "Photo Downloads",
    tiers: {
      basic: false,
      pro: false,
      business: true,
    },
  },
  {
    featureName: "Search Engine Indexing",
    tiers: {
      basic: false,
      pro: false,
      business: true,
    },
  },
  {
    featureName: "Custom Analytics",
    tiers: {
      basic: false,
      pro: false,
      business: true,
    },
  },
];

export const banner = {
  id: 1,
  title: "We're in beta. Get your invite today!",
  body: "",
  image: { src: WeAreInBeta, alt: "ignore" },
  linkLabel: "Get an invite",
  route: "/",
};
