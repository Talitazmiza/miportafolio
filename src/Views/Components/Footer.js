import React from 'react';

export default function Footer() {
    return(
        <footer className="py-6 text-center text-sm bg-black text-red-400">
          <span className="text-grey-900 font-bold text-lg mr-2">
            Lita
          </span>&copy; {new Date().getFullYear()} All Rights
        </footer>
    );
}