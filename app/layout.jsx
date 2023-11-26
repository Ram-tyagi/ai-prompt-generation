import "@/styles/global.css"
import Nav from "@/components/Nav"

export const metadata = {
   title: "Promptopia",
   description: "Discover & Share AI prompts"

}

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
       <Nav />
       <div className="main">
        <div className="gradient">
 
        </div>
        <main className="app">
          {children}
        </main>
       </div>
      </body>
    </html>

  )
}

export default layout