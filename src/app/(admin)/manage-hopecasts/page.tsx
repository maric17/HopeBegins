'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Play,
  Trash2,
  Edit,
  Plus,
  Radio,
  Search,
  MoreVertical,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const MOCK_HOPECASTS = [
  {
    id: '1',
    title: 'Morning Light',
    host: 'Pastor Chris',
    duration: '12:45',
    status: 'PUBLISHED',
    plays: '1,240',
    date: '2026-02-26',
  },
  {
    id: '2',
    title: 'Peace in the Storm',
    host: 'Sarah Evans',
    duration: '08:30',
    status: 'DRAFT',
    plays: '0',
    date: '2026-02-25',
  },
];

export default function ManageHopecastsPage() {
  return (
    <div className="p-12 space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter">
            Manage Hopecasts
          </h1>
          <p className="text-zinc-500 font-medium">
            Control your audio content and broadcast schedule.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search hopecasts..."
              className="pl-10 h-10 rounded-xl border-none bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50"
            />
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl h-10 px-6 font-bold uppercase tracking-widest text-xs">
            <Plus className="mr-2 h-4 w-4" />
            New Cast
          </Button>
        </div>
      </header>

      <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50 dark:bg-zinc-800/50">
            <TableRow className="hover:bg-transparent border-zinc-100 dark:border-zinc-800">
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 pl-8">
                Title
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Host
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Duration
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Status
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Plays
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 pr-8 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_HOPECASTS.map((cast) => (
              <TableRow
                key={cast.id}
                className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 border-zinc-100 dark:border-zinc-800 h-20"
              >
                <TableCell className="font-bold text-zinc-900 dark:text-zinc-100 pl-8">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                      <Radio className="h-4 w-4 text-red-600" />
                    </div>
                    {cast.title}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-500 font-medium">
                  {cast.host}
                </TableCell>
                <TableCell className="text-zinc-500 font-medium tabular-nums">
                  {cast.duration}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`rounded-full border-zinc-200 dark:border-zinc-700 font-black text-[10px] tracking-widest ${
                      cast.status === 'PUBLISHED'
                        ? 'text-green-600'
                        : 'text-amber-600'
                    }`}
                  >
                    {cast.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-zinc-500 font-medium tabular-nums">
                  {cast.plays}
                </TableCell>
                <TableCell className="pr-8 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <Play className="h-4 w-4 text-zinc-400" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <Edit className="h-4 w-4 text-zinc-400" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-red-50 group"
                    >
                      <Trash2 className="h-4 w-4 text-zinc-400 group-hover:text-red-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <MoreVertical className="h-4 w-4 text-zinc-400" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
