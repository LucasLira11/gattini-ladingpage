export type Categoria = "rede" | "aparelhos" | "consoles" | "streaming";

export type LinkExterno = {
  label: string;
  url: string;
};

export type Tutorial = {
  /** usado como âncora na URL, ex. #tutorial-iphone */
  id: string;
  /** nome curto da plataforma, mostrado nos blocos de escolha */
  plataforma: string;
  categoria: Categoria;
  /** arquivo em /plataformas, sem extensão; ou `letra` quando não há marca oficial */
  marca?: string;
  marcaSecundaria?: string;
  letra?: string;
  /** ícone lucide, para o que não é uma marca */
  icone?: "wifi" | "monitor";
  titulo: string;
  resumo: string;
  destaque?: string;
  intro?: string;
  antes?: string[];
  passos: string[];
  confirmar?: string;
  limites?: string[];
  links?: LinkExterno[];
};

export const CATEGORIAS: { id: Categoria; label: string }[] = [
  { id: "rede", label: "Wi-Fi e rede" },
  { id: "aparelhos", label: "Celulares e computadores" },
  { id: "consoles", label: "Videogames" },
  { id: "streaming", label: "Streaming e apps" },
];
