import Link from "next/link"
import { Separator } from "./ui/separator"

const DataFooter = [
    {
     id: 1,
     name: "About us",
     link: "#"
},
{
    id: 2,
    name: "Products",
    link: "#"
},

{
    id: 3,
    name: "My account",
    link: "#"
},
{
    id: 4,
    name: "Privacy",
    link: "#"
}

]
const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        Tecno
                        <span className="font-bold">
                           STORE
                        </span>
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-md text-gray-500 sm:mb-0 dark:text-gray-400">
                    {DataFooter.map((data) => 
                     <li key={data.id}>
                           <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                     </li>)}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2024
                    <Link href="#">Federico Lopez Gaitan</Link>
                </span>
            </div> 
              
        </footer>
    )
}

export default Footer