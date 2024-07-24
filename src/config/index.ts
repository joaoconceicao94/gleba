export const PRODUCT_CATEGORIES = [
  {
    label: "Padaria",
    value: "padaria" as const,
    featured: [
      {
        name: "Edições especiais",
        href: "#",
        imageSrc: "/public/especiais/beterraba.png",
      },

      {
        name: "Pães Grandes",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },

      {
        name: "Pães Pequenos",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
      {
        name: "Pães de forma",
        href: "#",
        imageSrc: "/public/ui-kits/mixed.jpg",
      },

      {
        name: "Focaccia",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },

      {
        name: "Tostas",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },

  {
    label: "Pastelaria",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },

      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },

      {
        name: "Best Selling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },

  {
    label: "Mercearia",
    value: "mercearia" as const,
    featured: [
      {
        name: "Favorite Icon picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },

      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },

      {
        name: "Best Selling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },

  // Falta colocar os dois menus abaixo sem setinhas

  {
    label: "Lojas Gleba",
    value: "lgleba" as const,
    href: "/lojas-gleba",
  },

  {
    label: "Sobre nós",
    value: "nos" as const,
    href: "sobre-nos",
  },
  // TODO: ALGURES AQUI ADICIONAR A SEARCH BAR
  // TODO: A SEARCH BAR TAMBÉM PODE FICAR NUM BANNER NO TOPO DE TUDO
];

// export const MENU_CATEGORIES = [
//   {
//     label: "Lojas Gleba",
//     value: "lgleba" as const,
//     href: "#",
//   },

//   {
//     label: "Sobre nós",
//     value: "nos" as const,
//     href: "#",
//   },
// ];
