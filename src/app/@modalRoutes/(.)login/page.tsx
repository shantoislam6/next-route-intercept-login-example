'use client';

import LoginForm from '@/components/LoginForm';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  return (
    <dialog
      ref={dialogRef}
      onClose={() => {
        router.back();
      }}
      className="border p-4 backdrop:bg-slate-300/60 rounded"
    >
      <button
        className="absolute top-2 right-4 border-none text-2xl"
        onClick={() => {
          dialogRef.current?.close();
        }}
      >
        &times;
      </button>
      <LoginForm />
    </dialog>
  );
}
