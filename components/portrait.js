import Image from "next/image";
import { site } from "../data/site";

export default function Portrait({ className = "", alt, priority = false }) {
  return (
    <div className={`portrait-circle ${className}`.trim()}>
      <Image
        src={site.portrait}
        alt={alt || `${site.name} portrait`}
        layout="fill"
        objectFit="cover"
        objectPosition="center 18%"
        priority={priority}
      />
    </div>
  );
}
