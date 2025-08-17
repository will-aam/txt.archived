import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  // IG
  const instagramUrl = "https://www.instagram.com/txt.archived";

  return (
    <footer className="mt-16 border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm">
          &copy; {year} txt.archived - written by: @will.aam
        </p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground"
          aria-label="Link para o perfil do Instagram"
        >
          <Instagram className="h-4 w-4" />
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
}
