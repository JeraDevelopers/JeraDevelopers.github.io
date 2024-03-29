let RevealElementsOnScroll = {

    /*This module will help you to animate elements on scroll in many ways. Requires to place the element into a container. You may want to set your container's position to relative if its width is less than 100%*/

    LeftToCenter: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "right, opacity, transform"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.right = "50%"
                    hidden[i].style.transform = "translateX(50%)"
                    hidden[i].style.opacity = 1
                } else {
                    hidden[i].style.right = "100%"
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
    RightToCenter: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "right, opacity, transform"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.right = "50%"
                    hidden[i].style.transform = "translateX(50%)"
                    hidden[i].style.opacity = 1
                } else {
                    hidden[i].style.right = "0%"
                    hidden[i].style.transform = "translateX(0%)"
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
    RightToLeft: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "right, opacity, transform"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.right = "100%"
                    hidden[i].style.transform = "translateX(100%)"
                    hidden[i].style.opacity = 1
                } else {
                    hidden[i].style.right = "0%"
                    hidden[i].style.transform = "translateX(0%)"
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
    LeftToRight: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var hidden = document.getElementsByClassName(className);
            var screen = window.innerHeight;
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "right, opacity"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.right = "0%"
                    hidden[i].style.opacity = 1
                } else if (distance >= screen) {
                    hidden[i].style.right = "100%"
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
    Opacity: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "opacity"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.opacity = 1
                } else {
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
    FullRotation: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "opacity, transform"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.opacity = 1
                    hidden[i].style.transform = 'rotate(360deg)'
                } else {
                    hidden[i].style.opacity = 0
                    hidden[i].style.transform = 'rotate(0deg)'
                }
            }
        });
    },
    DisappearIfOnTop: (className, referenceClass, referenceElementClass) => {
        const hidden = document.getElementsByClassName(className);
        hidden[0].style.opacity = 0

        const reference = document.getElementsByClassName(referenceClass)[0]
        const referenceElement = document.getElementsByClassName(referenceElementClass)[0]

        reference.addEventListener("scroll", function () {
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "opacity"
                var distance = referenceElement.getBoundingClientRect().top;
                if (distance <= 0 && distance >= -100) {
                    hidden[i].style.opacity = 0
                } else {
                    hidden[i].style.opacity = 1
                }
            }
        });
    },
    AppearIfOnTop: (referenceClass, objectClass) => {

        const reference = document.getElementsByClassName(referenceClass)[0]

        const object = document.getElementsByClassName(objectClass)[0]

        reference.addEventListener('scroll', () => {
            if (window.innerWidth >= 580 && object.getBoundingClientRect().top > -777) {

                object.style.display = "grid"

            }

        })

    },
}
export default RevealElementsOnScroll