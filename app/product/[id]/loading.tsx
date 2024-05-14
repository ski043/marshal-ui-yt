import { Skeleton } from "@/components/ui/skeleton";

export default function Loadingfile() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div className="col-span-1">
          <Skeleton className="h-[250px] lg:h-[400px] w-full" />
          <Skeleton className="h-[500px] w-full mt-10" />
        </div>

        <div className="col-span-1">
          <Skeleton className="w-full h-[400px]" />
        </div>
      </div>
    </section>
  );
}
