import { Button } from "./button";

interface BuyButtonProps {
  itemName?: string;
  className?: string;
  spiceLevel?: number;
}

export default function BuyNowButton({
  itemName,
  className = "",
  spiceLevel,
}: BuyButtonProps) {
  const phoneNumber = 6281319814263;
  const message = `Halo, Saya ingin memesan ${itemName}${spiceLevel ? `, Level Pedas: ${spiceLevel}` : ""}`;
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
