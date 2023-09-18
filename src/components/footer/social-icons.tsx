import Link from "next/link";
import Image from "next/image";
import FacebookWhite from "@/public/social_media_icons/facebook_white.png";
import FacebookColor from "@/public/social_media_icons/facebook_color.png";
import YoutubeWhite from "@/public/social_media_icons/youtube_white.png";
import YoutubeColor from "@/public/social_media_icons/youtube_color.png";
import TwitterWhite from "@/public/social_media_icons/twitter_white.png";
import TwitterColor from "@/public/social_media_icons/twitter_color.png";
import PinterestWhite from "@/public/social_media_icons/pinterest_white.png";
import PinterestColor from "@/public/social_media_icons/pinterest_color.png";
import InstagramWhite from "@/public/social_media_icons/instagram_white.png";
import InstagramColor from "@/public/social_media_icons/instagram_color.png";

export default function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Link href="#" className="group relative h-5 w-5" aria-label="Facebook">
        <Image
          src={FacebookWhite}
          alt="Facebook Logo"
          className="absolute group-hover:hidden"
        />
        <Image
          src={FacebookColor}
          alt="Facebook Logo"
          className="hidden group-hover:block"
        />
      </Link>
      <Link href="#" className="group relative h-5 w-5" aria-label="Youtube">
        <Image
          src={YoutubeWhite}
          alt="Youtube Logo"
          className="absolute group-hover:hidden"
        />
        <Image
          src={YoutubeColor}
          alt="Youtube Logo"
          className="hidden group-hover:block"
        />
      </Link>
      <Link href="#" className="group relative h-5 w-5" aria-label="Twitter">
        <Image
          src={TwitterWhite}
          alt="Twitter Logo"
          className="absolute group-hover:hidden"
        />
        <Image
          src={TwitterColor}
          alt="Twitter Logo"
          className="hidden group-hover:block"
        />
      </Link>
      <Link href="#" className="group relative h-5 w-5" aria-label="Pinterest">
        <Image
          src={PinterestWhite}
          alt="Pinterest Logo"
          className="absolute group-hover:hidden"
        />
        <Image
          src={PinterestColor}
          alt="Pinterest Logo"
          className="hidden group-hover:block"
        />
      </Link>
      <Link href="#" className="group relative h-5 w-5" aria-label="Instagram">
        <Image
          src={InstagramWhite}
          alt="Instagram Logo"
          className="absolute group-hover:hidden"
        />
        <Image
          src={InstagramColor}
          alt="Instagram Logo"
          className="hidden group-hover:block"
        />
      </Link>
    </div>
  );
}
