import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MenuCardSkeleton() {
    return (
        <Card
            className="overflow-hidden rounded-2xl border-0 p-0 bg-orange-600 flex flex-col h-full"
        >
            <div className="relative w-full h-44 sm:h-48 shrink-0">
                <Skeleton className="w-full h-full" />
            </div>

            <div className="flex flex-col flex-1 px-4 pt-4 pb-3 gap-2">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-white text-base sm:text-lg font-bold leading-tight">
                        <Skeleton className="w-3/4 h-5" />
                    </CardTitle>
                    <Skeleton className="w-14 h-5 rounded-full" />
                </div>
                <CardDescription className="text-orange-100 text-xs sm:text-sm font-medium leading-snug">
                    <Skeleton className="w-full h-10" />
                </CardDescription>
            </div>

            <CardFooter className="p-0 mt-auto border-none">
                <Skeleton className="w-full h-12" />
            </CardFooter>
        </Card>
    );
}
