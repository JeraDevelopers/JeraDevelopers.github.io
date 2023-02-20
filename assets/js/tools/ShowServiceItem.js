const ShowServiceItem = (new_element, required_class) => {
    const services = document.getElementsByClassName(new_element)
    const description = [
        {
            title: 'Website Development',
            text: 'Tienes una idea? nosotros te ayudamos a transformarla en un sitio web completo y funcional. Nos encargamos desde el diseño hasta la publicación de su página.'
        },
        {
            title: 'Website Design',
            text: 'Quieres hacer una página pero no sabes donde comenzar? '
        },
        {
            title: 'Webserver Maintainance',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda fuga, maxime quae est non accusamus odio ullam nam animi itaque voluptatem debitis. Saepe consectetur facere, iure repellat consequatur laborum.'
        },
    ]

    for (let i = 0; i < services.length; i++) {
        services[i].addEventListener('click', () => {
            let item = document.createElement(services[i].tagName)
            item.className = required_class
            item.src = services[i].src
            item.id = services[i].id

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
