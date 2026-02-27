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
  MoreVertical,
  Trash2,
  Edit,
  CheckCircle,
  AlertCircle,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const MOCK_PRAYERS = [
  {
    id: '1',
    user: 'Anon-123',
    title: 'Health Recovery',
    category: 'HEALTH',
    status: 'PUBLISHED',
    date: '2026-02-26',
  },
  {
    id: '2',
    user: 'Sarah Miller',
    title: 'Financial Peace',
    category: 'FINANCE',
    status: 'PENDING',
    date: '2026-02-25',
  },
  {
    id: '3',
    user: 'John Doe',
    title: 'Family Relationship',
    category: 'RELATIONSHIP',
    status: 'FLAGGED',
    date: '2026-02-24',
  },
];

export default function ManagePrayersPage() {
  return (
    <div className="p-12 space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter">
            Manage Prayers
          </h1>
          <p className="text-zinc-500 font-medium">
            Review, moderate, and organize community requests.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search prayers..."
              className="pl-10 h-10 rounded-xl border-none bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50"
            />
          </div>
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
                Author
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Category
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Status
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6">
                Date
              </TableHead>
              <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 pr-8 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_PRAYERS.map((prayer) => (
              <TableRow
                key={prayer.id}
                className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 border-zinc-100 dark:border-zinc-800 h-20"
              >
                <TableCell className="font-bold text-zinc-900 dark:text-zinc-100 pl-8">
                  {prayer.title}
                </TableCell>
                <TableCell className="text-zinc-500 font-medium">
                  {prayer.user}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="rounded-full border-zinc-200 dark:border-zinc-700 font-bold"
                  >
                    {prayer.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {prayer.status === 'PUBLISHED' && (
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    )}
                    {prayer.status === 'PENDING' && (
                      <AlertCircle className="h-3 w-3 text-amber-500" />
                    )}
                    {prayer.status === 'FLAGGED' && (
                      <AlertCircle className="h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${
                        prayer.status === 'PUBLISHED'
                          ? 'text-green-600'
                          : prayer.status === 'PENDING'
                            ? 'text-amber-600'
                            : 'text-red-600'
                      }`}
                    >
                      {prayer.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-zinc-500 font-medium">
                  {prayer.date}
                </TableCell>
                <TableCell className="pr-8 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      <Edit className="h-4 w-4 text-zinc-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 group"
                    >
                      <Trash2 className="h-4 w-4 text-zinc-600 group-hover:text-red-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      <MoreVertical className="h-4 w-4 text-zinc-600" />
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
