import "./globals.css";
 
import { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core"; 
 
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <body> 
          {/* Use the public api key you got from Copilot Cloud  */}
          <CopilotKit publicApiKey="ck_pub_358f5e16aea67b5c682cf1e16ad3f294"> 
            {children}
          </CopilotKit>
        </body>
      </html>
    );
}