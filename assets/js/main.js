import RevealElementsOnScroll from "./tools/RevealElementsOnScroll.js";
import ShowServiceItem from "./tools/ShowServiceItem.js";
// import LoaderWindow from "./tools/loader.js";
import CopyToClipboard from "./tools/CopyToClipboard.js";
import MenuCollapser from "./tools/BurgerMenuManager.js"
import WhatsappMessageSender from "./tools/WhatsappMessageSender.js";


// LoaderWindow('loader')

MenuCollapser('button', 'collapsable')

RevealElementsOnScroll.LeftToCenter('about_us_content', 'container')
RevealElementsOnScroll.LeftToCenter('portfolio_content', 'container')
RevealElementsOnScroll.Opacity('services_content', 'container')
RevealElementsOnScroll.Opacity('footer_content', 'container')
RevealElementsOnScroll.DisappearIfOnTop("back_to_top_button", 'container', "header_content")

CopyToClipboard('mail', 'copy-mail')

WhatsappMessageSender("whatsapp", "form-button")

ShowServiceItem('service_thumb', 'service_img')



