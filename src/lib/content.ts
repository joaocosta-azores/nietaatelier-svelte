import hero from './assets/hero.jpeg'
import logo from './assets/logo.jpg'
import aboutImage from './assets/about-nieta.jpeg'

export type Lang = 'en' | 'pt'

export const siteUrl = 'https://www.nietaatelier.com'

export type StaticPageKey =
  | 'about'
  | 'work'
  | 'walkingby'
  | 'termsandconditions'
  | 'privacypolicy'

export type StaticPageEntry = {
  lang: Lang
  page: string
}

type LinkItem = {
  label: string
  href: string
  external?: boolean
}

type LocaleContent = {
  code: Lang
  languageLabel: string
  switchLabel: string
  homePath: `/${Lang}/`
  logo: string
  hero: string
  aboutImage: string
  nav: LinkItem[]
  infoLinks: LinkItem[]
  office: {
    title: string
    lines: string[]
  }
  social: LinkItem[]
  footerCopy: string
  home: {
    title: string
    kicker: string
    ctaLabel: string
    ctaHref: string
    previewTitle: string
    previewText: string
    previewCta: string
  }
  about: {
    title: string
    person: string
    html: string
  },
  work: {
    title: string
    html: string
  },
  walkingby: {
    title: string
    html: string
  },
  termsandconditions: {
    title: string
    html: string
  },
  privacypolicy: {
    title: string
    html: string
  },
  constactus: {
    title: string
    html: string
  }
}

const officeLines = [
  'TERINOV - Parque de Ciencia e Tecnologia da Ilha Terceira, Sala 12',
  'Canada de Belem, 9700-702 Angra do Heroismo Portugal',
]

const socialLinks: LinkItem[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/nietaatelier' },
  { label: 'Instagram', href: 'https://www.instagram.com/nietaatelier' },
]

export const locales: Record<Lang, LocaleContent> = {
  en: {
    code: 'en',
    languageLabel: 'English',
    switchLabel: 'Portugues PT',
    homePath: '/en/',
    logo,
    hero,
    aboutImage,
    nav: [
      { label: 'About Us', href: '/en/aboutus' },
      { label: 'Work | Capsule Collections', href: '/en/work' },
      { label: 'Walking By', href: '/en/walkingby' },
      { label: 'Azores Ecoblue Project', href: 'https://azores-ecoblue-website.vercel.app/', external: true },
    ],
    infoLinks: [
      { label: 'Terms and conditions', href: '/en/terms-and-conditions' },
      { label: 'Privacy Policy', href: '/en/privacy-policy' },
      { label: 'Contact us', href: 'mailto:nieta@nietaatelier.com', external: true },
    ],
    office: { title: 'Office', lines: officeLines },
    social: socialLinks,
    footerCopy: '© 2026 Nieta Atelier - all rights reserved.',
    home: {
      title: '"O Futuro esta na criatividade sustentavel"',
      kicker: 'Editorial sustainability',
      ctaLabel: 'New Atelier',
      ctaHref: 'https://ecobluegroup.com/pt-pt/nieta-atelier-collection/',
      previewTitle: 'About Us',
      previewText: '"O futuro esta na criatividade sustentavel."',
      previewCta: 'Read More',
    },
    about: {
      title: 'About Us',
      person: 'Nieta da Ponte Rocha',
      html: `
        <p>Nieta Atelier®: Innovation and Sustainability in Textile Design and Architecture</p>
        <p>Sustainability, once seen as an obstacle to business growth, has become a fundamental pillar for the future of the planet and industries. Since the founding of Nieta Atelier®, licensed architect and entrepreneur Nieta da Ponte Rocha has always understood the potential of waste as raw material for creating innovative and sustainable products.</p>
        <p>Born in Angra do Heroismo, on Terceira Island, Azores, Nieta began her academic journey at the University of Minho, where she earned a degree in Architecture/Applied Research. Her passion for sustainability and eco-design led her to further her studies with a master's degree focused on developing an "Eco Cabin Model for Tourism Integrating Circular Economy Principles." With an innovative vision, Nieta realized that industrial surpluses could be transformed into exclusive design pieces, promoting the valorization of resources that would otherwise be discarded.</p>
        <p>In 2017, she solidified this approach by establishing Nieta Atelier® in Guimaraes, a region with a strong tradition in the textile industry. Her work stood out for its ability to repurpose high-quality textile and organic materials, applying artisanal weaving techniques to create unique and distinctive products. In 2019, she received the prestigious Mobis "Woman of Success" award, recognizing her contribution to innovation in sustainable design.</p>
        <p>Over the years, Nieta Atelier® has expanded its international presence, participating in renowned fairs such as Formex (Stockholm), Maison&amp;Objet (Paris), and Heimtextil (Frankfurt), frequently being referenced as a trendsetting brand in the sector. Meanwhile, the founder returned to her roots in the Azores, where she launched the Circular Blue project, a sustainability lab that combines craftsmanship, innovation, and circular economy principles.</p>
        <p>The "Simple Powerful Feel Azores" collection reflects the essence of Azorean landscapes, incorporating elements such as pineapple and tea to create pieces that honor local culture and resources. With a strong environmental commitment, Nieta Atelier® became part of the Ellen MacArthur Foundation, the world's largest platform dedicated to the circular economy.</p>
        <p>In 2022, the commitment to sustainable innovation led to the launch of the AZORES ECOBLUE project, funded by EEA Grants and the Portuguese Directorate-General for Maritime Policy. This revolutionary initiative aims to transform marine and fishing industry waste, such as ropes and invasive algae, into new textile fibers and insulation materials for the construction sector. The project not only drives the circular and blue economy but also proves that marine waste can be a valuable source of revenue and innovation.</p>
        <p>With a journey marked by creativity, resilience, and commitment to the planet, Nieta da Ponte Rocha continues to demonstrate that sustainability and design can go hand in hand, creating eco-friendly and economically viable solutions for the future.</p>
      `,
    },
    work: {
      title: 'Work',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
    walkingby: {
      title: 'Walking By',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
    termsandconditions: {
      title: 'Terms and Conditions',
      html: `
        <p>For your safety and convenience, please read our terms of order, payment and delivery.</p>
        <p>All prices you find in our online store include VAT, at the prevailing rate there may be changes in prices on the website without prior notice.</p>
        <p>After submitting your request, you will receive a confirmation email with payment details.</p>
        <p>Payment is made by bank transfer at the time of the order.</p>
        <p>Your order is confirmed after sending us a copy of the payment by email (in 48hrs).</p>
        <p>IMPORTANT: exceptionally, all orders may take 20 (twenty) business days to be delivery after payment.</p>
        <p>30 (thirty) business days for all one-off pieces orders</p>
        <p>All orders are sent by registered mail via CTT Expresso.</p>
        <p>Shipping costs vary according to location and weight of the package ( domestic between 3.00 to 5.00 euros; international-budget request).</p>
        <p>In case of damage at the reception, please email us with the picture of the piece within 2 (two) business days.</p>
        <p>We do not accept returns.</p>
      `,
    },
    privacypolicy: {
      title: 'Privacy Policy',
      html: `
        <p>A 25 de Maio de 2018, entrou em vigor na Uniao Europeia o novo "Regulamento Geral de Protecao de Dados" (RGPD), fornecendo diretrizes especificas sobre como os dados pessoais sao recolhidos, tratados e armazenados.</p>
        <p>Achamos que devera saber de uma forma clara e transparente, que informacoes pessoais sao recolhidas por nos, porque sao recolhidas e como podera solicitar uma copia completa das mesmas ou ordenar a sua destruicao.</p>
        <p>Queremos fornecer-lhe informacoes claras e completas sobre que dados pessoais recolhemos em simbiotico.eco e como pode gerir esses dados. Por isso apresentamos uma politica de privacidade detalhada, abrangente e transparente.</p>
        <p>Esta politica de privacidade foi actualizada a 21/Agosto/2018.</p>
        <p>Se tiver alguma duvida sobre a nossa politica de privacidade ou relativa ao tratamento dos seus dados pessoais, por favor escreva-nos por e-mail para: <a href="mailto:nieta@nietaatelier.com">nieta@nietaatelier.com</a></p>
        <h2>Quem Somos</h2>
        <p>O endereco do nosso site e: <a href="https://www.nietaatelier.com/">https://www.nietaatelier.com</a></p>
        <h2>Uso de Informacao</h2>
        <p>O <b>Nieta Atelier</b> leva a privacidade dos seus utilizadores e visitantes muito a serio.</p>
        <h2>Cookies</h2>
        <p>Ao aceder ao site <a href="http://www.nietaatelier.com/">www.nietaatelier.com</a>, esta a aceitar o uso de cookies para optimizar a sua experiencia de navegacao e analisar a utilizacao nosso site.</p>
        <h2><b>Como gerir e remover cookies</b></h2>
        <p>Se estiver a visitar o nosso site atraves de um navegador, podera restringir, bloquear ou remover cookies atraves das configuracoes do seu navegador.</p>
        <h2><b>Formularios de contacto</b></h2>
        <p>Quando um utilizador preenche o formulario de contato no nosso site, as unicas informacoes pessoais recolhidas sao nome, endereco de e-mail e endereco IP.</p>
        <h2><b>Newsletters</b></h2>
        <p>Quando se inscrever para servicos gratuitos, como distribuicao de noticias por e-mail ou newsletters, o utilizador concorda em receber produtos e anuncios especiais do Nieta Atelier.</p>
        <h2><b>Seguranca e Proteccao de Dados</b></h2>
        <p>Utilizamos procedimentos de seguranca rigorosos no armazenamento e utilizacao da informacoes que nos e fornecida pelos utilizadores.</p>
        <h2><strong>Questoes?</strong></h2>
        <ul>
          <li>Se tiver alguma duvida sobre esta politica de privacidade, por favor escreva-nos por e-mail para: nieta@nietaatelier.com</li>
          <li>Para qualquer questao adicional sobre o RGPD, por favor dirija-se a www.cnpd.pt.</li>
        </ul>
        <p>Leia tambem os nossos <a href="/en/terms-and-conditions">Termos de Utilizacao</a>.</p>
      `,
    },
    constactus: {
      title: 'Contact Us',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
  },
  pt: {
    code: 'pt',
    languageLabel: 'Portugues PT',
    switchLabel: 'English',
    homePath: '/pt/',
    logo,
    hero,
    aboutImage,
    nav: [
      { label: 'Sobre Nos', href: '/pt/sobrenos' },
      { label: 'Work | Colecoes Capsula', href: '/pt/trabalho' },
      { label: 'Walking By', href: '/pt/walkingby' },
      { label: 'Azores Ecoblue Project', href: 'https://azores-ecoblue-website.vercel.app/', external: true },
    ],
    infoLinks: [
      { label: 'Termos e condicoes', href: '/pt/termos-e-condicoes' },
      { label: 'Politica de Privacidade', href: '/pt/politica-de-privacidade' },
      { label: 'Contacte-nos', href: 'mailto:nieta@nietaatelier.com', external: true },
    ],
    office: { title: 'Office', lines: officeLines },
    social: socialLinks,
    footerCopy: '© 2026 Nieta Atelier - all rights reserved.',
    home: {
      title: '"O Futuro esta na criatividade sustentavel"',
      kicker: 'Criatividade editorial',
      ctaLabel: 'New Atelier',
      ctaHref: 'https://ecobluegroup.com/pt-pt/nieta-atelier-collection/',
      previewTitle: 'About Us',
      previewText: '"O futuro esta na criatividade sustentavel."',
      previewCta: 'Read More',
    },
    about: {
      title: 'Sobre Nos',
      person: 'Nieta da Ponte Rocha',
      html: `
        <p>Nieta Atelier®: Inovacao e Sustentabilidade no Design Textil e Arquitetura</p>
        <p>A sustentabilidade, outrora vista como um entrave ao crescimento empresarial, tornou-se um pilar fundamental para o futuro do planeta e das industrias. Desde a fundacao da Nieta Atelier®, licenciada em arquitetura e empreendedora Nieta da Ponte Rocha sempre compreendeu o potencial dos residuos como materia-prima para a criacao de produtos inovadores e sustentaveis.</p>
        <p>Natural de Angra do Heroismo, na ilha Terceira, Acores, Nieta iniciou o seu percurso academico na Universidade do Minho, onde se licenciou em Arquitetura/Investigacao Aplicada. A sua paixao pela sustentabilidade e pelo eco-design levou-a a aprofundar conhecimentos com um mestrado focado no desenvolvimento de um "Modelo de Eco Cabana para turismo integrando principios de economia circular".</p>
        <p>Em 2017, consolidou esta abordagem ao estabelecer a Nieta Atelier® em Guimaraes, uma regiao com forte tradicao na industria textil. O seu trabalho destacou-se pela capacidade de reutilizar materiais texteis e organicos de alta qualidade, aplicando tecnicas artesanais de tecelagem para criar produtos diferenciadores. Em 2019, recebeu o prestigioso premio Mobis "Woman of Success".</p>
        <p>Ao longo dos anos, a Nieta Atelier® expandiu a sua presenca internacional, participando em feiras de renome como a Formex, Maison&amp;Objet e Heimtextil. Em paralelo, a fundadora regressou as suas origens nos Acores, onde lancou o projeto Circular Blue.</p>
        <p>A colecao "Simple Powerful Feel Azores" reflete a essencia das paisagens acores, incorporando elementos como o ananas e o cha para criar pecas que homenageiam a cultura e os recursos locais.</p>
        <p>Em 2022, a aposta na inovacao sustentavel consolidou-se com o projeto Azores Ecoblue. Esta iniciativa visa transformar residuos do setor do mar e da pesca em novas fibras texteis e materiais de isolamento para a construcao civil.</p>
        <p>Com um percurso marcado pela criatividade, resiliencia e compromisso com o planeta, Nieta da Ponte Rocha continua a demonstrar que a sustentabilidade e o design podem andar de maos dadas.</p>
      `,
    },
    work: {
      title: 'Work',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
    walkingby: {
      title: 'Walking By',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
    termsandconditions: {
      title: 'Termos e Condições',
      html: `
          <p>Se nao concorda com qualquer parte do T&C, entao nao podera usar o Nieta Atelier.com de forma alguma.</p>
          <h2>CONTAS</h2>
          <p>Todas as pessoas que criem uma conta neste site deverao fornecer informacoes precisas, completas e atualizadas.</p>
          <p>O criador da conta e responsavel por proteger a palavra passe usada para aceder ao Nieta Atelier.com.</p>
          <h2>Exactidao da Informacao</h2>
          <p>Os utilizadores deste site garantem que os dados pessoais fornecidos sao verdadeiros e precisos.</p>
          <h2><strong>ALTERACOES</strong></h2>
          <p>O <strong>Nieta Atelier</strong> reserva-se o direito de fazer alteracoes neste site, politicas, termos e condicoes a qualquer momento.</p>
          <h2>Encomendas, pagamentos e expedicao</h2>
          <p>Todos os precos que encontrara na nossa loja online incluem IVA a taxa em vigor.</p>
          <p>Poderao ocorrer alteracoes no valor na pagina, sem aviso previo.</p>
          <p>Apos submeter o pedido, recebera um email de confirmacao com os detalhes de pagamento.</p>
          <p>O pagamento e feito por transferencia bancaria no momento da sua encomenda.</p>
          <p>A sua encomenda sera confirmada e processada apos o envio de comprovativo de pagamento, por email num espaco de tempo de 48 horas.</p>
          <p>IMPORTANTE: excepcionalmente as encomendas poderao demorar 20 dias uteis para serem entregues, apos pagamento. Poderao demorar 30 dias uteis para encomenda de uma peca so.</p>
          <p>Todas as encomendas sao enviadas por correio registado via CTT Expresso.</p>
          <p>Os custos de expedicao poderao variar de acordo com o local e o peso da encomenda.</p>
          <p>No caso da encomenda chegar danificada, por favor envie-nos um email com a fotografia da peca, no espaco de dois dias.</p>
          <p>Nao aceitamos devolucoes.</p>
          <p>Se for um revendedor, por favor <a href="mailto:nieta@nietaatelier.com">contacte-nos</a>.</p>
      `,
    },
    privacypolicy: {
      title: 'Políticas de Privacidade',
      html: `
        <p>A 25 de Maio de 2018, entrou em vigor na Uniao Europeia o novo "Regulamento Geral de Protecao de Dados" (RGPD), fornecendo diretrizes especificas sobre como os dados pessoais sao recolhidos, tratados e armazenados.</p>
        <p>Achamos que devera saber de uma forma clara e transparente, que informacoes pessoais sao recolhidas por nos, porque sao recolhidas e como podera solicitar uma copia completa das mesmas ou ordenar a sua destruicao.</p>
        <p>Queremos fornecer-lhe informacoes claras e completas sobre que dados pessoais recolhemos em simbiotico.eco e como pode gerir esses dados.</p>
        <h2>Quem Somos</h2>
        <p>O endereco do nosso site e: <a href="https://www.nietaatelier.com/">https://www.nietaatelier.com</a></p>
        <h2>Uso de Informacao</h2>
        <p>O <b>Nieta Atelier</b> leva a privacidade dos seus utilizadores e visitantes muito a serio.</p>
        <h2>Cookies</h2>
        <p>Ao aceder ao site <a href="http://www.nietaatelier.com/">www.nietaatelier.com</a>, esta a aceitar o uso de cookies para optimizar a sua experiencia de navegacao e analisar a utilizacao nosso site.</p>
        <h2><b>Como gerir e remover cookies</b></h2>
        <p>Se estiver a visitar o nosso site atraves de um navegador, podera restringir, bloquear ou remover cookies atraves das configuracoes do seu navegador.</p>
        <h2><b>Formularios de contacto</b></h2>
        <p>Quando um utilizador preenche o formulario de contato no nosso site, as unicas informacoes pessoais recolhidas sao nome, endereco de e-mail e endereco IP.</p>
        <h2><b>Newsletters</b></h2>
        <p>Quando se inscrever para servicos gratuitos, como distribuicao de noticias por e-mail ou newsletters, o utilizador concorda em receber produtos e anuncios especiais do Nieta Atelier.</p>
        <h2><b>Seguranca e Proteccao de Dados</b></h2>
        <p>Utilizamos procedimentos de seguranca rigorosos no armazenamento e utilizacao da informacoes que nos e fornecida pelos utilizadores.</p>
        <h2><strong>Questoes?</strong></h2>
        <ul>
          <li>Se tiver alguma duvida sobre esta politica de privacidade, por favor escreva-nos por e-mail para: nieta@nietaatelier.com</li>
          <li>Para qualquer questao adicional sobre o RGPD, por favor dirija-se a www.cnpd.pt.</li>
        </ul>
        <p>Leia tambem os nossos <a href="/pt/termos-e-condicoes">Termos de Utilizacao</a>.</p>
      `,
    },
    constactus: {
      title: 'Contacte-nos',
      html: `
        <p>This page is under maintenance.</p>
      `,
    },
  },
}

export const supportedLangs = Object.keys(locales) as Lang[]

const staticPageSlugs: Record<StaticPageKey, Record<Lang, string>> = {
  about: {
    en: 'aboutus',
    pt: 'sobrenos',
  },
  work: {
    en: 'work',
    pt: 'trabalho',
  },
  walkingby: {
    en: 'walkingby',
    pt: 'walkingby',
  },
  termsandconditions: {
    en: 'terms-and-conditions',
    pt: 'termos-e-condicoes',
  },
  privacypolicy: {
    en: 'privacy-policy',
    pt: 'politica-de-privacidade',
  },
}

const allStaticPageSlugs = new Set(Object.values(staticPageSlugs).flatMap((slugByLang) => Object.values(slugByLang)))

const staticSlugToKey = Object.entries(staticPageSlugs).reduce(
  (acc, [pageKey, slugByLang]) => {
    acc.en[slugByLang.en] = pageKey as StaticPageKey
    acc.pt[slugByLang.pt] = pageKey as StaticPageKey
    return acc
  },
  {
    en: {} as Record<string, StaticPageKey>,
    pt: {} as Record<string, StaticPageKey>,
  },
)

const contentPageKeys = {
  termsandconditions: {
    en: 'terms-and-conditions',
    pt: 'termos-e-condicoes',
  },
  privacypolicy: {
    en: 'privacy-policy',
    pt: 'politica-de-privacidade',
  },
} as const

const contentSlugToKey = Object.values(contentPageKeys).reduce(
  (acc, page) => {
    acc[page.en] = page
    acc[page.pt] = page
    return acc
  },
  {} as Record<string, (typeof contentPageKeys)[keyof typeof contentPageKeys]>,
)

export function getAlternatePath(pathname: string, targetLang: Lang) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return `/${targetLang}/`
  }

  const [lang, sectionOrSlug, slug] = segments

  if (!lang || (lang !== 'en' && lang !== 'pt')) {
    return pathname
  }

  if (segments.length === 2) {
    const pageKey = staticSlugToKey[lang][sectionOrSlug]

    if (pageKey) {
      return getStaticPagePath(targetLang, pageKey)
    }
  }

  if (sectionOrSlug === 'content' && slug) {
    const page = contentSlugToKey[slug]

    if (page) {
      return `/${targetLang}/${page[targetLang]}`
    }
  }

  return pathname.replace(/^\/(en|pt)(?=\/|$)/, `/${targetLang}`)
}

export function getStaticPagePath(lang: Lang, pageKey: StaticPageKey) {
  return `/${lang}/${staticPageSlugs[pageKey][lang]}`
}

export function getStaticPageKey(lang: Lang, slug: string) {
  return staticSlugToKey[lang][slug]
}

export function getStaticPageEntries(): StaticPageEntry[] {
  const slugMaps = Object.values(staticPageSlugs) as Array<Record<Lang, string>>

  return supportedLangs.flatMap((lang) =>
    slugMaps.map((slugByLang) => ({ lang, page: slugByLang[lang] })),
  )
}

export function isStaticPageSlug(slug: string) {
  return allStaticPageSlugs.has(slug)
}

export function getLocale(lang: Lang): LocaleContent {
  return locales[lang]
}
