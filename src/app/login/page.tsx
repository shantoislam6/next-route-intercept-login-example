import React from 'react';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="max-container flex-col">
      <div className="w-full mt-20">
        <LoginForm />
      </div>
    </div>
  );
}
