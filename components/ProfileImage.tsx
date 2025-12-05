"use client";

import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div
      onClick={() =>
        alert("Let's assume you just watched an entertaining Instagram story")
      }
      className="cursor-pointer group"
    >
      <Image
        alt={alt}
        src={src}
        width={120}
        height={120}
        className="rounded-full object-cover border-4 border-white dark:border-slate-950 aspect-square "
      />
    </div>
  );
};

export default ProfileImage;
