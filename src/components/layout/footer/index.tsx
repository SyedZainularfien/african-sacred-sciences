import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <Container className="py-6">
        <Typography as="p" variant="sm" className="text-sm text-zinc-600">Frontend foundation</Typography>
      </Container>
    </footer>
  );
}
