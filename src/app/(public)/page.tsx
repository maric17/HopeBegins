import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Radio, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black italic tracking-tighter text-blue-600 dark:text-blue-400">
          HopeBegins
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Hopecasts
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Resources
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Donate
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="font-bold uppercase tracking-widest text-xs h-10 px-6"
            >
              Login
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs h-10 px-6 rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-8 py-32 md:py-48 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest animate-pulse">
            <Sparkles className="h-4 w-4" />
            Your Daily Dose of Hope
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-50">
            Where Every <span className="text-blue-600">Prayer</span> Finds A
            Voice.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl leading-relaxed">
            Join a global community dedicated to lifting each other up through
            prayer, inspiration, and shared hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-full group">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-zinc-200 dark:border-zinc-800 font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              Explore Hopecasts
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-8 py-32 bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-black italic tracking-tight">
                Prayer Support
              </h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Share your requests anonymously or with the community. Our
                Prayer Carriers are ready to stand with you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                <Radio className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-black italic tracking-tight">
                Daily Hopecasts
              </h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Tune in to daily moments of reflection, encouragement, and
                community prayer sessions live.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-black italic tracking-tight">
                Hope AI
              </h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Experience guided reflections and personalized encouragement
                powered by thoughtful AI interaction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-8 py-20 border-t border-zinc-100 dark:border-zinc-900 text-center">
        <div className="text-2xl font-black italic tracking-tighter text-blue-600 dark:text-blue-400 mb-8">
          HopeBegins
        </div>
        <p className="text-zinc-500 text-sm font-medium">
          © 2026 HopeBegins. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
