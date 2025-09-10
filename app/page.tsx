"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HeartPulse, MapPin, Mail, Calendar, Dumbbell, Salad, Moon, Sun, Check, Link as LinkIcon, BookOpen, ChevronRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// ------------------------------------------------------------
// Bay Area Wellness Coaching — Single-File Site
// Brand: gender-neutral, calm, modern. Tailwind + shadcn/ui.
// You are the primary coach; your wife (RN) is an advisor.
// Sections: Hero, Email Capture, Services, Local Focus, About,
// Articles, Simple Packages, Testimonials, FAQ, Contact, Footer.
// ------------------------------------------------------------

const nav = [
  { label: "Services", href: "#services" },
  { label: "Local", href: "#local" },
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const articles = [
  {
    title: "3 Stress-Reset Habits for Busy 30s",
    blurb: "Short, science-backed resets you can do between meetings.",
    slug: "stress-reset-habits",
  },
  {
    title: "Meal Prep in 10: Realistic Bay Area Version",
    blurb: "A simple system that survives traffic and late shifts.",
    slug: "meal-prep-in-10",
  },
  {
    title: "Desk Relief: 5-Min Mobility You’ll Actually Do",
    blurb: "No equipment, no gym clothes—just relief.",
    slug: "desk-mobility-5-min",
  },
];

const affiliates = [
  {
    name: "Hydration Bottle",
    note: "Leak-proof, time markers.",
    href: "#",
  },
  {
    name: "Meal Prep Containers",
    note: "Glass, stackable.",
    href: "#",
  },
  {
    name: " posture cushion",
    note: "Support for long desk sessions.",
    href: "#",
  },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Adults in their 30s–40s who want practical, sustainable health—no extremes, no gimmicks.",
  },
  {
    q: "Do you coach online or in person?",
    a: "Both. Zoom nationwide; in-person meetups around Contra Costa, Alameda, and Solano counties.",
  },
  {
    q: "What’s your background?",
    a: "I’m a wellness coach-in-training with a track record of building habits and community. My wife is a Registered Nurse (RN) who advises on best practices.",
  },
  {
    q: "Do I need to be ‘fit’ to start?",
    a: "No. We begin where you are, with doable steps that fit your life.",
  },
];

const packages = [
  {
    name: "4-Week Habit Kickstart",
    price: "$149",
    items: [
      "1 x 60-min onboarding session",
      "3 x 30-min weekly check-ins",
      "Simple habit plan + accountability",
      "Text support (Mon–Fri)",
    ],
  },
  {
    name: "12-Week Balance Program",
    price: "$399",
    items: [
      "1 x 75-min deep dive",
      "Bi-weekly 45-min sessions (6 total)",
      "Nutrition, movement, sleep foundations",
      "Weekly progress reviews + adjustments",
    ],
  },
];

function SectionHeading({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Icon className="h-5 w-5" />
        <span className="text-sm tracking-wide uppercase">{title}</span>
      </div>
      {subtitle && <p className="mt-2 text-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    // Placeholder: store locally; swap for ConvertKit/Mailchimp later
    try {
      const list = JSON.parse(localStorage.getItem("wellness_emails") || "[]");
      list.push({ email, ts: Date.now() });
      localStorage.setItem("wellness_emails", JSON.stringify(list));
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <Card className="border-0 bg-gradient-to-br from-muted/40 to-muted p-0 shadow-sm">
        <CardContent className="py-8 text-center">
          <h3 className="text-xl font-semibold">You’re on the list 🎉</h3>
          <p className="mt-2 text-muted-foreground">I’ll send new articles, local event invites, and simple habit tools.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-gradient-to-br from-muted/40 to-muted p-0 shadow-sm">
      <CardContent className="py-6">
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <Input
            type="email"
            placeholder="Enter your email to get the 7 Simple Habits PDF"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
            aria-label="Email address"
          />
          <Button type="submit" className="h-11">Join Free</Button>
        </form>
        <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </CardContent>
    </Card>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0" />
          <span className="text-sm text-muted-foreground">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WellnessSite() {
  const [dark, setDark] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={"min-h-screen bg-background text-foreground antialiased " + (dark ? "dark" : "") }>
      {/* Top Nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5" />
            <span className="font-semibold">Bay Area Wellness Coaching</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
            <Button size="sm" className="ml-2">Book a Clarity Call</Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Button size="sm" variant="outline" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Badge variant="secondary" className="mb-4 gap-1"><MapPin className="h-3.5 w-3.5" /> Contra Costa • Alameda • Solano</Badge>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold leading-tight md:text-5xl">
              Wellness coaching for busy 30s & 40s — practical, calm, sustainable.
            </motion.h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Build energy, reduce stress, and create habits that actually stick. In-person meetups around the Bay Area and online coaching anywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg">Book a Free Clarity Call</Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("email")?.scrollIntoView({ behavior: "smooth" })}>Get the 7 Habits PDF</Button>
            </div>
            <Checklist
              items={[
                "Science-informed, judgment-free",
                "Simple routines for movement, meals, and sleep",
                "RN-advised best practices (wife as clinical advisor)",
              ]}
            />
          </div>
          <Card className="border-0 bg-muted/40 shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-3">
                <Card className="border bg-background"><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Dumbbell className="h-4 w-4"/>Movement</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Desk mobility, walk plans, gentle strength.</CardContent></Card>
                <Card className="border bg-background"><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Salad className="h-4 w-4"/>Nutrition</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Easy meals, grocery systems, snack wins.</CardContent></Card>
                <Card className="border bg-background"><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Moon className="h-4 w-4"/>Recovery</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Sleep, stress resets, digital boundaries.</CardContent></Card>
                <Card className="border bg-background"><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4"/>Community</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Local meetups: walks, pickleball, workshops.</CardContent></Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Capture */}
      <section id="email" className="bg-muted/30 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading icon={Mail} title="Join the list" subtitle="Get the free 7 Habits PDF + local event invites" />
          <EmailCapture />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading icon={HeartPulse} title="Services" subtitle="Online coaching + Bay Area meetups" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">1:1 Coaching (Online)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Weekly or bi-weekly Zoom sessions with personalized plans for movement, meals, and recovery.
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Local Meetups</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Walks, light workouts, and Q&A around Contra Costa, Alameda, and Solano. Build consistency together.
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Workshops</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Small-group habit reset sessions for workplaces or friends. Practical tools and accountability.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section id="local" className="bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading icon={MapPin} title="Local Focus" subtitle="Bay Area coaching you can actually meet" />
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Where we meet</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Contra Costa: Concord, Walnut Creek, Pleasant Hill</li>
                  <li>• Alameda: Berkeley, Oakland, Alameda</li>
                  <li>• Solano: Vallejo, Benicia, Fairfield</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg">Upcoming community times</CardTitle>
                <Badge variant="secondary" className="gap-1"><Calendar className="h-3.5 w-3.5"/> Saturdays</Badge>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Weekly Walk Club (Concord): 9:00–9:40am</li>
                  <li>• Pickleball Social (Pleasanton/Concord): 10:00–11:00am</li>
                  <li>• “Reset & Plan” coffee chat (rotating cafés): monthly</li>
                </ul>
                <p className="mt-3">Join the email list for details + exact locations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading icon={Users} title="About us" subtitle="Approachable coaching with clinical insight" />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Hi, I’m Natsu — your wellness coach</h3>
              <p className="mt-3 text-muted-foreground">
                I help busy adults in their 30s & 40s build healthy habits that last. No extremes. We focus on the essentials—movement, meals, and recovery—so you feel steady energy and less stress. My background includes content creation, behavior change, and community-building.
              </p>
              <p className="mt-3 text-muted-foreground">
                My wife is a Registered Nurse (RN) who serves as a clinical advisor. I’m your primary coach day-to-day; her input helps ensure our guidance aligns with best practices.
              </p>
            </div>
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">What clients can expect</CardTitle>
              </CardHeader>
              <CardContent>
                <Checklist
                  items={[
                    "Simple plans that fit your real life",
                    "Clear weekly goals + accountability",
                    "Encouraging, judgment-free support",
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading icon={BookOpen} title="Articles" subtitle="Short reads with practical tips" />
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <Card key={a.slug} className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{a.blurb}</p>
                  <Button variant="link" className="mt-2 p-0" asChild><a href={`/articles/${a.slug}`}>Read more <ChevronRight className="ml-1 h-4 w-4"/></a></Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">View all articles</Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading icon={HeartPulse} title="Packages" subtitle="Start simple, grow steadily" />
          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((p) => (
              <Card key={p.name} className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{p.price}</div>
                  <Checklist items={p.items} />
                  <Button className="mt-4">Book this package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliates (optional, transparent) */}
      <section className="bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading icon={LinkIcon} title="Recommendations" subtitle="Stuff I actually use (affiliate links)" />
          <div className="grid gap-6 md:grid-cols-3">
            {affiliates.map((f) => (
              <Card key={f.name} className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{f.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.note}</p>
                  <Button variant="link" className="mt-2 p-0" asChild>
                    <a href={f.href} target="_blank" rel="noreferrer">Visit link <ChevronRight className="ml-1 h-4 w-4"/></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">I may earn a small commission—no cost to you.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading icon={BookOpen} title="FAQ" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Card key={i} className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{f.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{f.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-muted/30 py-14">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading icon={Mail} title="Contact" subtitle="Questions? Curious if coaching fits?" />
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <form className="grid gap-3">
                <div className="grid gap-2 md:grid-cols-2">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Email address" />
                </div>
                <Textarea placeholder="Tell me a bit about your goals (optional)" className="min-h-[120px]" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">I’ll reply within 1–2 business days.</div>
                  <Button>Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {year} Bay Area Wellness Coaching</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <button onClick={() => setDark((d) => !d)} className="rounded-md border px-2 py-1 text-xs hover:bg-muted">{dark ? "Light" : "Dark"} mode</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
