import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="profile-circle">
        <Image
          src="/image/profile.jpeg"
          alt="Javed Khan"
          width={200}
          height={200}
          priority
        />
        <div className="open-to-work">
          <svg viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath xlinkHref="#circle">OPEN TO WORK</textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="mt-8 text-center max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">Hello, I&apos;m Javed Khan</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I&apos;m a Fullstack Developer passionate about building beautiful and
          functional web applications.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="https://github.com/javedkhan07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/javed-khan07/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/javed_kh4n"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Twitter/X"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:mohammadjaved476221@gmail.com"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
