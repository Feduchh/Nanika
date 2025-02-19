import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import { User} from "lucide-react"
import Lens from "@modules/lens"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 duration-200 bg-black border-b border-stone-700">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between h-full text-small-regular">
          {/* <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div> */}
          <div className="flex" style={{height:"inherit", paddingTop:"1vh", paddingBottom:"1vh"}}>
            <LocalizedClientLink
              href="/"
              className="hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              <Image src="/logo_transparente.png" alt="Banner" height={300} width={300} style={{height:"100%", width:"auto"}}/>
            </LocalizedClientLink>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <Lens/>
            <div className="flex items-center gap-x-6 h-full relative inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 hover:after:text-white">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <User size={24} className="transition-colors duration-200 text-white" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/checkout"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
