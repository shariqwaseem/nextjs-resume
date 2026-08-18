"use client";

import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div>
      <Image
        alt={alt}
        src={src}
        width={120}
        height={120}
        className="aspect-square border-2 border-slate-950 object-cover dark:border-slate-100"
      />
    </div>
  );
};

export default ProfileImage;
