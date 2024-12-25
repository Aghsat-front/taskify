import { ReactNode } from "react";

const MarketingLayout = ({ children } : { children: ReactNode }) => {
    return ( 
        <div className="bg-slate-100 h-screen">
            <main>
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;