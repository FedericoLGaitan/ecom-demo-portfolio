'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter()

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-slate-600">¡Compra Exitosa!</h1>
        <p className="mt-4 text-gray-700">
          Gracias por tu compra. Hemos enviado un correo de confirmación a tu dirección registrada.
        </p>
        <div className="mt-6">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;