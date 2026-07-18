import { Skeleton } from "@/components/ui/skeleton";


export function LoadingState() {
  return (
    <div className="space-y-4">

      <Skeleton className="h-6 w-48" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

    </div>
  );
}