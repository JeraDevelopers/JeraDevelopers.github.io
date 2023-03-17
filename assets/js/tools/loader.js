const Loader = (loaderClass) => { 
    setTimeout(() => {
        const loader = document.getElementsByClassName(loaderClass)[0]

        loader.style.opacity = 0

        setTimeout(() => {
            loader.style.display = 'none'
        }, 1000)

    }, 2000)
}

export default Loader