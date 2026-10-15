import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Home } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFAFA] text-slate-900 py-24">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5">
          <div className="w-16 h-16 rounded-2xl bg-[#01153B] flex items-center justify-center text-[#00B3FF] mx-auto shadow-md">
            <BookOpen className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00]">
              404 // Not Found
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] tracking-tight">
              Article Not Found
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The article you are looking for does not exist, has been returned to draft status, or was moved.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/insights/blogs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#01153B] hover:bg-[#031E4D] rounded-xl shadow-md transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#00B3FF]" />
              <span>Back to Blogs</span>
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
