import RevealElementsOnScroll from "./tools/RevealElementsOnScroll.js";
import ShowServiceItem from "./tools/ShowServiceItem.js";
import LoaderWindow from "./tools/loader.js";
import MenuCollapser from "./tools/BurgerMenuManager.js"

LoaderWindow('loader')

MenuCollapser('button', 'collapsable')

RevealElementsOnScroll.LeftToCenter('about_us_content', 'container')
RevealElementsOnScroll.LeftToCenter('portfolio_content', 'container')
RevealElementsOnScroll.Opacity('services_content', 'container')
RevealElementsOnScroll.Opacity('footer_content', 'container')
RevealElementsOnScroll.DisappearIfOnTop("back_to_top_button", 'container', "header_content")

ShowServiceItem('service_thumb', 'service_img')



