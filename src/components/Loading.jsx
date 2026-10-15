export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3">
      <div className="size-12 animate-spin rounded-full border-4 border-gray-200 border-t-pink-600" />
      <p className="text-gray-500">Loading technologies...</p>
    </div>
  );
}