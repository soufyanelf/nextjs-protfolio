import React, { FunctionComponent } from "react";
import Link from "next/link";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="mt-2 sm:py-28 py-40 flex flex-col justify-center items-center gap-4">
      <h1 className="sm:text-9xl text-8xl font-bold">404</h1>
      <h2 className="text-center">
        You didn{"'"}t break the Internet, But we can{"'"}t find what you are
        looking for.
      </h2>
      <p className="text-sm font-initial text-center">
        Go back to{" "}
        <Link href="/" legacyBehavior>
          <a className="underline text-blue-400 font-bold">home page</a>
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
