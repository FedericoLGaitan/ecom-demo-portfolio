import Link from "next/link"

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
                           <Link href={data.link}>{data.name}</Link>
                     </li>)}
                    </ul>
                </div>
            </div> 

        </footer>
    )
}

export default Footer