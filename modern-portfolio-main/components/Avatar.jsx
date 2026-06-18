import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex justify-center items-end w-full max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={500}
        height={678}
       className="w-[400px] sm:w-[320px] md:w-[400px] lg:w-[650px] h-auto"
      />
    </div>
  );
};

export default Avatar;