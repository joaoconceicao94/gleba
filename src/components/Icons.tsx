import { LucideProps } from "lucide-react";

{
  /*TODO FALTA COLOCAR O LOGO CORRETAMENTE - NESTE MOMENTO A IMAGEM ESTÁ PARTIDA*/
}

export const Icons = {
  logo: (props: LucideProps) => (
    <a href="/">
      {" "}
      {/* Add a link around the image */}
      <img src="/public/gleba_icon.svg" />
    </a>
  ),
};
