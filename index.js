import 'normalize.css'
import './index.scss'
import '@fortawesome/fontawesome-free/js/all.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

const data = [
    {
        label: 'Product',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Features',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Security',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Team',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Enterprise',
        status: 'processing',
        type: 'css'
    },
    {
        label: 'Customer stories',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'The ReadME Project',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Pricing',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Resources',
        status: 'processing',
        type: 'javascript'
    },
    {
        label: 'Roadmap',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Letter Spacing',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Line Height',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'List Style Type',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'List Style Position',
        status: 'new',
        type: 'css'
    },
    {
        label: 'Text Align',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Text Color',
        status: 'processing',
        type: 'css'
    },
    {
        label: 'Text Decoration',
        status: 'new',
        type: 'html'
    },
    {
        label: 'Text Decoration Color',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Text Decoration Style',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Text Decoration',
        status: 'done',
        type: 'javascript'
    },
    {
        label: 'Text Underline',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Text Transform',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Text Overflow',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Text Indent',
        status: 'done',
        type: 'javascript'
    },
    {
        label: 'Vertical Align',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Whitespace',
        status: 'new',
        type: 'css'
    },
    {
        label: 'Word Break',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Content',
        status: 'new',
        type: 'javascript'
    }
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const container = $('.container')

let active_index = 0

const appendNode = (parent, tag_name, content, class_name = '') => {
    const newNode = document.createElement(tag_name)
    newNode.innerHTML = content
    if (class_name) newNode.className = class_name
    parent.append(newNode)
}
appendNode(
    container,
    'div',
    `
        <button class='btn category'>
        Group by category
        </button>
        <button class='btn randomly'>
        Group Randomly
        </button>
    `,
    'group_button text-center'
)

const buttons = $('.group_button').getElementsByClassName('btn')
buttons[active_index].classList.add('btn--active')

const changeActiveButton = () => {
    Array.from(buttons).forEach((button, idx) => {
        button.addEventListener('click', function (e) {
            buttons[active_index].classList.remove('btn--active')
            active_index = idx
            e.target.classList.add('btn--active')
            group_randomly(active_index)
        })
    })
}
changeActiveButton()

appendNode(container, 'div', '', 'grid_node grid grid-cols-3 gap-4')

const grid_node = $('.grid_node')

appendNode(grid_node, 'div', '', 'html items_container')
appendNode(grid_node, 'div', '', 'css items_container')
appendNode(grid_node, 'div', '', 'javascript items_container')

const html_node = $('.html')
const css_node = $('.css')
const javascript_node = $('.javascript')

const add_item_column = (type, type_node) => {
    const arr_column = data.filter((item) => item.type === type)
    const number_done = arr_column.filter(
        (item) => item.status === 'done'
    ).length
    appendNode(
        type_node,
        'p',
        `${type} - <span class='done_ratio'>${number_done}/${arr_column.length}</span>`,
        'type_quantity'
    )

    arr_column.forEach((item, idx) => {
        appendNode(type_node, 'div', '', `${type}__item list_item`)
        appendNode(
            $$(`.${type}__item.list_item`)[idx],
            'div',
            '',
            'item_icon_label'
        )
        appendNode(
            $$(`.${type}__item.list_item .item_icon_label`)[idx],
            'div',
            '',
            `item_status ${item.status}`
        )
        appendNode(
            $$(`.${type}__item.list_item .item_icon_label`)[idx],
            'span',
            item.label,
            'list_item_label'
        )
    })
}
add_item_column('html', html_node)
add_item_column('css', css_node)
add_item_column('javascript', javascript_node)

$$('.list_item').forEach((item) => {
    appendNode(item, 'div', '', 'item_icons flex')
})

$$('.item_icons').forEach((item) => {
    appendNode(item, 'i', '', 'fa-regular fa-star')
    appendNode(item, 'i', '', 'fa-solid fa-dollar-sign')
})

// test randomly
const group_randomly = (type_group) => {
    if (type_group === 1) {
        appendNode(
            container,
            'div',
            `
            <div class="items_container random0">
                <p class='text-center'>
                Random 0 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random1">
                <p class='text-center'>
                Random 1 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random2">
                <p class='text-center'>
                Random 2 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random3">
                <p class='text-center'>
                Random 3 - <span class='done_ratio'></span>
                </p>
            </div>
            `,
            'grid_randomly grid grid-cols-4 gap-4'
        )

        Array.from($$('.list_item')).forEach((item) => {
            const clone = item.cloneNode(true)
            const x = getRandomInt(4)
            clone.classList.add(`type_random${x}`)
            $(`.random${x}`).append(clone)
        })
        $('.grid_node').classList.add('hidden')
        addEventDragDrop()
    }
    if (type_group === 0) {
        $('.grid_node').classList.remove('hidden')
        $('.grid_randomly').remove()
    }
    update_status()
}

const addEventDragDrop = () => {
    let dropped
    let dragged
    let touchX = 0
    let touchY = 0
    let isDragging = false
    let dx = 0
    let dy = 0
    let clone

    const handleTouchStart = (e) => {
        if (
            !getParent(e.target, '.list_item') &&
            !e.target.classList.contains('list_item')
        )
            return
        isDragging = true
        dragged = e.target.classList.contains('list_item')
            ? e.target
            : getParent(e.target, '.list_item')
        console.log(dragged)

        clone = dragged.cloneNode(true)
        dragged.classList.add('dragging')
        const items_container = getParent(dragged, '.items_container')
        items_container.append(clone)
        dx = e.clientX - dragged.getBoundingClientRect().x / 6
        dy = e.clientY - dragged.getBoundingClientRect().y
        clone.style.position = 'absolute'
        clone.style.pointerEvents = 'none'
        clone.style.zIndex = 100
        clone.onmouseup = null
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        touchX = e.clientX - dx
        touchY = e.clientY - dy - 115
        clone.style.left = `${touchX}px`
        clone.style.top = `${touchY}px`
        $('.cancel_drag_zone').classList.add('dragging')
    }

    const handleTouchEnd = (e) => {
        if (isDragging) {
            isDragging = false
            dragged.classList.remove('dragging')
            if (e.target.classList.contains('cancel_drag_zone')) {
                dragged = undefined
            } else {
                dropped = e.target.classList.contains('items_container')
                    ? e.target
                    : getParent(e.target, '.items_container')
                dropped.append(dragged)
            }
            $('.cancel_drag_zone').classList.remove('dragging')
            clone.remove()
            update_status()
        }
    }

    $$('.list_item').forEach((item) => {
        item.addEventListener('mousedown', handleTouchStart)
    })

    $('.container').addEventListener('mousemove', handleTouchMove)
    $('.container').addEventListener('mouseup', handleTouchEnd)
}
addEventDragDrop()

const update_status = () => {
    $$('.done_ratio').forEach((item) => {
        const items_container = getParent(item, '.items_container')
        const total_done = items_container.querySelectorAll('.done').length
        const total = items_container.querySelectorAll('.list_item').length
        item.innerHTML = `${total_done}/${total}`
    })
}

appendNode(
    $('.container'),
    'div',
    `
`,
    'cancel_drag_zone'
)
