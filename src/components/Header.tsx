import { BellOutlined, MoonOutlined, SearchOutlined } from "@ant-design/icons";

import CustomImage from "./CustomImage";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full py-5 bg-blue-300 text-white">
      <Link href={`/`}>
        <p>logo</p>
      </Link>

      <div className="flex items-center justify-between space-x-5 ml-5 mr-60">
        <Link href={`/`}>Learn</Link>
        <Link href={`/`}>Mobile app</Link>
        <Link href={`/courses`}>Courses</Link>
        <Link href={`/`}>Dictionary</Link>
      </div>

      <div className="flex items-center justify-between space-x-3">
        <SearchOutlined />
        <MoonOutlined />
        <BellOutlined />
        <div className="flex items-center">
          <CustomImage
            src="/images/england-logo.jpg"
            alt="logo"
            width={20}
            height={20}
          />
          <p className="ml-2">english</p>
        </div>
      </div>

      <div className="ml-5">
        <p>Profile</p>
      </div>
    </div>
  );
}
