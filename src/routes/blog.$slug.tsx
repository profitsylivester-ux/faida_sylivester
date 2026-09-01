import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";
import { PostCard } from "./blog.index";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const t = `${post.title} | ${site.name}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: site.name },
            keywords: post.tags.join(", "),
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogArticle,
});

function PostNotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-shell pt-32 text-center">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">That article doesn't exist or has been moved.</p>
        <Link to="/blog" className="mt-6 inline-flex text-sm font-semibold text-primary">
          Back to the blog
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function BlogArticle() {
  const { post } = Route.useLoaderData();
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="section-shell pt-28">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All articles
          </Link>

          <header className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[0.7rem] text-primary">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingMinutes} min read
              </span>
              <span className="text-muted-foreground">By {site.name}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="rule-line mt-8" />
          </header>

          <div className="mt-8 max-w-3xl space-y-4">
            {renderContent(post.content)}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                #{t}
              </li>
            ))}
          </ul>
        </article>

        {related.length ? (
          <section className="section-shell !pt-0">
            <h2 className="font-display text-xl font-bold">Related articles</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <PostCard
                    slug={p.slug}
                    title={p.title}
                    excerpt={p.excerpt}
                    category={p.category}
                    date={p.date}
                    minutes={p.readingMinutes}
                    tags={p.tags}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

function renderContent(content: string) {
  const blocks = content.split("\n").filter((l) => l.trim().length > 0);
  const out: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flush = (key: string) => {
    if (!bullets.length) return;
    out.push(
      <ul key={key} className="list-disc space-y-1 pl-5 text-muted-foreground">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  blocks.forEach((line, i) => {
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
      return;
    }
    flush(`ul-${i}`);
    if (line.startsWith("## ")) {
      out.push(
        <h2 key={i} className="pt-4 font-display text-xl font-bold">
          {line.slice(3)}
        </h2>,
      );
    } else {
      out.push(
        <p key={i} className="leading-relaxed text-muted-foreground">
          {line}
        </p>,
      );
    }
  });
  flush("ul-end");
  return out;
}
