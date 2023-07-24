import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { IconsNav } from '@components/icons/IconsNav';
import { Hero } from '@components/icons/Hero';
import { IconsPanel } from '@components/icons/IconsPanel';
import { iconsRoutes } from '@lib/iconsRoutes';
import { Box, Container, ScrollArea } from '@radix-ui/themes';

export default function Home() {
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <IconsHeader />
        <ScrollArea>
          <IconsNav routes={iconsRoutes} />
        </ScrollArea>
      </MobileMenu>

      <TitleAndMetaTags
        title="Radix Icons"
        description="A crisp set of 15×15 icons designed by the WorkOS team."
        image="default.png"
      />

      <Box style={{ height: 0 }}>
        <IconsHeader ghost />
      </Box>

      <Box mt="4">
        <Hero />

        <Container
          size="3"
          style={{ position: 'relative', marginBottom: 'calc(5vh + 25px)' }}
          px="5"
        >
          <IconsPanel />
        </Container>
      </Box>
    </MobileMenuProvider>
  );
}
