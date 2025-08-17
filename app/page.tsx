"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { poems } from "@/data/poems"; // Importe os poemas do novo arquivo
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/ui/footer";
import { BookOpen, Languages, Share2, Heart, Tag } from "lucide-react";

interface Poem {
  id: number;
  title: string;
  content: string;
  preview: string;
  tags: string[];
}

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

export default function PoetryBlog() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poems);

  const t = translations[language];

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
        console.error("Erro ao copiar para a área de transferência:", err);
      }
    }
  };

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
          {filteredPoems.map((poem) => (
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

                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Clicou no coração!", poem.title);
                      }}
                      aria-label="Curtir poema"
                    >
                      <Heart className="w-4 h-4 text-muted-foreground" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(poem);
                      }}
                      aria-label="Compartilhar poema"
                    >
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Dialog
          open={!!selectedPoem}
          onOpenChange={() => setSelectedPoem(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedPoem && (
              <div className="p-6">
                <h1 className="text-3xl font-serif text-foreground mb-8 leading-tight">
                  {selectedPoem.title}
                </h1>

                <div className="prose prose-lg max-w-none">
                  <pre className="font-serif text-lg leading-relaxed text-foreground whitespace-pre-wrap font-normal">
                    {selectedPoem.content}
                  </pre>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <Footer />{" "}
      </div>
    </div>
  );
}
