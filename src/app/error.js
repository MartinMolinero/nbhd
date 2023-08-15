"use client";

const Error = () => {
    return (
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">Failed</h1>
  
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Try again!
          </p>
        </div>
      </div>
    );
  }

export default Error