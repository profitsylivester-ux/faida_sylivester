import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Clock, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";
import { blogCategories, blogPosts, allTags } from "@/data/blog";
import { site } from "@/data/site";

const title = "Engineering Blog | Faida Sylivester Mosses";
const description =
  "Technical articles on electronics, Arduino, ESP32, IoT, embedded systems, telecommunications, fiber optics and networking by Faida Sylivester Mosses.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [tag, setTag] = useState<string | null>(null);

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => (tag ? p.tags.includes(tag) : true))
      .filter((p) =>
        q
          ? p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q))
          : true,
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [query, category, tag]);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="hero-aura relative pt-28 pb-4">
          <div className="section-shell !pb-0">
            <SectionHeading
              eyebrow="Blog"
              title="Engineering notes, tutorials and field write-ups"
              description={`Technical writing from ${site.name} on electronics, embedded systems, IoT, telecom and networking. Demo articles below are placeholders ready to be replaced with real posts.`}
            />
          </div>
        </section>

        <section className="section-shell !pt-10">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Star className="h-4 w-4 text-primary" aria-hidden="true" /> Featured
          </h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <li key={p.slug}>
                <PostCard slug={p.slug} title={p.title} excerpt={p.excerpt} category={p.category} date={p.date} minutes={p.readingMinutes} tags={p.tags} />
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics or tags…"
                className="h-11 w-full rounded-xl border border-border bg-surface pr-4 pl-10 text-sm outline-none focus-visible:border-primary"
              />
            </label>
            <p className="font-mono text-xs text-muted-foreground">
              {posts.length} article{posts.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["All", ...blogCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
              Tags
            </span>
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(tag === t ? null : t)}
                aria-pressed={tag === t}
                className={`rounded-md border px-2 py-1 font-mono text-[0.7rem] transition-colors ${
                  tag === t
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-primary"
                }`}
              >
                #{t}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 50}>
                <PostCard slug={p.slug} title={p.title} excerpt={p.excerpt} category={p.category} date={p.date} minutes={p.readingMinutes} tags={p.tags} />
              </Reveal>
            ))}
          </ul>

          {posts.length === 0 ? (
            <p className="mt-10 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No articles match that search yet.
            </p>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function PostCard({
  slug,
  title,
  excerpt,
  category,
  date,
  minutes,
  tags,
}: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  minutes: number;
  tags: string[];
}) {
  return (
    <article className="card-elevated card-interactive h-full p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[0.7rem] text-primary">
          {category}
        </span>
        <time dateTime={date} className="text-muted-foreground">
          {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </time>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <Clock className="h-3 w-3" aria-hidden="true" /> {minutes} min read
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg leading-snug font-semibold text-balance">
        <Link to="/blog/$slug" params={{ slug }} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <li key={t} className="font-mono text-[0.7rem] text-muted-foreground">
            #{t}
          </li>
        ))}
      </ul>
    </article>
  );
}
