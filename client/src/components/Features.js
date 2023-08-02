import React from "react"
import { Feature } from "./Feature"
import iconChat from "../img/icon-chat.png"
import iconMoney from "../img/icon-money.png"
import iconSecurity from "../img/icon-security.png"


export const Features = () => {
   return <section className="features">
      <h2 className="sr-only">Features</h2>
         <Feature title="You are our #1 priority" desc="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." imgAlt="Chat Icon" imgUrl={iconChat}/>
         <Feature title="More savings means higher rates" desc="The more you save with us, the higher your interest rate will be!" imgAlt="Money Icon" imgUrl={iconMoney}/>
         <Feature title="Security you can trust" desc="We use top of the line encryption to make sure your data and money is always safe." imgAlt="Security icon" imgUrl={iconSecurity}/>
         </section>
   }