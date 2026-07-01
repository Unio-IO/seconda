import { NavHeader } from "@/components/NavHeader";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { AdditionalImages } from "@/components/AdditionalImages";
import { DuoCTA } from "@/components/DuoCTA";
import { RecentlyViewed } from "@/components/RecentlyViewed";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <NavHeader />

      <main>
        <ProductGallery />
        <ProductInfo />
        <AdditionalImages />
        <RecentlyViewed />
      </main>

      <DuoCTA />

      <Breadcrumbs />
      <SiteFooter />

      <StickyBar />
    </>
  );
}
