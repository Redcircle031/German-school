'use client';

interface SkipLinkProps {
  text: string;
}

export default function SkipLink({ text }: SkipLinkProps) {
  // Always render the same content on server and client to avoid hydration mismatch
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-red-600 focus:px-4 focus:py-2 focus:text-white"
    >
      {text}
    </a>
  );
}
