// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { poems, Poem } from "@/data/poems";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/ui/footer";
import {
  BookOpen,
  Languages,
  Share2,
  Tag,
  ChevronLeft,
  ChevronRight,
  // NOVOS ÍCONES
  Copy,
  MessageCircle,
  Camera,
  Twitter,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeSidebar } from "@/components/ui/theme-sidebar";
// NOVO COMPONENTE DE MENU
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast"; // Hook para feedback visual (opcional, mas recomendado)

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
    // NOVAS TRADUÇÕES
    copySuccess: "Poema copiado com sucesso!",
    shareOnX: "Compartilhar no X",
    shareOnWhatsApp: "Compartilhar no WhatsApp",
    shareStory: "Compartilhar nos Stories",
    copyPoem: "Copiar Poema",
    copyLink: "Copiar Link",
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
    // NOVAS TRADUÇÕES
    copySuccess: "Poem copied successfully!",
    shareOnX: "Share on X",
    shareOnWhatsApp: "Share on WhatsApp",
    shareStory: "Share to Stories",
    copyPoem: "Copy Poem",
    copyLink: "Copy Link",
  },
};

const allTags = [...new Set(poems.flatMap((poem) => poem.tags))];
const ITEMS_PER_PAGE_DESKTOP = 9;
const ITEMS_PER_PAGE_MOBILE = 6;
const SITE_URL = "https://txtarchived.netlify.app"; // URL DO SEU SITE

export default function PoetryBlog() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poems);
  const [direction, setDirection] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast(); // Hook para feedback visual

  const t = translations[language];

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPoems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPoems = filteredPoems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const getPaginationRange = () => {
    const delta = isMobile ? 1 : 2;
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

    return [...new Set(range)];
  };

  const paginationRange = getPaginationRange();

  // --- NOVAS FUNÇÕES DE COMPARTILHAMENTO ---

  const handleCopyText = async (text: string, successMessage: string) => {
    if (!navigator.clipboard) {
      alert(t.shareError);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      // Usando toast para feedback visual (mais elegante que alert)
      toast({
        title: "Sucesso!",
        description: successMessage,
      });
    } catch (err) {
      console.error("Falha ao copiar o texto: ", err);
      alert(t.shareError);
    }
  };

  const handleShareOnX = (poem: Poem) => {
    const tweetText = `"${poem.title}"\n\n${poem.preview}`;
    const tweetUrl = `${SITE_URL}?poem=${poem.id}`; // URL direta para o poema
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(tweetUrl)}`;
    window.open(twitterIntentUrl, "_blank");
  };

  const handleShareOnWhatsApp = (poem: Poem) => {
    const shareText = `*${poem.title}*\n\n${poem.preview}\n\nLeia o poema completo em: ${SITE_URL}?poem=${poem.id}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShareStory = (poem: Poem) => {
    // A ideia aqui é copiar o link e instruir o usuário a colar nos Stories
    const storyUrl = `${SITE_URL}?poem=${poem.id}`;
    handleCopyText(
      storyUrl,
      "Link para os Stories copiado! Agora cole no seu Story."
    );
  };

  // Função genérica para compartilhar (mantida como fallback)
  const handleNativeShare = async (poem: Poem) => {
    const shareData = {
      title: poem.title,
      text: `${poem.preview}\n\nLeia o poema completo em "Reflexões Poéticas".`,
      url: `${SITE_URL}?poem=${poem.id}`,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      handleCopyText(shareData.url, t.shareSuccess);
    }
  };

  // --- FIM DAS NOVAS FUNÇÕES ---

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
    <ThemeSidebar>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-16">
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
                      {/* NOVO MENU DE COMPARTILHAMENTO */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Opções de compartilhamento"
                            className="w-8 h-8"
                          >
                            <Share2 className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyText(poem.content, t.copySuccess);
                            }}
                          >
                            <Copy className="mr-2 h-4 w-4" />
                            <span>{t.copyPoem}</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyText(
                                `${SITE_URL}?poem=${poem.id}`,
                                t.shareSuccess
                              );
                            }}
                          >
                            <Copy className="mr-2 h-4 w-4" />
                            <span>{t.copyLink}</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareOnX(poem);
                            }}
                          >
                            <Twitter className="mr-2 h-4 w-4" />
                            <span>{t.shareOnX}</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareOnWhatsApp(poem);
                            }}
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            <span>{t.shareOnWhatsApp}</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareStory(poem);
                            }}
                          >
                            <Camera className="mr-2 h-4 w-4" />
                            <span>{t.shareStory}</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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

                  {/* Botões de navegação no modal */}
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

                  {/* Adicionando o menu de compartilhamento no modal também */}
                  <div className="flex justify-center mt-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Share2 className="w-4 h-4 mr-2" />
                          Compartilhar este poema
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <DropdownMenuItem
                          onClick={() =>
                            handleCopyText(selectedPoem.content, t.copySuccess)
                          }
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          <span>{t.copyPoem}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleCopyText(
                              `${SITE_URL}?poem=${selectedPoem.id}`,
                              t.shareSuccess
                            )
                          }
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          <span>{t.copyLink}</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleShareOnX(selectedPoem)}
                        >
                          <Twitter className="mr-2 h-4 w-4" />
                          <span>{t.shareOnX}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleShareOnWhatsApp(selectedPoem)}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          <span>{t.shareOnWhatsApp}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleShareStory(selectedPoem)}
                        >
                          <Camera className="mr-2 h-4 w-4" />
                          <span>{t.shareStory}</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
          <Footer />
        </div>
      </div>
    </ThemeSidebar>
  );
}
