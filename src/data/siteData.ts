export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
}

// Company Credentials & Info
export const COMPANY_INFO = {
  name: "PRAIRIE",
  subName: "CONCRETE CO.",
  fullTitle: "Prairie Concrete Co.",
  phone: "(469) 555-8273",
  phoneFormatted: "+14695558273",
  email: "hello@prairieconcrete.co",
  address: "1234 Concrete Drive, Frisco, TX 75034",
  region: "North Texas & DFW",
  tagline: "Concrete work that stands the test of time.",
  subTagline: "Beautiful. Durable. Built for North Texas.",
  hours: "Mon - Sat: 7am - 6pm",
};

// DEMO PLACEHOLDER PROOF POINTS (Useful, believable demo stats only - no vague 100% claims)
export const PROOF_STATS = [
  { value: "15+", label: "Years Experience", detail: "Serving North Texas since 2008" },
  { value: "Licensed & Insured", label: "Texas Proud", detail: "Full liability coverage" },
  { value: "1,200+", label: "Projects Completed", detail: "Driveways, patios & slabs" },
  { value: "4.9★", label: "Average Rating", detail: "By local homeowners" },
];

// Core Services
export const SERVICES: ServiceItem[] = [
  {
    id: "driveways",
    title: "Driveways",
    category: "Residential Flatwork",
    shortDesc: "Durable broom-finish and stamped driveways engineered for North Texas clay soil expansion.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "patios-walkways",
    title: "Patios & Walkways",
    category: "Outdoor Spaces",
    shortDesc: "Custom stamped concrete patios, stained finishes, and seamless walkways for outdoor living.",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "foundations-slabs",
    title: "Foundations & Slabs",
    category: "Structural Concrete",
    shortDesc: "Structural slabs for home extensions, workshops, detached garages, and equipment pads.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "retaining-walls",
    title: "Retaining Walls",
    category: "Hardscaping",
    shortDesc: "Heavy-duty poured concrete and block retaining walls built to manage slope drainage.",
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "pool-decks",
    title: "Pool Decks",
    category: "Poolside Hardscapes",
    shortDesc: "Slip-resistant, cool-touch concrete pool surrounds designed for North Texas summers.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "commercial-slabs",
    title: "Commercial Concrete",
    category: "Commercial Flatwork",
    shortDesc: "Commercial parking aprons, sidewalks, dumpster pads, and retail slabs.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
  }
];

// Featured Projects (Direct proof of named concrete work)
export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Modern Driveway",
    location: "Frisco, TX",
    category: "Driveways",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
    description: "Reinforced 5-inch broom finish concrete driveway with decorative picture-frame borders."
  },
  {
    id: "proj-2",
    title: "Backyard Patio",
    location: "Prosper, TX",
    category: "Patios",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "Ashlar slate stamped patio with integrated fire pit pad and antique charcoal stain."
  },
  {
    id: "proj-3",
    title: "Pool Deck",
    location: "McKinney, TX",
    category: "Pool Decks",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
    description: "Cool-touch textured pool surround with cantilever coping edges and UV sealant."
  },
  {
    id: "proj-4",
    title: "Retaining Wall",
    location: "Allen, TX",
    category: "Retaining Walls",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    description: "Structural block retaining wall with integrated drainage tile for slope control."
  },
  {
    id: "proj-5",
    title: "Commercial Slab",
    location: "Celina, TX",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    description: "6-inch heavy load commercial parking apron with steel grid reinforcement."
  }
];

// Process Steps
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen, understand your goals, and answer your questions on site."
  },
  {
    number: "02",
    title: "Plan & Estimate",
    description: "We evaluate the space and provide a clear, honest, fixed estimate."
  },
  {
    number: "03",
    title: "Build",
    description: "Our team gets to work with precision framing, rebar grid, and pride in our craft."
  },
  {
    number: "04",
    title: "Enjoy",
    description: "We walk you through the finished project and stand behind our work."
  }
];

// DEMO PLACEHOLDER TESTIMONIALS
export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    quote: "Prairie Concrete did an amazing job on our driveway and patio. The crew was professional, on time, and the quality is second to none. Couldn't be happier!",
    author: "Jessica M.",
    location: "Frisco, TX"
  },
  {
    id: "rev-2",
    quote: "Replacing our cracked driveway in Prosper was completely painless. Excellent rebar preparation, clean control joints, and respectful crew.",
    author: "Robert K.",
    location: "Prosper, TX"
  },
  {
    id: "rev-3",
    quote: "They poured a stamped patio and pool deck surround for us in McKinney. Beautiful craftsmanship and honest communication from day one.",
    author: "Sarah L.",
    location: "McKinney, TX"
  }
];

// Service Areas
export const SERVICE_AREAS = [
  "Frisco, TX",
  "McKinney, TX",
  "Prosper, TX",
  "Celina, TX",
  "Plano, TX",
  "Allen, TX",
  "Little Elm, TX"
];
