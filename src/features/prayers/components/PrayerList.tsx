'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

// Mock data for initial development
const MOCK_PRAYERS = [
  {
    id: '1',
    title: 'Health for my family',
    content: 'Please pray for my mother who is undergoing surgery next week.',
    category: 'HEALTH',
    isAnonymous: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Financial breakthrough',
    content: 'Seeking wisdom and provision for a new business venture.',
    category: 'FINANCE',
    isAnonymous: true,
    createdAt: new Date().toISOString(),
  },
];

export function PrayerList() {
  const {
    data: prayers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['prayers'],
    queryFn: async () => {
      // In a real app we'd fetch from prayerService
      // return prayerService.getPrayers();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_PRAYERS;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center p-20">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive bg-destructive/10">
        <CardHeader>
          <CardTitle className="text-destructive">
            Error loading prayers
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {prayers?.map((prayer) => (
        <Card key={prayer.id}>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg font-bold">{prayer.title}</CardTitle>
            <Badge variant="outline">{prayer.category}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
              {prayer.content}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>
                {prayer.isAnonymous ? 'Anonymous' : 'Community Member'}
              </span>
              <span className="mx-2">•</span>
              <span>{new Date(prayer.createdAt).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
