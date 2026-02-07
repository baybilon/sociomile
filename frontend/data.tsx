import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  Ticket,
  MessageSquare,
  BookOpen,
  User,
  Settings2,
  Frame,
  PieChart,
  Map,
  Store,
} from "lucide-react";

export const dataSideBar = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Ticket",
      url: "#",
      icon: Ticket,
      isActive: true,
      items: [
        {
          title: "Ticket List",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Chat",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "User",
      url: "#",
      icon: User,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Tenant",
      url: "#",
      icon: Store,
      items: [
        {
          title: "Tenant List",
          url: "tenant",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

// export const mockUsers: User[] = [
//   {
//     firstName: "Alice",
//     lastName: "Johnson",
//     age: 32,
//     email: "alice.j@sociomile.io",
//     comments: "Administrator for the North Region tenant.",
//   },
//   {
//     firstName: "Bob",
//     lastName: "Smith",
//     age: 45,
//     email: "bobsmith@provider.com",
//     comments: "Frequent support ticket creator.",
//   },
//   {
//     firstName: "Charlie",
//     lastName: "Davis",
//     age: 21,
//     email: "charlie.d@startup.co",
//     comments: "New agent in training.",
//   },
//   {
//     firstName: "Dana",
//     lastName: "Lee",
//     age: 29,
//     email: "dana.lee@enterprise.com",
//     comments: "Requesting API access for custom integrations.",
//   },
// ];

export type Tenant = {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
};
