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
    phone: "275 471 751 // 927 402 729",
    address: "Cerca do Conde, Lote 41, Loja B/D, 6250-111",
    img: "/img/clinic-caria.jpg",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.3!2d-7.3761!3d40.2955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3b97dbd7c8b0ff%3A0x0!2zQ2FyaWE!5e0!3m2!1spt!2spt!4v1",
  },
  {
    key: "unhais",
    name: "Clínica Dentária Unhais da Serra",
    phone: "275 971 342 // 927 402 728",
    address: "Avenida 1º de Maio, 43-A, 6215-517",
    img: "/img/clinic-unhais.jpg",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060!2d-7.8530!3d40.2200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVW5oYWlz!5e0!3m2!1spt!2spt!4v2",
  },
  {
    key: "peso",
    name: "Espaço Saúde do Peso",
    phone: "275 954 182 // 927 402 728",
    address: "Rua Santa Maria Madalena, nº10, 6200-622",
    img: "/img/clinic-peso.jpg",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058!2d-7.6300!3d40.1720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGVzbw!5e0!3m2!1spt!2spt!4v3",
  },
] as const;

export const TEAM_MEMBERS = [
  { name: "Dra. Ana Augusta", role: "Médica Dentista / Diretora Clínica", img: "/img/team-ana.jpg" },
  { name: "Dr. Miguel Alves", role: "Médico Dentista – Implantologia", img: "/img/team-miguel.jpg" },
  { name: "Dra. Sofia Nunes", role: "Médica Dentista – Ortodontia", img: "/img/team-sofia.jpg" },
  { name: "Dr. Pedro Lopes", role: "Médico Dentista – Endodontia", img: "/img/team-pedro.jpg" },
  { name: "Dra. Margarida Sousa", role: "Assistente Dentária", img: "/img/team-margarida.jpg" },
  { name: "Dra. Inês Martins", role: "Higienista Oral", img: "/img/team-ines.png" },
] as const;

export const TESTIMONIALS = [
  {
    text: "Clínica de excelência! Simpatia, dedicação e profissionalismo! Instalações super modernas com equipamentos de ponta. A Dra. Ana sempre atenciosa é uma excelente profissional! Recomendo vivamente!",
    name: "Maria Santos",
    role: "Paciente verificada · Google",
    avatar: "/img/review-1.png",
  },
  {
    text: "A experiência na clínica dentária é maravilhosa. Equipa simpática e muita competência técnica da Dra. Ana Augusta e de todos os dentistas. Recomendo muito.",
    name: "João Ferreira",
    role: "Paciente verificado · Google",
    avatar: "/img/review-2.png",
  },
  {
    text: "Recomendo vivamente a Clínica Cariense. Agradecer à Dra. Ana Augusta bem como à sua equipa por todo o profissionalismo e pelo acompanhamento dado não só a mim como à minha família.",
    name: "Ana Costa",
    role: "Paciente verificada · Google",
    avatar: "/img/review-3.png",
  },
  {
    text: "Profissionalismo. Dedicação. Simpatia. Recomendo vivamente! Toda a equipa foi excecional desde o primeiro momento. Uma clínica de referência na nossa região.",
    name: "Carlos Rodrigues",
    role: "Paciente verificado · Google",
    avatar: "/img/review-4.png",
  },
] as const;

export const FAQS = [
  {
    q: "Em que localidades posso encontrar a Clínica Cariense?",
    a: "A Clínica Dentária Cariense está presente em três localidades: Caria (sede principal), Peso da Régua e Unhais da Serra. Estamos sempre perto de si para garantir o acesso aos melhores cuidados de saúde oral.",
  },
  {
    q: "Como posso marcar uma consulta?",
    a: "Pode marcar a sua consulta através do formulário nesta página, por telefone (275 471 751) ou diretamente nas nossas clínicas. Respondemos a todas as marcações com a máxima rapidez.",
  },
  {
    q: "A clínica aceita todos os tipos de seguros de saúde?",
    a: "Trabalhamos com os principais seguros e subsistemas de saúde. Contacte-nos para confirmar a cobertura do seu seguro específico. A nossa equipa de recepção terá todo o prazer em esclarecer.",
  },
  {
    q: "Que especialidades dentárias estão disponíveis?",
    a: "Oferecemos mais de 10 especialidades: Implantologia, Ortodontia, Prótese Fixa e Removível, Branqueamento, Cirurgia Oral, Dentisteria, Endodontia, Odontopediatria, Periodontologia, Estética Dentária, Reabilitação Oral e Medicina Oral.",
  },
] as const;
