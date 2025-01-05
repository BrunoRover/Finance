import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  userCanAddTransaction?: boolean;
  isFirstCard?: boolean; // Adiciona a prop para verificar se é o primeiro card
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
  userCanAddTransaction,
  isFirstCard = false, // Definido como false por padrão
}: SummaryCardProps) => {
  return (
    <Card className="flex flex-col">
      {/* Cabeçalho com ícone e título, só no primeiro card "large" */}
      <CardHeader
        className={`${
          isFirstCard && size === "large"
            ? "flex-col items-start pb-4" // Layout para o primeiro card "large"
            : "flex-row items-center gap-4" // Layout padrão
        }`}
      >
        <div className="flex-shrink-0">{icon}</div>
        <p
          className={`text-base font-medium ${
            size === "small" ? "text-muted-foreground" : "text-white opacity-70"
          }`}
        >
          {title}
        </p>
      </CardHeader>

      {/* Conteúdo com valor e botão (opcional) */}
      <CardContent className="flex flex-col justify-between md:flex-row md:items-center">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {/* Botão para adicionar transação */}
        {size === "large" && isFirstCard && userCanAddTransaction && (
          <div className="mt-4 flex-shrink-0 md:ml-4 md:mt-0 md:flex md:justify-center">
            <AddTransactionButton
              userCanAddTransaction={userCanAddTransaction}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
