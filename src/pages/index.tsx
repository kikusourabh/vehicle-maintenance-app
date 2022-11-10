import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../Component/Layout'
import illustrastion from '../images/Pickup_Illustration.png'

const pageStyles = {
  backgroundColor: "#000000",
  padding: "5px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h1>
          Vehicle Maintenance <br/>
          Form the comfert of <br/>
          your home <br/>
        </h1>
        <span>
          Open Auto Soothes the hassle of maintaining your vehicle and helps <br />
          you deal with unexpected repairs worry-free <br />
        </span>
      <div>
        <form action="" method="post">
          <input type="text" name="name" id="name" placeholder="Enter your name"/>
          <input type="email" name="email" id="email" placeholder="Enter your email" />          
          <input type="button" value="Submit" />
        </form>
        <img src={illustrastion} alt="Logo" height={300}/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Not found</title>
