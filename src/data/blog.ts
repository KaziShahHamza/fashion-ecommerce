export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
  pullQuote: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-style-winter-layers",
    category: "Style",
    title: "How to Style Winter Layers for Effortless Warmth",
    excerpt:
      "From waffle-knit base layers to heavyweight wool coats, discover the formula for staying warm without bulk.",
    date: "November 18, 2024",
    readTime: "4 min read",
    author: "Everlane Editorial",
    image: "/images/hero.png",
    pullQuote:
      "Great winter dressing starts with breathable natural fibers close to the skin, anchored by one structured outer layer.",
    content: [
      "Cold-weather dressing is at its best when every layer works on its own. Start with a combed organic cotton tee or thermal waffle crew that regulates warmth indoors without feeling heavy.",
      "Next, add texture—a brushed twill overshirt or fine-ribbed merino cardigan brings depth to monochrome outfits while trapping warmth.",
      "Finish with a recycled wool overcoat or water-resistant bomber jacket cut with enough room in the shoulder to glide cleanly over knitwear.",
    ],
  },
  {
    slug: "our-holiday-gift-picks",
    category: "Gifting",
    title: "Our Holiday Gift Picks: Thoughtful Essentials",
    excerpt:
      "Timeless cashmere sweaters, Italian leather bags, and everyday uniforms made to be worn on repeat.",
    date: "November 12, 2024",
    readTime: "5 min read",
    author: "Clara Reyes",
    image: "/images/look-1.png",
    pullQuote:
      "The best gifts aren’t novelty items—they’re the elevated basics someone reaches for every single morning.",
    content: [
      "This season, we curated a gift guide focused on longevity: pieces crafted from recycled cashmere, vegetable-tanned leather, and certified organic cotton.",
      "For the frequent traveler, our Studio Italian Leather Tote fits a 15-inch laptop and ages gracefully with every trip.",
      "For cozy weekends at home, pair the Waffle Long-Sleeve Crew with our ReCashmere Crew Sweater in Bone or Charcoal.",
    ],
  },
  {
    slug: "cleaner-fashion-impact-report",
    category: "Sustainability",
    title: "Cleaner Fashion: Inside Our Latest Impact Report",
    excerpt:
      "A closer look at how we are reducing carbon emissions, eliminating virgin plastic, and auditing partner factories.",
    date: "November 4, 2024",
    readTime: "6 min read",
    author: "Sustainability Team",
    image: "/images/look-2.png",
    pullQuote:
      "Transparency isn’t a marketing tagline—it’s how we hold ourselves accountable to measurable progress every year.",
    content: [
      "Over the past year, 97% of our apparel materials shifted to certified organic, recycled, or lower-impact fibers.",
      "We continue to audit every Tier 1 factory partner for fair wages, safe working conditions, and water conservation standards.",
      "Our goal remains clear: cut per-product emissions in half by 2030 while building clothes durable enough to stay out of landfills.",
    ],
  },
  {
    slug: "the-making-of-recycled-cashmere",
    category: "Materials",
    title: "The Making of ReCashmere",
    excerpt:
      "How pre-consumer and post-consumer cashmere fibers are sorted, spun, and transformed into cloud-soft knits.",
    date: "October 26, 2024",
    readTime: "4 min read",
    author: "Marco Bellini",
    image: "/images/cat-5.png",
    pullQuote:
      "Recycled cashmere delivers the same softness you expect, with a fraction of the environmental footprint.",
    content: [
      "In Prato, Italy, textile artisans have been regenerating wool and cashmere for generations. By sorting discarded yarns by color, our mill avoids harsh chemical re-dyeing.",
      "Blended with a small percentage of recycled wool for tensile strength, ReCashmere resists pilling and holds its silhouette season after season.",
    ],
  },
  {
    slug: "denim-crafted-with-less-water",
    category: "Sustainability",
    title: "Denim Crafted With 98% Less Water",
    excerpt:
      "Inside our LEED-certified denim partner factory where closed-loop recycling turns wastewater into clean H2O.",
    date: "October 14, 2024",
    readTime: "5 min read",
    author: "Everlane Editorial",
    image: "/images/cat-2.png",
    pullQuote:
      "Traditional denim takes up to 1,500 liters of water per pair—closed-loop washing changes that equation completely.",
    content: [
      "Conventional denim finishing relies heavily on fresh water and chemical washes. Our partner facility recycles 98% of the water used in dyeing and washing.",
      "Even the leftover indigo sludge is repurposed into clean construction bricks rather than sent to local waterways.",
    ],
  },
  {
    slug: "building-a-capsule-wardrobe",
    category: "Style",
    title: "Building a 10-Piece Winter Capsule Wardrobe",
    excerpt:
      "Fewer, better pieces that mix and match effortlessly—from tailored wide-leg trousers to crisp Oxford shirts.",
    date: "October 2, 2024",
    readTime: "4 min read",
    author: "Nina Patel",
    image: "/images/promo-1.png",
    pullQuote:
      "When your palette is anchored in Bone, Charcoal, Navy, and Black, getting dressed takes two minutes.",
    content: [
      "A capsule wardrobe isn’t about restriction—it’s about removing decision fatigue by keeping only pieces that fit well and pair together.",
      "Start with two organic tees, two sweaters, one crisp Oxford shirt, two pairs of bottoms, and two versatile outer layers.",
    ],
  },
];
