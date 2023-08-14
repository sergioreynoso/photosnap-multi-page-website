import HomeBeautifulStories from "@/public/photography/home/beautiful-stories.jpg";
import HomeDesignedForEveryone from "@/public/photography/home/designed-for-everyone.jpg";

const data = [
  {
    id: 1,
    title: `beautiful  stories 
    every time`,
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    image: {
      src: HomeBeautifulStories,
      alt: "computer laptop on table displaying image of a young child",
    },
    linkLabel: "View the stories",
    route: "stories",
  },
  {
    id: 2,
    title: "designed for everyone",
    body: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    image: {
      src: HomeDesignedForEveryone,
      alt: "man holding a digital cinema camera",
    },
    linkLabel: "View the stories",
    route: "stories",
  },
];

export default data;
