"use client";

import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  increment,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { poems, Poem } from "@/data/poems";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/ui/footer";
import {
  BookOpen,
  Languages,
  Share2,
  Heart,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function PoetryBlog() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poems);
  const [direction, setDirection] = useState(0);

  // Estados para o sistema de curtidas
  const [likeCounts, setLikeCounts] = useState<{ [key: number]: number }>({});
  const [likedPoems, setLikedPoems] = useState<number[]>([]);

  // **CORREÇÃO PARA HYDRATION MISMATCH**
  // Estado para garantir que a lógica do cliente só rode após a montagem
  const [isMounted, setIsMounted] = useState(false);

  const t = translations[language];

  // **CORREÇÃO PARA HYDRATION MISMATCH**
  // Efeito que roda apenas uma vez no cliente, após a página ser "hidratada"
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Efeito para buscar e ouvir as curtidas do Firebase
  useEffect(() => {
    const poemsCol = collection(db, "poems");
    const unsubscribe = onSnapshot(poemsCol, (snapshot) => {
      const counts: { [key: number]: number } = {};
      snapshot.forEach((doc) => {
        counts[Number(doc.id)] = doc.data().likes;
      });
      setLikeCounts(counts);
    });

    return () => unsubscribe();
  }, []);

  // Efeito para carregar os poemas curtidos do localStorage
  useEffect(() => {
    // **CORREÇÃO PARA HYDRATION MISMATCH**
    // Só executa se o componente estiver montado no navegador
    if (isMounted) {
      const storedLikes = localStorage.getItem("likedPoems");
      if (storedLikes) {
        setLikedPoems(JSON.parse(storedLikes));
      }
    }
  }, [isMounted]);

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
  }, [searchTerm]);

  const handleLike = async (poemId: number) => {
    if (likedPoems.includes(poemId)) {
      return; // Já curtiu, não faz nada
    }

    // Atualiza o estado local e o localStorage
    const newLikedPoems = [...likedPoems, poemId];
    setLikedPoems(newLikedPoems);
    localStorage.setItem("likedPoems", JSON.stringify(newLikedPoems));

    // Atualiza o estado visual otimistamente
    setLikeCounts((prev) => ({
      ...prev,
      [poemId]: (prev[poemId] || 0) + 1,
    }));

    // Atualiza no Firebase
    const poemRef = doc(db, "poems", String(poemId));
    await updateDoc(poemRef, {
      likes: increment(1),
    });
  };

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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 right-0">
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
          <h1 className="text-4xl font-serif text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        <div className="mb-12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              className="pl-10"
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
          {filteredPoems.map((poem) => {
            // **CORREÇÃO PARA HYDRATION MISMATCH**
            // Verifica se o poema foi curtido apenas se o componente estiver montado
            const isLiked = isMounted && likedPoems.includes(poem.id);
            return (
              <Card
                key={poem.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-border/50 flex flex-col"
                onClick={() => setSelectedPoem(poem)}
              >
                <CardContent className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-serif text-foreground mb-4 leading-tight">
                    {poem.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-grow">
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
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(poem.id);
                          }}
                          aria-label="Curtir poema"
                          className="w-8 h-8"
                        >
                          <Heart
                            className={cn(
                              "w-4 h-4",
                              isLiked && "fill-current text-red-500"
                            )}
                          />
                        </Button>
                        <span className="text-sm w-4">
                          {likeCounts[poem.id] || 0}
                        </span>
                      </div>
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
            );
          })}
        </div>

        <Dialog
          open={!!selectedPoem}
          onOpenChange={() => setSelectedPoem(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto relative p-0">
            <AnimatePresence initial={false} custom={direction}>
              {selectedPoem && (
                <motion.div
                  key={selectedPoem.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={onDragEnd}
                  className="p-6"
                >
                  <h1 className="text-3xl font-serif text-foreground mb-8 leading-tight">
                    {selectedPoem.title}
                  </h1>
                  <div className="prose prose-lg max-w-none">
                    <pre className="font-serif text-lg leading-relaxed text-foreground whitespace-pre-wrap font-normal">
                      {selectedPoem.content}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {selectedPoem && (
              <>
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
  );
}
