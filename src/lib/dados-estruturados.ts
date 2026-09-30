/**
 * Dados estruturados (schema.org) da clínica.
 *
 * É o trecho que o Google lê para montar o painel lateral com endereço,
 * telefone, horário e botão de rotas quando alguém pesquisa "Clínica Gattini".
 * Não aparece na tela e não pesa nada, mas atua um passo antes do site — a
 * maior parte das pessoas pesquisa a clínica no Google antes de chegar aqui.
 *
 * Duas coisas ficaram de fora de propósito:
 *
 *  - Avaliações. O perfil tem 5,0 com seis avaliações, mas declarar a própria
 *    nota na marcação é justamente o que as diretrizes do Google chamam de
 *    conteúdo autopromocional, e rende punição manual. A nota que aparece na
 *    busca vem do perfil, não daqui.
 *  - Faixa de preço. Não temos o dado, e inventar em marcação é pior do que
 *    omitir: o Google compara com o que encontra em outras fontes.
 *
 * Todos os valores abaixo foram conferidos no perfil da clínica no Google.
 */

/**
 * Endereço público do site. Enquanto a clínica não apontar o domínio próprio,
 * é o endereço de homologação. TROCAR AQUI na publicação definitiva — os
 * identificadores abaixo usam esta base.
 */
const SITE = "https://gattini-ladingpage.vercel.app";

/** Perfil da clínica no Google, pelo identificador permanente do local. */
const PERFIL_GOOGLE = "https://maps.google.com/?cid=15877131859760372136";

const clinica = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE}/#clinica`,
  name: "Clínica Gattini",
  url: SITE,
  logo: `${SITE}/GATTINI_LOGO_HORIZONTAL_COLOR_1.png`,
  description:
    "Clínica de psicologia, neuropsicologia e desenvolvimento humano em Belo Horizonte, " +
    "para crianças, adolescentes, adultos e famílias.",
  slogan: "Psicologia . Neuropsicologia . Desenvolvimento Humano",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Prudente de Morais, 840, 7.º andar",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "30380-252",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -19.942912,
    longitude: -43.9491289,
  },
  hasMap: PERFIL_GOOGLE,
  // O fixo é o telefone principal, como o Google recomenda para empresa com
  // endereço fixo. Celular e WhatsApp entram como contatos adicionais.
  telephone: "+553132960662",
  email: "clinica@gattini.com.br",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+553132960662",
      contactType: "Recepção",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+5531997392707",
      contactType: "Agendamento",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+5531999340469",
      contactType: "Agendamento",
      availableLanguage: "Portuguese",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Belo Horizonte",
  },
  founder: {
    "@type": "Person",
    name: "Dr. Carlos Gattini",
    jobTitle: "Psicólogo clínico",
  },
  knowsAbout: [
    "Psicoterapia individual",
    "Terapia familiar",
    "Orientação de pais",
    "Avaliação neuropsicológica",
    "Reabilitação cognitiva",
    "Desenvolvimento infantil",
  ],
};

/**
 * Pronto para entrar em <script type="application/ld+json">. O JSON é gerado
 * a partir do objeto acima, e não escrito à mão, para que não exista a chance
 * de a marcação divergir dos dados.
 */
export const dadosEstruturadosDaClinica = JSON.stringify(clinica);
