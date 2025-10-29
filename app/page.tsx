"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { poems, Poem } from "../data/poems";
import { Input } from "../components/ui/input";
import { Footer } from "../components/ui/footer";
import {
  BookOpen,
  Languages,
  Share2,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// NOVO: Importar componentes de paginação
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
// NOVO: Importar hook useIsMobile (assumindo que está em /hooks)
import { useIsMobile } from "../hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { ThemeSidebar } from "../components/ui/theme-sidebar";

const translations = {
  pt: {
    title: "Reflexões Poéticas",
    subtitle: "Tem um pouco de mim aqui...",
    readFull: "Ler poema completo",
    language: "English",
    shareError: "Seu navegador não suporta o compartilhamento nativo.",
    shareSuccess: "Link do blog copiado para a área de transferência!",
    searchPlaceholder: "Filtrar por tag...",
    allTags: "Todas",
  },
  en: {
    title: "Poetic Reflections",
    subtitle: "There's a little bit of me here...",
    readFull: "Read full poem",
    language: "Português",
    shareError: "Your browser does not support native sharing.",
    shareSuccess: "Blog link copied to clipboard!",
    searchPlaceholder: "Filter by tag...",
    allTags: "All",
  },
};

const allTags = [...new Set(poems.flatMap((poem) => poem.tags))];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

// NOVO: Definir quantos itens por página
const ITEMS_PER_PAGE_DESKTOP = 9;
const ITEMS_PER_PAGE_MOBILE = 6;

export default function PoetryBlog() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poems);
  const [direction, setDirection] = useState(0);

  // NOVO: Estados para paginação e responsividade
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  const t = translations[language];

  // NOVO: Efeito para saber quando o componente está no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // NOVO: Define a quantidade de itens com base no isMobile
  const itemsPerPage =
    isClient && isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPoems(poems);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const newFilteredPoems = poems.filter((poem) =>
        poem.tags.some((tag) => tag.toLowerCase().includes(lowercasedFilter))
      );
      setFilteredPoems(newFilteredPoems);
    }
    setCurrentPage(1); // NOVO: Reseta para a página 1 ao filtrar
  }, [searchTerm]);

  // NOVO: Lógica de paginação
  const totalPages = Math.ceil(filteredPoems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPoems = filteredPoems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Opcional: rola para o topo ao mudar de página
    }
  };

  // NOVO: Lógica para renderizar os números da paginação com "..."
  const getPaginationRange = () => {
    const delta = isMobile ? 1 : 2; // Quantos números antes/depois da pág. atual
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return [...new Set(range)]; // Remove duplicados se houver (ex: [1, 2] e totalPages=2)
  };

  const paginationRange = getPaginationRange();

  const handleShare = async (poem: Poem) => {
    const shareData = {
      title: poem.title,
      text: `${poem.preview}\n\nLeia o poema completo em "Reflexões Poéticas".`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(t.shareSuccess);
      } catch (err) {
        alert(t.shareError);
      }
    }
  };

  const onDragEnd = (event: any, info: any) => {
    const { offset } = info;
    const swipe = Math.abs(offset.x);
    if (swipe > 50) {
      if (offset.x < 0) {
        handleNextPoem();
      } else {
        handlePreviousPoem();
      }
    }
  };

  const handleNextPoem = () => {
    setDirection(1);
    if (selectedPoem) {
      const currentIndex = filteredPoems.findIndex(
        (p) => p.id === selectedPoem.id
      );
      if (currentIndex < filteredPoems.length - 1) {
        setSelectedPoem(filteredPoems[currentIndex + 1]);
      }
    }
  };

  const handlePreviousPoem = () => {
    setDirection(-1);
    if (selectedPoem) {
      const currentIndex = filteredPoems.findIndex(
        (p) => p.id === selectedPoem.id
      );
      if (currentIndex > 0) {
        setSelectedPoem(filteredPoems[currentIndex - 1]);
      }
    }
  };

  const currentPoemIndex = selectedPoem
    ? filteredPoems.findIndex((p) => p.id === selectedPoem.id)
    : -1;

  return (
    <>
      <ThemeSidebar />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-16">
            {/* Div para o botão de tradução */}
            <div className="flex justify-end mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="flex items-center gap-2"
              >
                <Languages className="w-4 h-4" />
                {t.language}
              </Button>
            </div>

            {/* Div para o título e subtítulo */}
            <div className="text-center">
              <h1 className="text-4xl font-serif text-foreground mb-4">
                {t.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>
          </header>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="relative grow">
              <Input
                type="text"
                placeholder={t.searchPlaceholder}
                className="pl-10 h-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Button
                variant={!searchTerm ? "default" : "outline"}
                size="sm"
                onClick={() => setSearchTerm("")}
              >
                {t.allTags}
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={searchTerm === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSearchTerm(tag)}
                  className="capitalize"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/* NOVO: Mapeia 'currentPoems' em vez de 'filteredPoems' */}
            {currentPoems.map((poem) => (
              <Card
                key={poem.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-border/50 flex flex-col"
                onClick={() => setSelectedPoem(poem)}
              >
                <CardContent className="p-8 grow flex flex-col">
                  <h2 className="text-2xl font-serif text-foreground mb-4 leading-tight">
                    {poem.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 grow">
                    {poem.preview}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2 items-center">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    {poem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full capitalize cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchTerm(tag);
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <BookOpen className="w-4 h-4" />
                      <span>{t.readFull}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(poem);
                        }}
                        aria-label="Compartilhar poema"
                        className="w-8 h-8"
                      >
                        <Share2 className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* NOVO: Componente de Paginação */}
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }}
                    aria-disabled={currentPage === 1}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {paginationRange.map((page, index) => (
                  <PaginationItem key={index}>
                    {typeof page === "string" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                    aria-disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
          {/* Fim do Componente de Paginação */}

          <Dialog
            open={!!selectedPoem}
            onOpenChange={() => setSelectedPoem(null)}
          >
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6">
              {selectedPoem && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-serif text-foreground mb-2 leading-tight">
                      {selectedPoem.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {selectedPoem.preview}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="prose prose-lg max-w-none mt-4">
                    <pre className="font-serif text-lg leading-relaxed text-foreground whitespace-pre-wrap font-normal">
                      {selectedPoem.content}
                    </pre>
                  </div>

                  {/* Botões de navegação */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full z-10"
                    onClick={handlePreviousPoem}
                    disabled={currentPoemIndex === 0}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full z-10"
                    onClick={handleNextPoem}
                    disabled={currentPoemIndex === filteredPoems.length - 1}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}
            </DialogContent>
          </Dialog>
          <Footer />
        </div>
      </div>
    </>
  );
}
