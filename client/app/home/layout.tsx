import SideNav from "../ui/home/sidenav"
import TopNavigation from "../ui/home/topNavigation"
import ExploreTab from "../ui/home/exploreTab"
import { Children } from "react"

export default function Layout({ children } : {children: React.ReactNode}) {
    return (
        <main>
            <section>
                <SideNav/>
            </section>
            <section>
                <div>
                    <TopNavigation/>
                </div>
                <div>
                    {children}
                </div>
            </section>
            <section>
                <ExploreTab/>
            </section>
        </main>
    )
}