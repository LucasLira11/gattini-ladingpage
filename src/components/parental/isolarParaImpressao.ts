/**
 * Tira da página tudo o que não é a ficha escolhida, para que a impressão
 * (e o "Salvar como PDF" do navegador) contenha só ela.
 *
 * A receita difundida para isto — `* { visibility: hidden }` e trazer o alvo
 * de volta em `position: absolute` — tem dois defeitos sérios:
 *
 *   1. `visibility: hidden` esconde o elemento mas **preserva o espaço dele**.
 *      A página inteira continua ocupando a altura que sempre ocupou, e o PDF
 *      sai com o tutorial na primeira folha seguido de dezenas de folhas em
 *      branco — uma para cada tela do site que continuou ali, invisível.
 *   2. `position: absolute` tira o alvo do fluxo, então o container não cresce
 *      com ele: um tutorial mais alto que uma folha é cortado no fim da primeira.
 *
 * Aqui a página é podada de verdade. Subindo do alvo até o <body>, cada irmão
 * que ficou fora do caminho recebe `display: none` (via `data-print-oculto`) e
 * some do layout; os ancestrais do caminho ficam marcados com
 * `data-print-cadeia` para o CSS zerar o espaçamento deles. O documento passa a
 * ter exatamente a altura do conteúdo impresso, no fluxo normal.
 *
 * Devolve a função que desfaz tudo.
 */
export function isolarParaImpressao(alvo: HTMLElement): () => void {
  const tocados: HTMLElement[] = [];

  let filho: HTMLElement = alvo;
  let pai = filho.parentElement;

  while (pai) {
    for (const irmao of Array.from(pai.children)) {
      if (irmao !== filho && irmao instanceof HTMLElement) {
        irmao.dataset["printOculto"] = "";
        tocados.push(irmao);
      }
    }

    pai.dataset["printCadeia"] = "";
    tocados.push(pai);

    if (pai === document.body) break;

    filho = pai;
    pai = filho.parentElement;
  }

  return () => {
    for (const el of tocados) {
      delete el.dataset["printOculto"];
      delete el.dataset["printCadeia"];
    }
  };
}
