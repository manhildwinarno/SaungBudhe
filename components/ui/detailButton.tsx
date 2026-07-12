import Link from "next/link";
import { Button } from "./button";

interface Props {
  id: number;
  className: string;
}

export default function DetailButton({ className, id }: Props) {
  return (
    <Button className={className}>
      <Link href={`/menu/${id}`} className="w-full" rel="noopener noreferrer">
        See Details
      </Link>
    </Button>
  );
}
