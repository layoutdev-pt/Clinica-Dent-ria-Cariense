export const BRAND = "#1C9FD6";
export const NAVY = "#0D1E2C";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contacto", href: "/contactos" },
] as const;

export const CLINICS = [
  {
    key: "caria",
    name: "Clínica Dentária Caria",
    tag: "Sede Principal",
    phone: "275 471 751",
    mobile: "927 402 729",
    address: "Cerca do Conde, Lote 41, Loja B/D",
    postal: "6250-111 Caria",
    img: "/img/clinic-caria-ext.png",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.5!2d-7.3679504!3d40.2958249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d196bd57c11a5%3A0x322f263faff1fe34!2sCl%C3%ADnica+Dent%C3%A1ria+Cariense!5e0!3m2!1spt!2spt!4v1",
  },
  {
    key: "unhais",
    name: "Clínica Dentária Unhais da Serra",
    tag: "",
    phone: "275 971 342",
    mobile: "927 402 728",
    address: "Avenida 1º de Maio, 43-A",
    postal: "6215-517 Unhais da Serra",
    img: "/img/clinic-unhais-ext.png",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300!2d-7.6221671!3d40.258805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d2f832cebbe77%3A0x5297bfe230127d92!2sAv.+Primeiro+de+Maio+80%2C+6215-681+Unhais+da+Serra!5e0!3m2!1spt!2spt!4v2",
  },
  {
    key: "peso",
    name: "Espaço Saúde do Peso",
    tag: "",
    phone: "275 954 182",
    mobile: "927 402 728",
    address: "Rua Santa Maria Madalena, nº10",
    postal: "6200-622 Peso",
    img: "/img/clinic-peso-interior.png",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-7.5624421!3d40.1951342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d3b1b382981c3%3A0xe33c98de915576fd!2sCentro+Social+Comunit%C3%A1rio+do+Peso!5e0!3m2!1spt!2spt!4v3",
  },
] as const;

export const TEAM_MEMBERS = [
  { name: "Dra. Ana Augusta", role: "Médica Dentista / Diretora Clínica", img: "/img/team-ana.jpg" },
  { name: "Dr. Alexandre Maia", role: "Médico Dentista", img: "/img/team-alexandre.jpg" },
  { name: "São", role: "Assistente Dentária", img: "/img/team-sao.jpg" },
  { name: "Maria Eduarda", role: "Assistente Dentária", img: "/img/team-maria-eduarda.jpg" },
  { name: "Tatiana", role: "Secretária", img: "/img/team-tatiana.jpg" },
] as const;

export const TESTIMONIALS = [
  {
    text: "Clínica de excelência! Simpatia, dedicação e profissionalismo. Instalações modernas com equipamentos de ponta. A Dra. Ana sempre atenciosa é uma excelente profissional. Recomendo vivamente!",
    name: "Maria Santos",
    role: "Paciente verificada · Google",
    avatar: "/img/review-1.png",
  },
  {
    text: "A experiência nesta clínica é maravilhosa. Equipa muito simpática e de grande competência técnica. Fico muito satisfeito com o trabalho da Dra. Ana Augusta e de toda a equipa. Recomendo muito.",
    name: "João Ferreira",
    role: "Paciente verificado · Google",
    avatar: "/img/review-2.png",
  },
  {
    text: "Recomendo vivamente a Clínica Cariense. Agradeço à Dra. Ana Augusta e à sua equipa todo o profissionalismo e o acompanhamento dado não só a mim como à minha família ao longo dos anos.",
    name: "Ana Costa",
    role: "Paciente verificada · Google",
    avatar: "/img/review-3.png",
  },
  {
    text: "Profissionalismo, dedicação e simpatia. Toda a equipa foi excecional desde o primeiro momento. Uma clínica de referência na nossa região — recomendo sem hesitar.",
    name: "Carlos Rodrigues",
    role: "Paciente verificado · Google",
    avatar: "/img/review-4.png",
  },
] as const;

export const FAQS = [
  {
    q: "Em que localidades posso encontrar a Clínica Cariense?",
    a: "A Clínica Dentária Cariense está presente em três localidades: Caria (sede principal), Peso e Unhais da Serra. Estamos sempre perto de si para garantir o acesso aos melhores cuidados de saúde oral.",
  },
  {
    q: "Como posso marcar uma consulta?",
    a: "Pode marcar a sua consulta através do formulário nesta página, por telefone (275 471 751) ou diretamente nas nossas clínicas. Respondemos a todas as marcações com a máxima rapidez.",
  },
  {
    q: "Que especialidades dentárias estão disponíveis?",
    a: "Oferecemos mais de 10 especialidades: Implantologia, Ortodontia, Ortopedia Funcional dos Maxilares, Prótese Fixa e Removível, Cirurgia Oral, Dentisteria, Endodontia, Odontopediatria, Periodontologia, Estética Dentária, Reabilitação Oral e Medicina Oral.",
  },
] as const;
