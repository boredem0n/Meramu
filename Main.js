<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Klinik Si Mbok Jamu – Preview</title>
    <!-- Tailwind via CDN (JIT) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React 18 UMD + Babel for JSX in-browser -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      /* Prevent overscroll bounce on mobile preview */
      html, body { height: 100%; }
      body { background: #fff; }
    </style>
  </head>
  <body>
    <div class="min-h-screen flex items-center justify-center bg-zinc-100 p-4">
      <!-- Phone frame -->
      <div class="w-full max-w-md">
        <div id="root"></div>
      </div>
    </div>

    <script type="text/babel">
      const { useState } = React;

      // --- Mock Data ---
      const POPULAR_PRODUCTS = [
        { id: 'item1', name: 'Bir Pletok', category: 'Hot Drinks', image: 'https://placehold.co/600x400/854d0e/ffffff?text=Bir+Pletok', price: 25000 },
        { id: 'item2', name: 'Panada', category: 'Snacks', image: 'https://placehold.co/600x400/eab308/ffffff?text=Panada', price: 10000 },
      ];

      const REMPAH_OPTIONS = [
        'Ginger', 'Turmeric', 'Galangal', 'Sappanwood', 'Cinnamon', 'Sugar',
        'Lime', 'Cloves', 'Nutmeg', 'Javanese Ginger', 'Lemongrass', 'Cardamom',
      ];

      const PRICES = {
        regular: 14000,
        xtra: 29000,
        diabeticSugar: 5000,
        adminFee: 1000,
      };

      // --- Helper Components ---
      const Icon
