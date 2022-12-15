export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

export function getIndexElement(elements, element) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === element) return i
    }
}

export function styleInline(element, object) {
    Object.keys(object).forEach((item) => {
        element.style[item] = object[item]
    })
}

export const appendNode = (parent, tag_name, content, class_name = '') => {
    const newNode = document.createElement(tag_name)
    newNode.innerHTML = content
    if (class_name) newNode.className = class_name
    parent.append(newNode)
}
