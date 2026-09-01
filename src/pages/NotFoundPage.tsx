import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Página Não Encontrada"
        description="A página que você procura não foi encontrada no site do Dr. Deibson Fernandes."
      />

      <main className="min-h-[75vh] flex items-center justify-center pt-32 pb-20">
        <div className="site-container text-center max-w-xl">
          <div className="editorial-label justify-center mb-2">Erro 404</div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#F3F0EA] font-normal mb-4">
            Página Não Encontrada
          </h1>
          <p className="text-base text-[#A0A0A5] font-light leading-relaxed mb-8">
            O endereço que você tentou acessar não existe ou foi realocado. Retorne à página inicial para explorar a galeria e os detalhes do tratamento.
          </p>

          <Link
            to="/"
            className="btn-bronze text-xs py-3.5 px-8 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao Início</span>
          </Link>
        </div>
      </main>
    </>
  );
};
