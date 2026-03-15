export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative mx-auto mb-4 size-16">
          <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
        </div>
        <p className="text-neutral-500">Loading...</p>
      </div>
    </div>
  );
}
