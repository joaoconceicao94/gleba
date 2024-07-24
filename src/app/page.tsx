import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  Wheat,
  Leaf,
  CheckCircle,
  Ghost,
  LoaderPinwheel,
  Cloudy,
} from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "CEREAIS 100% LOCAIS",
    Icon: Wheat,
    description:
      "Gleba é o regresso às origens e aos cereais cultivados nos nossos solos, com variedades antigas e sustentáveis.",
  },

  {
    name: "MOAGEM EM MÓS DE PEDRA",
    Icon: LoaderPinwheel,
    description:
      "Moer a nossa própria farinha permite-nos usá-la no pico máximo da sua qualidade, sem recurso a quaisquer corantes e conservantes.",
  },

  {
    name: "FERMENTAÇÃO NATURAL",
    Icon: Cloudy,
    description:
      "O nosso pão é fermentado lentamente com massa velha, durante cerca de 24 horas. Este processo facilita enormemente a sua digestão.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            O melhor pão artesanal entregue{" "}
            <span className="text-yellow-600">em casa</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bem-vindo à Gleba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="/products" className={buttonVariants()}>
              Ver populares
            </a>
            <Button variant={Ghost}>Todos os produtos &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products*/}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 gb-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
