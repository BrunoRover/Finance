"use client";

import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const AcquirePlanButton = () => {
  const { user } = useUser();
  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";

  if (hasPremiumPlan) {
    return (
      <Button className="w-full rounded-full font-bold" variant="link">
        <Link
          href="https://api.whatsapp.com/send?phone=5548998394525&text=Tenho%20interesse%20em%20gerenciar%20o%20Plano!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gerenciar plano
        </Link>
      </Button>
    );
  }

  return (
    <Button className="w-full rounded-full font-bold">
      <Link
        href="https://api.whatsapp.com/send?phone=5548998394525&text=Tenho%20interesse%20em%20adquirir%20o%20Plano!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adquirir plano
      </Link>
    </Button>
  );
};

export default AcquirePlanButton;
