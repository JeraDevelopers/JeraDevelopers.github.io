const ShowServiceItem = (new_element, required_class) => {
    const services = document.getElementsByClassName(new_element)
    const description = [
        {
            title: 'Website Development',
            text: `We build a complete website based on a previous design of your website, either done by us in our Web Design service or by a third party. We start by establishing the structure of the site, followed by the design and its functions and finally the launch of the site on a server.`,
        },
        {
            title: 'Website Design',
            text: 'We design your web page, starting with a sketch in which we define all the sections of your site and establish the user interface that we build from your ideas. Then we adapt the sketch to programs such as Photoshop or Figma and deliver the final design in the format you want.',
        },
        {
            title: 'Webserver Maintainance',
            text: 'We take care of maintaining your website previously hosted on a server, either done by us at the Web Development service or by a third party. We manage the content of your page, we verify that your server is the most appropriate for the needs of your page, we change the server if necessary, and more.',
        },
    ]

    for (let i = 0; i < services.length; i++) {
        services[i].addEventListener('click', () => {
            let item = document.createElement(services[i].tagName)
            item.className = required_class
            item.src = services[i].src
            item.id = services[i].id
            item.alt = services[i].alt

            let description_box = document.createElement('div')
            description_box.className = 'service_description'

            let title = document.createElement('h2')
            title.appendChild(document.createTextNode(description[i].title))
            description_box.appendChild(title)

            let text = document.createElement('p')
            text.appendChild(document.createTextNode(description[i].text))
            description_box.appendChild(text)

            let parent_1 = document.getElementsByClassName("service_img_container")[0]

            let parent_2 = document.getElementsByClassName("service_display")[0]

            parent_1.replaceChild(item, parent_1.children[0])

            parent_2.replaceChild(description_box, parent_2.children[1])
        })
    }
}
export default ShowServiceItem
