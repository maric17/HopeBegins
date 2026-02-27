'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HopeAIPage() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Hello! I am Hope AI. How can I encourage you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content:
            "That's a beautiful reflection. Remember that hope is the anchor for the soul. Is there a specific area of your life you'd like to focus our prayer on?",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-12 max-w-5xl mx-auto h-[calc(100vh-40px)] flex flex-col space-y-8">
      <header className="flex items-center gap-4">
        <div className="h-12 w-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 dark:shadow-none">
          <Sparkles className="text-white h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter">
            Hope AI
          </h1>
          <p className="text-zinc-500 font-medium">
            Guided reflections and spiritual encouragement.
          </p>
        </div>
      </header>

      <Card className="flex-1 border-none shadow-2xl bg-white dark:bg-zinc-900 overflow-hidden flex flex-col">
        <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20 py-4">
          <CardTitle className="text-sm font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <Bot className="h-4 w-4" />
            AI Counselor Session
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-8 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user'
                        ? 'bg-zinc-100 dark:bg-zinc-800'
                        : 'bg-blue-600'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="h-5 w-5 text-zinc-500" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tr-none'
                        : 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 rounded-tl-none border border-blue-100 dark:border-blue-900/30'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center opacity-50">
                  <Loader2 className="h-5 w-5 text-white animate-spin" />
                </div>
                <div className="p-4 rounded-3xl bg-blue-50 dark:bg-blue-900/20 rounded-tl-none w-32 h-10" />
              </div>
            </div>
          )}
        </CardContent>

        <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex gap-4">
            <Input
              placeholder="Type your reflection here..."
              className="flex-1 h-14 rounded-2xl border-none bg-zinc-100 dark:bg-zinc-800 px-6 font-medium focus-visible:ring-2 focus-visible:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button
              className="h-14 w-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-200 dark:shadow-none"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-center text-[10px] text-zinc-400 mt-4 font-bold uppercase tracking-widest">
            Hope AI is an experimental tool and not a substitute for
            professional counseling.
          </p>
        </div>
      </Card>
    </div>
  );
}
