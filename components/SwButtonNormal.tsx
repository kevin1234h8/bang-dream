import Image from "next/image";
import Link from "next/link";
import React from "react";

type SwButtonNormalProps = {
  redirectUri: string;
  text: string;
};

const SwButtonNormal = ({ redirectUri, text }: SwButtonNormalProps) => {
  return (
    <div>
      <Link
        href={redirectUri}
        className="group relative flex items-center justify-center"
      >
        <Image
          width={250}
          height={250}
          className="relative left-[4px] top-[3px] duration-[0.4s] ease-in-out group-hover:left-2 group-hover:top-2"
          alt="button"
          src={
            "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20285%2075%22%3E%20%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23b92b5d%22%20d%3D%22M17.979%203.561h262.708v53.13l-13.944%2013.87H3.687V17.879L17.979%203.561z%22%2F%3E%3C%2Fsvg%3E"
          }
        />
        <Image
          src={
            "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20278%2068%22%3E%20%3Cpath%20fill%3D%22%23b92b5d%22%20fill-rule%3D%22evenodd%22%20d%3D%22M277.199%2067.2H0V13.999L14%200h263.199v53.199l-14.001%2014h14.001v.001z%22%20opacity%3D%22.8%22%2F%3E%3C%2Fsvg%3E"
          }
          alt=""
          width={250}
          height={250}
          className="absolute"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <div className="relative flex items-center justify-center">
            <div></div>
            <div className="text-md tracking-[2px] text-white">{text}</div>
            <div className="absolute right-[-95px]  flex items-center">
              <div className="h-[1px] w-[1.2rem] bg-white duration-[0.4s] ease-in-out group-hover:w-[0.5rem]"></div>
              <div className="h-[4px] w-[4px] rounded-full bg-white duration-[0.4s] ease-in-out group-hover:h-[.5rem] group-hover:w-[.5rem]"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SwButtonNormal;
