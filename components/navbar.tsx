"use client";
import {
  PassageUserInfo,
  getCurrentUserInfo,
} from "@/actions/getCurrentUserInfo";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Icons } from "./Icons";

import { UserAccountNav } from "./user-account-nav";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [userInfo, setUserInfo] = useState<PassageUserInfo | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessionInfo = async () => {
      const sessionInfo = await getCurrentUserInfo();
      setUserInfo(sessionInfo.userInfo);
      setIsLoading(false);
    };

    fetchSessionInfo();
  }, []);

  if (isLoading) {
    // Render loading state if the session information is still being fetched
    return (
      <div className="pt-5 pb-2 shadow-md dark:shadow-sm dark:shadow-blue-50 px-[10vw] flex justify-between fixed top-0 left-0 w-full backdrop-blur-sm">
        <div className="w-full flex justify-between">
          <Link href="/">
            <div className="inline-flex items-center hover:cursor-pointer mt-1 ">
              <h1 className="font-semibold text-xl">Grafbase x Passage</h1>
            </div>
          </Link>
          <div className="inline-flex items-center">
            <a
              href="https://github.com/trace2798/passage_fullstack"
              target="_blank"
              aria-label="github repo link"
            >
              <Icons.GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
            </a>
            <ModeToggle />
            <Link href="/auth" className="ml-2">
              <Button>
                <ClipLoader color="#36d7b7" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-5 pb-2 shadow-md dark:shadow-sm dark:shadow-blue-50 px-[10vw] flex justify-between fixed top-0 left-0 w-full backdrop-blur-sm">
        {!userInfo ? (
          <div className="w-full flex justify-between">
            <Link href="/">
              <div className="inline-flex items-center hover:cursor-pointer mt-1">
                <h1 className="font-semibold text-xl">Grafbase x Passage</h1>
              </div>
            </Link>
            <div className="inline-flex items-center">
              <a
                href="https://github.com/trace2798/passage_fullstack"
                target="_blank"
                aria-label="github repo link"
              >
                <Icons.GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
              </a>
              <ModeToggle />
              <Link href="/auth" className="ml-2">
                <Button>Log In</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between ">
              <Link href="/">
                <div className="inline-flex items-center hover:cursor-pointer mt-1">
                  <h1 className="font-semibold text-xl">Grafbase x Passage</h1>
                </div>
              </Link>
              <div className="inline-flex items-center">
                <a
                  href="https://github.com/trace2798/passage_grafbase_integration"
                  target="_blank"
                  aria-label="github repo link"
                >
                  <Icons.GithubIcon className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />
                </a>
                <ModeToggle />
                <UserAccountNav
                  email={userInfo?.email}
                  created_at={userInfo?.created_at}
                  login_count={userInfo?.login_count}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
