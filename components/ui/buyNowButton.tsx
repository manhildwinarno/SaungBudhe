import { Button } from "./button";

interface BuyButtonProps {
  itemName?: string;
  className?: string;
}

export default function BuyNowButton({
  itemName,
  className = "",
}: BuyButtonProps) {
  const phoneNumber = 6281319814263;
  const message = `Halo, Saya ingin memesan ${itemName ? itemName : "beberapa menu berikut:\n1. "}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button className={className}>
      <a
        href={whatsappUrl}
        target="_blank"
        className="w-full"
        rel="noopener noreferrer"
      >
        Buy Now
      </a>
    </Button>
  );
}
