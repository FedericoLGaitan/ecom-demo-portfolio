import { MenuIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link"
import { Separator } from "./ui/separator"
 
 
 const MenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger><MenuIcon/></PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Shop by Category</h3>
                  <Separator/>
                  <Link href="#">Computers</Link>
                  <Link href="#">Phones</Link>
                  <Link href="#">Audio</Link>
                  <Link href="#">Video Games</Link>
                  <Link href="#">Cameras</Link>
                </div>
            </PopoverContent>
        </Popover>
    )
  }

  export default MenuMobile