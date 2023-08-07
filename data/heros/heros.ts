import HomeCreateAndShare from "@/public/photography/home/create-and-share.jpg";
import StoriesMoonOfAppalachia from "@/public/photography/stories/moon-of-appalachia.jpg";
import FeaturesHero from "@/public/photography/features/features-hero.jpg";
import PricingHero from "@/public/photography/pricing/pricing-hero.jpg";

const data = {
  home: {
    title: "create and share your photo stories.",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    linkLabel: "Get an invite",
    image: {
      src: HomeCreateAndShare,
      alt: "man standing on a peer overlooking a lake",
    },
  },
  stories: {
    date: "March 2nd 2020",
    title: "Hazy Full Moon Of Appalachia",
    eyebrow: "Last Months's featured story",
    body: "The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
    author: "John Appleseed",
    linkLabel: "Read the story",
    image: {
      src: StoriesMoonOfAppalachia,
      alt: "bright full moon over a mountain range",
    },
  },
  features: {
    title: "Features",
    body: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    image: {
      src: FeaturesHero,
      alt: "close up of a hand holding a digital photography camera",
    },
  },
  pricing: {
    title: "Pricing",
    body: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    image: {
      src: PricingHero,
      alt: "silhouette of a person taking a photo at dusk",
    },
  },
};

export default data;
